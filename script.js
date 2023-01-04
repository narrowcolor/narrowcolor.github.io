  function openH() {
    var x = document.getElementById("h-content");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
     }
  }
  
  
  function generat(){
  var randomNum=Math.floor(Math.random()*16777215);
  var randomCode="#"+randomNum.toString(16);
  
  document.getElementById("colorCode").innerText=randomCode;
  document.getElementById("block").style.backgroundColor=randomCode;
  }
  
  
  
  function copyColorCode(element) {
  const colorCodeType = document.getElementById('color-code-type').value;
  let colorCode;
  if (colorCodeType === 'rgb') {
  colorCode = getComputedStyle(element).backgroundColor;
  } else if (colorCodeType === 'hex') {
  colorCode = rgbToHex(getComputedStyle(element).backgroundColor);
  } else if (colorCodeType === 'hsl') {
  colorCode = rgbToHsl(getComputedStyle(element).backgroundColor);
  }
  copyTextToClipboard(colorCode);
  }
  
  function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  }
  
  function rgbToHex(rgb) {
  const hexValues = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
  };
  const parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete(parts[0]);
  for (let i = 1; i <= 3; ++i) {
  parts[i] = parseInt(parts[i]).toString(16);
  if (parts[i].length === 1) parts[i] = '0' + parts[i];
  }
  return '#' + parts.join('').toLowerCase();
  }
  
  
  
  function rgbToHsl(rgb) {
  const r = parseInt(rgb.substring(4, rgb.indexOf(',')));
  const g = parseInt(rgb.substring(rgb.indexOf(',')+1, rgb.lastIndexOf(',')));
  const b = parseInt(rgb.substring(rgb.lastIndexOf(',')+1, rgb.indexOf(')')));
  
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
  h = s = 0; // achromatic
  } else {
  const d = max - min;
  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  switch (max) {
  case r: h = (g - b) / d + (g < b ? 6 : 0); break;
  case g: h = (b - r) / d + 2; break;
  case b: h = (r - g) / d + 4; break;
  }
  h /= 6;
  }
  
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  }
  
  
