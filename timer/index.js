const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function formatNumber(number) {
    return (number < 10 ? '0' : '') + number;
}

function updateTimer() {
    const targetDate = new Date('2024-12-31T23:59:59'); 
    const now = new Date();
    let difference = targetDate - now;

    
    let days = difference / (1000 * 60 * 60 * 24);
    days = days - (days % 1); 
    
    let hours = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    hours = hours - (hours % 1); 

   
    let minutes = (difference % (1000 * 60 * 60)) / (1000 * 60);
    minutes = minutes - (minutes % 1); 

    
    let seconds = (difference % (1000 * 60)) / 1000;
    seconds = seconds - (seconds % 1); 

    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);
}

setInterval(updateTimer, 100);
updateTimer();
