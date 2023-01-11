// Write a JavaScript program to find the area of ascalene triangle.

let area;
const a = 8; const b = 10; const c = 6;
let perimeter = (a + b + c)/2;
area = perimeter*(perimeter-a)*(perimeter-b)*(perimeter-c);
area = Math.sqrt(area);
console.log(area);