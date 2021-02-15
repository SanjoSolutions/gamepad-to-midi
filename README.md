# Gamepad to MIDI

This work is devoted to God.

The script implements the the RT button of a Xbox 360 Controller,
which can for example be used to control a knob on a audio effect in
Ableton Live.

## Setup

### Mac

You can set up a virtual MIDI device with the following steps:

1. Open "Audio MIDI Setup"
2. Menu -> Window -> Show MIDI Studio
3. Double-click "IAC driver"
4. Check "Device is online" and make sure that it has at least one port (this was the case by default for me)
5. Apply and close the window

This device can now be used as a MIDI output
for the script and as a MIDI input in a DAW.

#### Ableton Live

"Edit MIDI Map" and press the button on the controller to use.

## Demo

[Demo](https://sanjosolutions.github.io/gamepad-to-midi/)
