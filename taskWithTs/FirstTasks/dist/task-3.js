"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkMathOperationsForNine(a, b) {
    if (a < 1 || a > 1000 || b < 1 || b > 1000) {
        return "Invalid";
    }
    if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
        return "Nine";
    }
    return "Nein";
}
console.log(checkMathOperationsForNine(10, 1));
console.log(checkMathOperationsForNine(5, 4));
console.log(checkMathOperationsForNine(5, 20));
//# sourceMappingURL=task-3.js.map