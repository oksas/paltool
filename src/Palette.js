class Palette {
  constructor() {
    // We will store only the raw palette (typed array), because there's no real
    // need to store both the raw and RGB-format palettes. Consumers of this
    // class can just do the RGB conversion once and use that return value.
    this.rawPalette = null;
  }

  // Expects 768-length typed array as input, validates input, and stores
  // input on this if all validation checks pass
  parseFromTypedArray(typedArr) {
    // Check for invalid palette sizes
    if (typedArr.length !== 768) {
      throw new Error('unknown format: not a valid 768-byte length palette');
    }

    // Check for any palette RGB value being out of bounds [0, 255] inclusive
    for (let i = 0; i < typedArr.length; i++) {
      if (typedArr[i] > 255 || typedArr[i] < 0) {
        throw new Error(
          `unknown format: palette index ${i} with value ${typedArr[i]} is out of bounds [0, 255]`
        );
      }
    }

    // If we made it this far, then this is a valid palette
    this.rawPalette = typedArr;

    return this;
  }

  // Expects [{ r, g, b }] format input, parses input, creates and stores raw
  // typed array palette as result
  parseFromRGB(palRGB) {
    let newRawPal = new Uint8Array(768);
    if (palRGB.length > 256) {
      throw new Error(
        `unknown format: RGB palette with size ${palRGB.length} is greater than max length of 256`
      );
    }

    for (let i = 0; i < palRGB.length; i++) {
      let { r, g, b } = palRGB[i];
      let baseIndex = i * 3;
      if (r > 255 || r < 0)
        throw new Error(
          `unknown format: RGB palette entry at index ${i} with r value ${r} is out of bounds [0, 255]`
        );
      if (g > 255 || g < 0)
        throw new Error(
          `unknown format: RGB palette entry at index ${i} with g value ${g} is out of bounds [0, 255]`
        );
      if (b > 255 || b < 0)
        throw new Error(
          `unknown format: RGB palette entry at index ${i} with b value ${b} is out of bounds [0, 255]`
        );
      newRawPal[baseIndex] = r;
      newRawPal[baseIndex + 1] = g;
      newRawPal[baseIndex + 2] = b;
    }

    this.rawPalette = newRawPal;

    return this;
  }

  // Gets the rawPalette
  getTypedArray() {
    return this.rawPalette;
  }

  // Gets this.rawPalette and converts it to [{ r, g, b }] format
  getRGB() {
    if (!this.rawPalette) return null;

    let palRGB = [];
    for (let i = 0; i < this.rawPalette.length; i += 3) {
      palRGB.push({
        r: this.rawPalette[i],
        g: this.rawPalette[i + 1],
        b: this.rawPalette[i + 2]
      });
    }
    return palRGB;
  }
}

export default Palette;
