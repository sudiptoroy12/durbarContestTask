"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    if (monthNumber < 1 || monthNumber > 12) {
        return "Invalid";
    }
    return months[monthNumber - 1];
}
console.log(getMonthName(3)); // March
console.log(getMonthName(10)); // October
console.log(getMonthName(13)); // Invalid
//# sourceMappingURL=task-1.js.map