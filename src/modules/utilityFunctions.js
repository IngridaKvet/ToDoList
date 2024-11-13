function rgbStringToHex(rgbString) {
    // Use a regular expression to extract the numbers from the string
    const result = rgbString.match(/\d+/g);
  
    // Convert each RGB value to hex and pad with 0 if necessary
    const [r, g, b] = result.map(Number);
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }


export {rgbStringToHex}