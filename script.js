const display = document.querySelector(".clock");
const audio = new Audio ("egiye.mp3");
audio.loop = true;
let alarmStart = null;
let alarmEnd = null;

function continueTime() {
const date = new Date();
const hour = manageTime(date.getHours());
const minutes =manageTime(date.getMinutes());
const seconds = manageTime(date.getSeconds());

display.innerText = hour + " : " + minutes + " : " + seconds;
}

function manageTime(time){
    if(time<10)
    return "0" + time;
    return time;
}

setInterval(continueTime, 1000);

function setAlarmTime(value){
    alarmStart = value;
}

function setAlarm(){
    if(alarmStart){
        const current = new Date();
        const timeAlarm = new Date (alarmStart);

   if (timeAlarm> current){
            const timeout = timeAlarm.getTime() - current.getTime();
            alarmEnd = setTimeout(function() {
                audio.play();
            }, timeout);

            alert("Alarm Set!");

        }
    }
}

function clearAlarm(){
    audio.pause();
    if(alarmEnd){
        clearTimeout(alarmEnd);
        alert("Alarm Cleared!");
    }
}