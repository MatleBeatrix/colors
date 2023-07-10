function feladat01(szinek){
    let sum = 0;

    if (szinek.length == 0 || szinek.length == 1) return 0; 

    for(let i = 1; i < szinek.length; i++){
        let n = szinek.length;
        let k = i+1;
        sum = sum + (fact(n) / fact(k) / fact(n-k));
    }

    return sum;
}

function fact(n) {
    let fact = 1;
    if (n > 0){
        for(i = 1; i <= n; i++){
            fact = fact * i;
        }
    }
    return fact;
}

//PÉLDÁK

console.log(feladat01([]))
console.log(feladat01(["piros"]))
console.log(feladat01(["piros","kék"]))
console.log(feladat01(["piros","kék", "zöld"]))