"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countNumberProperties(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }
        if (number > 0) {
            positiveCount++;
        }
        else if (number < 0) {
            negativeCount++;
        }
    }
    return { even: evenCount, negative: negativeCount, odd: oddCount, positive: positiveCount, };
}
console.log(countNumberProperties([2, 4, 6, 8, 10]));
//# sourceMappingURL=task-2.js.map