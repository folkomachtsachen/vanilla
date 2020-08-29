
export const hsl2rgb = (hsl) => {
    
    let h = hsl.h/360.0;
    let s = hsl.s/100.0;
    let l = hsl.l/100.0;
    let r, g, b;
    if (s == 0) {
        r = g = b = l;
    }
    else {
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
}


export const hue2rgb = (p, q, t) => {
   
    if(t < 0) t += 1;
    if(t > 1) t -= 1;
    if(t < 1/6) return p + (q - p) * 6 * t;
    if(t < 1/2) return q;
    if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
}


export const rgb2hsl = (rgb) => {
    let r = rgb.r/255;
    let g = rgb.g/255;
    let b = rgb.b/255;
    // let r /= 255;
    // let g /= 255;
    // let b /= 255;
    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0;
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return {h:Math.round(h * 360), s:Math.round(s * 100), l:Math.round(l * 100)};
    //return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
    //return [h, s, l];

}

export const rgb2hex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


export const rgbStringToRGB = (str) => {

    let regex = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
    let result = regex.exec(str);
    let arr = [parseInt(result[1]),parseInt(result[2]),parseInt(result[3])];
    return {r:arr[0], g:arr[1], b:arr[2]};
}



export const rgbStringToHSL = (str) => {

    let regex = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
    let result = regex.exec(str);
    // console.log("result");
    // console.log(result);
    // console.log("--------------");
    let arr = [parseInt(result[1]),parseInt(result[2]),parseInt(result[3])];
    let hsl = rgb2hsl(arr[0],arr[1],arr[2]);
    return hsl;
}



export const hexToRgb = (hex) => {

    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}


export default hsl2rgb;