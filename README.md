# palette-2-gradient

----
## what is it?

> It's a script for Photoshop that adds a new gradient to your gradients palette by reading the colors from your swatches panel. The resulting gradient will be evenly distributed with no alphas and all midpoints at 50%.

> The idea is that after you have carefully chosen a palette, you sometimes need the colors in between. Please see this interesting collection for an example. [Palette Jacks](http://gimmethosecolors.blogspot.com/)

> You only need palette2gradient.flat.jsx, I included the unflattened palette2gradient.jsx for archival purposes but you'll need the latest version xbytor's amazing xtools suite in order to run it. There are some issues with the latest xtools (2_1 as of this writing) version of Gradient.jsx and ColorSwatches.jsx so you may need to contact the author for the fixed versions.

----
## usage
1. Download palette2gradient.flat.jsx
2. In Photoshop, go to File -> Scripts -> Browse...
3. Choose the .jsx file.
4. Open your gradients palette to see your new gradient

----
## Known Issues
The script currently fails if more than around 100 colors are in your swatches panel. I don't currently have any plans to fix this since you would probably never need that many flags in your gradient.