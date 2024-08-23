#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
//function for countdown second
function* countdowntimer(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2
//count initialization
let timeiterator = countdowntimer(10);
//function to create countdown timer
function displaycountdown() {
    //value below 10
    let result = timeiterator.next();
    if (!result.done) {
        const now = new Date(); //current date and time call
        const countdowntime = new Date(now.getTime() + (result.value * 1000));
        //calculating remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdowntime, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displaycountdown, 1000); //i second is equal to 1000 min
    }
    else {
        //display result countdown complete
        console.log("countdown complete");
    }
}
//invoke
displaycountdown();
