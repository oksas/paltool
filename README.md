# paltool

paltool is a JavaScript-based editor for `.pal` files used in idtech 1 games such as Doom 1, Doom 2, Heretic, and Hexen.

By default, paltool loads the vanilla Doom palette. Other palettes can be imported from your local machine by using the "Load" button in the top toolbar. And similarly, any modifications you make to the currently displayed palette can be saved to your local machine as a `.pal` file with the usage of the "Save" button. Please see the section below for details on the `.pal` file specification, or see [this page on the Doom Wiki](https://doomwiki.org/wiki/PLAYPAL) for more detailed information as it relates to the Doom engine.

To export palettes from existing `.wad` files for usage in paltool, [SLADE](http://slade.mancubus.net/) is the recommended tool. Currently SLADE's palette editing capabilities far surpass paltool.

## The `.pal` format

The `.pal` format expected and used by paltool is as follows:

- A `.pal` file is 768 bytes in length
- The value of each byte represents a given palette index's red, green, and blue values, respectively. For example, byte 0 is the red component of the first palette index, byte 1 is the green component, 2 is the blue component; byte 3 is the red component for the second index in the palette, etc. Therefore a palette with 256 colors is represented.

paltool will show an error notification if the user attempts loading a `.pal` file that does not follow this specification.

## Todos

- Modify the way individual index edits are handled so that edits are only pushed onto the undo/redo stack once the user unfocuses a palette color component input (but still retain the live preview of color edits)
- Add a gradient mode that allows the user to choose a start and end color to apply over a range of selected indices
- Add a shift mode that allows the user to modify the HSL values each index in a selected range
- Add option to load either from a .pal file or from a preselected list of default palettes
- Add option to save either to a .pal file or to a list of saved palettes in local storage
