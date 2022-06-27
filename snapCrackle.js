function snapCrackle(maxValue) {
    let script = []
    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 !== 0 && i % 5 == 0) {
            script.push("SnapCrackle")
        }
        else if (i % 2 !== 0) {
            script.push("Snap")
        }
        else if (i % 5 == 0) {
            script.push("Crackle")
        }

        else {
            script.push(i)
        }

    } return script

}
console.log(snapCrackle())