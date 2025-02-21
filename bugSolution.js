function foo(a, b) {
  if (a === 0 || b === 0 || a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle zero, null, and undefined values
  }
  return a / b;
}
//Added more comprehensive checks for null and undefined values.