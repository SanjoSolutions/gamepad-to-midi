async function main() {
  const midiAccess = await navigator.requestMIDIAccess()
  const input = Array.from(midiAccess.inputs.values())[1]

  input.addEventListener('midimessage', function (event) {
    console.log(event.data)
  })
}

main()
