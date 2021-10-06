var countDownDate = new Date("Oct 5, 2022 16:37:52").getTime();


let myfunc = setInterval(function() {
    
    var currentDate = new Date().getTime();
    
    var timeleft = countDownDate - currentDate;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (seconds < 10) {
        seconds = "0" + seconds
    };
    if (minutes < 10) {
        minutes = "0" + minutes
    };
    if (hours < 10) {
        hours = "0" + hours
    };
    if (days < 10) {
        days = "0" + days
    };
    
    
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours 
    document.getElementById("mins").innerHTML = minutes 
    document.getElementById("secs").innerHTML = seconds

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    
    
}, 1000)