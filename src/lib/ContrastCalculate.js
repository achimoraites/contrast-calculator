function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1, rgb2) {
  let { firstColor, secondColor } = sanitizeColors(rgb1, rgb2);
  var lum1 = luminance(firstColor[0], firstColor[1], firstColor[2]);
  var lum2 = luminance(secondColor[0], secondColor[1], secondColor[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05)
    / (darkest + 0.05);
}

function sanitizeColors(rgb1, rgb2) {
  let firstColor = rgb1;
  let secondColor = rgb2;
  if (!Array.isArray(firstColor)) {
    firstColor = hexToRgb(rgb1);
  }
  if (!Array.isArray(secondColor)) {
    secondColor = hexToRgb(rgb2);
  }
  return { firstColor, secondColor };
}

function hexToRgb(hex) {
  // if it is rgb just return it
  if (Array.isArray(hex)) {
    return hex;
  }

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

module.exports.contrast = contrast;
module.exports.hexToRgb = hexToRgb;