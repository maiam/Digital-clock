const hours = document.getElementById('hours');
const miutes = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateTime () {

    newHours = new Date().getHours();
    newMinutes = new Date().getMinutes();
    newSeconds = new Date().getSeconds();

    if(newHours > 12) {ampm.innerText = 'PM'};

    hours.innerText = newHours;
    minutes.innerText = newMinutes;
    seconds.innerText = newSeconds;

    setTimeout(() => {
        updateTime();
    }, 1000);
}

updateTime();