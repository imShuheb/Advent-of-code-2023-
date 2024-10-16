const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('day_1_puzzel.txt'),
    output: process.stdout,
    terminal: false
});

const numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
}



let totalCalibration = 0;

rl.on('line', (line) => {
    const digits = line.match(/\d/g);
    const words = line.match(/\b\w+\b/g);

    if (words) {
        words.forEach((word) => {
            // Loop through the number words to find matches
            Object.keys(numbers).forEach((key) => {
                if (word.includes(key)) {
                    console.log(`Found string number: ${key}, Numeric value: ${numbers[key]}`);
                    totalCalibration += numbers[key]; // Add the numeric value
                }
            });
        });
    }
});

rl.on('close', () => {
    console.log(`Total calibration value: ${totalCalibration}`);
});
