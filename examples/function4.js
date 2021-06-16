function average (arr) {
    for (let num of arr) {
        total += num;
    }
    return total / arr.lenght;
}

average([0, 50]);