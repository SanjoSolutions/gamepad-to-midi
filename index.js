async function main() {
  const midiAccess = await navigator.requestMIDIAccess()
  const output = midiAccess.outputs.values().next().value
  if (output.name.startsWith('IAC Driver Bus')) {
    let wasPressedBefore = false

    function onTick() {
      const gamepad = navigator.getGamepads()[0]
      if (gamepad) {
        const button = gamepad.buttons[7]
        if (button.pressed) {
          send(Math.round(button.value * 127))
          wasPressedBefore = true
        } else if (wasPressedBefore) {
          send(0)
          wasPressedBefore = false
        }
      }

      requestNextTick()
    }

    function send(velocity) {
      const data = [186, 43, velocity]
      output.send(data)
      console.log(data)
    }

    function requestNextTick() {
      setTimeout(onTick, 1)
    }

    requestNextTick()
  } else {
    console.error(
      'MIDI device 1 does not match type "IAC Driver Bus". ' +
      'Make sure that you have configured the "IAC Driver Bus" on a Mac, ' +
      'as described in the README. ' +
      'And make sure that the MIDI device has the encoded index.'
    )
  }
}

main()
