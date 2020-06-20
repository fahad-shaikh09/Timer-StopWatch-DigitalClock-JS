var hour = new Date().getHours()


switch(hour) {
    case (13):
        setInterval(() => document.getElementById("hours").innerHTML = (1),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (14):
        setInterval(() => document.getElementById("hours").innerHTML = (2),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (15):
        setInterval(() => document.getElementById("hours").innerHTML = (3),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (16):
        setInterval(() => document.getElementById("hours").innerHTML = (4),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (17):
        setInterval(() => document.getElementById("hours").innerHTML = (5),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (18):
        setInterval(() => document.getElementById("hours").innerHTML = (6),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (19):
        setInterval(() => document.getElementById("hours").innerHTML = (7),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (20):
        setInterval(() => document.getElementById("hours").innerHTML = (8),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (21):
        setInterval(() => document.getElementById("hours").innerHTML = (9),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (22):
        setInterval(() => document.getElementById("hours").innerHTML = (10),1000);
        document.getElementById("format").innerHTML = "PM"
        break;
    case (23):
        setInterval(() => document.getElementById("hours").innerHTML = (11),1000);
        document.getElementById("format").innerHTML = "PM"
        break;

    default:
        setInterval(() => document.getElementById("hours").innerHTML = (hour),1000);
        document.getElementById("format").innerHTML = "AM"       
    }


// setInterval(() => document.getElementById("hours").innerHTML = (hour),1000);
setInterval(() => document.getElementById("mins").innerHTML = (new Date().getMinutes()),1000);
setInterval(() => document.getElementById("secs").innerHTML = (new Date().getSeconds()),1000);
clearInterval();



