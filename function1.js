function roll(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        let r = Math.floor(Math.random() * 6 + 1);
        console.log (`Rolled: ${r}`);
    }
}

roll(3);