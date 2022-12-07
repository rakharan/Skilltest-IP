// Buat fungsi untuk mengetahui apakah sum dari array adalah angka fibonacci
const nearestFibonacci = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let n = sum;

    if (Math.sqrt(5 * n ** 2 + 4) % 1 == 0 || Math.sqrt(5 * n ** 2 - 4) % 1 == 0) {
        console.log("Your number is a Fibonacci number!");
    } else {
        console.log("Your number is not a Fibonacci number!");
    }


    for (let i = 0; i <= arr.length; i++) {
        if (Math.sqrt(5 * (n + i) ** 2 + 4) % 1 == 0 || Math.sqrt(5 * (n + i) ** 2 - 4) % 1 == 0) {
            console.log(`Number needed to add to nearest Fibonacci is ${i}`)
            console.log(`${n + i} is the nearest Fibonacci number`);
        } else if (Math.sqrt(5 * (n - i) ** 2 + 4) % 1 == 0 || Math.sqrt(5 * (n - i) ** 2 - 4) % 1 == 0) {
            console.log(`Number needed to add to nearest Fibonacci is ${i}`)
            console.log(`${n - i} is the nearest Fibonacci number`);
        }
    }
}




nearestFibonacci([15, 1, 3]);