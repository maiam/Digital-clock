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

function changeRegion() {

    const textHours = document.getElementById('text-hours');
    const textMinutes = document.getElementById('text-minutes');
    const textSeconds = document.getElementById('text-seconds');

    
    
        fetch('https://api.ipregistry.co/?key=tryout')
        .then(function (response) {
            return response.json();})
        .then(function (payload) {
            let country = payload.location.country.name;

            if (country === 'Brazil') {

                textHours.innerText = 'horas';
                textMinutes.innerText = 'minutos';
                textSeconds.innerText = 'segundos';
              }
        });
}

updateTime();
changeRegion();

  