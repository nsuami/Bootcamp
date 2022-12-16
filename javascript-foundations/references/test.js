let color = { name: "red", hex: "BF3100" };
let a = { color: color };
let b = a;
color.hex = "FF312E";
console.log(b);