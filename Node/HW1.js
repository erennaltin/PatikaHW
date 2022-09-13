const args = process.argv.slice(2);
const radius = args[0];

console.log(`Yarıçapı ${radius} olan bir dairenin alanı: ${radius * radius * Math.PI}`);
