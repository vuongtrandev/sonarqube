// Example file deliberately violating SonarQube rules

// ❌ Vi phạm: hàm rỗng (Empty function)
function doNothing(): void {}

// ❌ Vi phạm: biến khai báo mà không dùng (Unused variable)
const unusedVar: number = 42;

// ❌ Vi phạm: lặp code (Duplicated blocks)
function calcSum(a: number, b: number): number {
  return a + b;
}

function addNumbers(x: number, y: number): number {
  // đoạn code trùng với calcSum
  return x + y;
}

// ❌ Vi phạm: hard-coded password (Security hotspot)
const password = "123456"; // không bao giờ lưu password dạng plain text

// ❌ Vi phạm: console.log trong production code
console.log("Debugging info:", password);

// ❌ Vi phạm: hàm có độ phức tạp cao (Cognitive complexity)
function complicatedLogic(n: number): string {
  let result = "";
  if (n > 0) {
    if (n % 2 === 0) {
      if (n % 3 === 0) {
        if (n % 5 === 0) {
          result = "Divisible by 2, 3, and 5";
        } else {
          result = "Divisible by 2 and 3";
        }
      } else {
        result = "Divisible by 2";
      }
    } else {
      result = "Odd number";
    }
  }
  return result;
}

export { doNothing, calcSum, addNumbers, complicatedLogic };
