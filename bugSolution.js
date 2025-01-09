function foo(a, b) {
  // Explicit type checking
if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    // Handle cases with non-numbers appropriately, e.g., throw an error or use a different operation
    console.error("Error: Operands must be numbers.");
    return NaN;
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); //Error: Operands must be numbers. NaN
console.log(foo(1, [2])); //Error: Operands must be numbers. NaN