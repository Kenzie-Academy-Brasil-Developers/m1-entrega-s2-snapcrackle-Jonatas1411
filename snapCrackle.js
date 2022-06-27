function snapCrackle(maxValue) {
    let string = []
    for (let i = 1; i <= maxValue; i++) {
        if ((i % 2) !== 0) {
            string.push("snap")
        }
        else if (( i % 5 == 0)) {
            string.push("Crackle")
        }
        else if((i % 2 !== 0 && i % 5 == 0)){
            string.push("SnapCrackle")

        }
        else{
            string.push(i)
        }

        
    }
    return string
}
console.log(snapCrackle ()) 
