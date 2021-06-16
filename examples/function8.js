//FUNCTIONS AS ARGUMENTS

function callFourTimes(f) {
    f();
    f();
    f();
    f();
}

function laugh() {
    console.log ('HAHAHAHAHAHAHAH LOL');
}

function sob() {
    console.log ("Snif snif. I'm so sad.");
}

callFourTimes(laugh);

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

repeatNTimes(laugh, 2);

function pickOne (f1, f2) {
    let random = Math.random();
        if (random < 0.5) {
            f1();
        } else {
            f2();
        }
}

pickOne(laugh, sob);

