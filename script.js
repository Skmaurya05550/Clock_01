document.addEventListener("DOMContentLoaded", () => {

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    // initial update according to current time
    initialUpdate (hours, minutes, seconds);
    
    let second = seconds;
    second ++;
    setInterval (() => {
        updateSecond (second);
        second++;
        if (second > 59) {
            second = 0;
        }
    }, 1000);
});





function toggleClass (id) {
    const strip = document.querySelector(`#${id} .strip`);
    strip.classList.toggle ("toggle");
}





function addLeadingZero (number) {
    return number < 10 ? "0" + number : number;
}





function updateHour () {
    const id = "hour";
    const strip = document.querySelector(`#${id} .strip`);
    const first_child = strip.firstElementChild;
    let value = first_child.innerText;
    // toggle class
    toggleClass (id);
    // Time out
    setTimeout (() => {
        if (value == 59) {
            value = 0;
            value = addLeadingZero (value);
            first_child.innerText = value;
        }else {
            value++;
            value = addLeadingZero (value);
            first_child.innerText = value;
        }
        // toggle class
        toggleClass (id);
        const last_child = strip.lastElementChild;
        value = last_child.innerText;
        value++;
        value = addLeadingZero (value);
        last_child.innerText = value;
    }, 500);
}





function updateMinute () {
    const id = "minute";
    const strip = document.querySelector(`#${id} .strip`);
    const first_child = strip.firstElementChild;
    let value = first_child.innerText;
    // toggle class
    toggleClass (id);
    // Time out
    setTimeout (() => {
        if (value == 59) {
            value = 0;
            value = addLeadingZero (value);
            first_child.innerText = value;
        }else {
            value++;
            value = addLeadingZero (value);
            first_child.innerText = value;
        }
        // toggle class
        toggleClass (id);
        const last_child = strip.lastElementChild;
        value = last_child.innerText;
        value++;
        value = addLeadingZero (value);
        last_child.innerText = value;
    }, 500);
    if (value == 59) {
        updateHour ();
    }
}





function updateSecond (value) {
    const id = "second";
    const strip = document.querySelector(`#${id} .strip`);
    // toggle class
    toggleClass (id);
    // Time out
    setTimeout (() => {
        const first_child = strip.firstElementChild;
        value = addLeadingZero (value);
        first_child.innerText = value;
        // toggle class
        toggleClass (id);
        const last_child = strip.lastElementChild;
        if (value == 59) {
            value = 0;
            value = addLeadingZero (value);
            last_child.innerText = value;
        }else {
            value++;
            value = addLeadingZero (value);
            last_child.innerText = value;
        }
    }, 500);
    if (value == 0) {
        updateMinute ();
    }
}





function initialUpdate (hours, minutes, seconds) {
    let id, strip, first_child, last_child, value;
    const time_obj = {
        "hour" : hours,
        "minute" : minutes,
        "second" : seconds
    };
    for (let time in time_obj) {
        id = time;
        strip = document.querySelector(`#${id} .strip`);
        first_child = strip.firstElementChild;
        value = addLeadingZero (time_obj[time]);
        first_child.innerText = value;
        last_child = strip.lastElementChild;
        if (value == 59) {
            value = 0;
            value = addLeadingZero (value);
            last_child.innerText = value;
        }else {
            value++;
            value = addLeadingZero (value);
            last_child.innerText = value;
        }
    }
}














