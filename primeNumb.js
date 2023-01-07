function getPrime(n) {
    const arr = []
    for (let i = 2; arr.length < n; i++) {
        let end = false;
        for (let index = 0; index < i; index++) {
            if(i % arr[index] === 0) {
                end = true;
                break
            }
        }
        if(end === false) {
            arr.push(i)
        };
    }
    return arr;
}

console.time();
console.log(getPrime(process.argv[2]));
console.timeEnd();