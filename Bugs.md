## BUGS DOCUMENTATION(all line numbers are with reference to the default template files)

**Slider Target Value Bug**
The target value of the selected slider in the main.js file line 56 is supposed to be converted into a number value.

**Light Intensity Condition Bug**
The componentData object isLightOn property inside the basicSettings.js file line 87 is being set to false, even when the intensity value is greater than 0. The fix is to change the value to true when the intensity is greater than 0.

**Room Light On & Off Bug**
Fixing the light Intensity Condition Bug as stated above will also fix the turning on and off, the room bulb.

**Customize automatice Preset Double Bang Bug**
The double bang used in the customizeAutomaticOnPreset and customizeAutomaticOffPreset on line 141 & 164 respectively inside the advanceSettings.js will always be truthy, which will cause the function to return. The can be fixed by using a single bang to toggle the light value.
