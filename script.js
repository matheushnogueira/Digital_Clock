const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

const timer = setInterval(function time() {
    let dateToday = new Date();
    let d = dateToday.getDate();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if( d < 10 ) d = '0' + d;
    if( hr < 10 ) hr = '0' + hr;
    if( min < 10 ) min = '0' + min;
    if( s < 10 ) s = '0' + s;

    days.textContent = d;
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;

});