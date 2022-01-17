// for hour hand  = 30h + m / 2

// for second hand = 6s degree

// m minute = 6m degree
setInterval(() => {
    let d = new Date();
    let hourtime = d.getHours();
    let mintime = d.getMinutes();
    let sectime = d.getSeconds();

    // in 12hr small niddle rotate to 360 degree, then for 1 hour it will rotate 30 degree.
    // and also hour depends on the min rotation as well,
    // 60 min  --> 30 degree rotation, then for 1 min it will rotate to 1 / 2 degree.
    // for hour rotation formula 30 * hour + min / 2
    let hourrotation = (30 * hourtime) + (mintime / 2);

    // 60 min --> 360 degree, then for 1 min --> 6degree
    // formula will be 6 * min time
    let minrotation = 6 * mintime;

    // 60 seconds --> 360 degree rotate, then for 1 sec-->6s degree\
    // Formula --> 6*sectime
    let secrotation = 6 * sectime;

    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let seconds =  document.getElementById('second');

    hour.style.transform = `rotate(${hourrotation}deg)`;
    minute.style.transform = `rotate(${minrotation}deg)`;
    seconds.style.transform =  `rotate(${secrotation}deg)`;

}, 1000);
