const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('day_1_puzzel.txt'),
    output: process.stdout,
    terminal: false
});

let totalCalibration = 0;

rl.on('line', (line) => {
    const digits = line.match(/\d/g);

    if (digits && digits.length > 0) {
        const firstDigit = digits[0];
        const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;

        const calibrationValue = parseInt(firstDigit + lastDigit, 10);
        console.log(`Line: ${line}, Calibration value: ${calibrationValue}`);

        totalCalibration += calibrationValue;
    }
});

rl.on('close', () => {
    console.log(`Total calibration value: ${totalCalibration}`);
});
