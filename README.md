# Unexpected Results from Implicit Type Coercion in Conditional Statement

This repository demonstrates a subtle JavaScript bug caused by implicit type coercion in a conditional statement. The code appears correct at first glance, but it fails when input values are null or undefined.

## The Bug

The function `foo` intends to handle division by zero. However, it uses loose comparison (`===`) which does not correctly identify null or undefined values and results in unexpected behaviour.

## The Solution

The solution enhances the function to explicitly check for null or undefined values before performing the division, ensuring robust and predictable behaviour.