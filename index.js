const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Given batteryBatches array


// Using reduce to sum up all the elements in batteryBatches
const totalBatteries = batteryBatches.reduce((acc, current) => acc + current, 0);

console.log(totalBatteries); // Output: 31
