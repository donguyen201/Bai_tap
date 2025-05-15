// Bài 1: Nhập tên và hiển thị theo nhiều cách
let ten = prompt("Nhập tên của bạn:");

// Cách 1: Dùng cộng chuỗi
console.log("Tên của bạn là: " + ten);

// Cách 2: Dùng template string
console.log(`Chào bạn, ${ten}! Rất vui được gặp bạn.`);

// Cách 3: alert
alert("Chào mừng bạn: " + ten);

// Cách 4: Viết hoa
console.log("Tên in hoa: " + ten.toUpperCase());

// Bài 2: Tính biểu thức
let a = 1;
let b = 2;
let c = 10;
let d = 21;
let result = a + b - c / d;

// Cách 1
console.log("Kết quả là: " + result);

// Cách 2
console.log(`Kết quả phép tính là: ${result}`);

// Cách 3
console.log("Làm tròn (2 số thập phân): " + result.toFixed(2));

// Cách 4
let output = "Kết quả sau phép tính: " + result;
console.log(output);
