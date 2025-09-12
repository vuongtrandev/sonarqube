// Clean example for SonarQube/SonarCloud

// ✅ Có chú thích cho hàm rỗng (thoả rule S1186 – Empty function)
// Lý do: giữ API tương thích khi được export/public dùng ở nơi khác.
function doNothing(): void {
  // Intentionally left blank to keep a stable public API.
}

// ✅ Không còn biến thừa
// const unusedVar: number = 42;  // removed

// ✅ Tránh lặp code: addNumbers dùng lại calcSum
function calcSum(a: number, b: number): number {
  return a + b;
}

function addNumbers(x: number, y: number): number {
  return calcSum(x, y);
}

// ✅ Giảm cognitive complexity bằng early return & helper
function divisibleBy(n: number, ...divisors: number[]): boolean {
  return divisors.every((d) => d !== 0 && n % d === 0);
}

function complicatedLogic(n: number): string {
  if (n <= 0) return "";

  if (divisibleBy(n, 2, 3, 5)) return "Divisible by 2, 3, and 5";
  if (divisibleBy(n, 2, 3)) return "Divisible by 2 and 3";
  if (n % 2 === 0) return "Divisible by 2";
  return "Odd number";
}

export { doNothing, calcSum, addNumbers, complicatedLogic };
