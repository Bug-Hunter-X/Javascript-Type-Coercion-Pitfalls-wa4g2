# Javascript Type Coercion Pitfalls
This example demonstrates how Javascript's type coercion can lead to unexpected results when using the + operator with mixed data types. The + operator will perform string concatenation if either operand is a string. This can be problematic when you intend to perform numerical addition.

## Bug
The `foo` function adds two arguments, but due to type coercion it behaves differently depending on the types of arguments passed to it.

- When adding two numbers, the addition is correct.
- When adding a number and a string or array, string concatenation occurs.

This behavior might be unexpected for developers who are not familiar with Javascript's loose typing system. 

## Solution
To avoid this issue, always ensure operands are of the same type before performing arithmetic operations.  Explicit type checking or conversion before addition can provide a more robust solution.