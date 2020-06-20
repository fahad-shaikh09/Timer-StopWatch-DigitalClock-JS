///////////////// STOP WATCH /////////////////////////////////////////////////////////////

var ms = 0;
var secs = 0;

var idOfSetInterval;

var start = () => {
 return idOfSetInterval = setInterval(() => {
        
        ++ms;
        if(ms >= 999) {
            ++secs;
            ms = 0;
        }        
        document.querySelector(".miliseconds").innerHTML = ms + " ms";
        document.querySelector(".seconds").innerHTML = secs  + " secs";

        },1);
}

var stop = () => {
    console.log("Start " + idOfSetInterval);
     window.clearInterval(idOfSetInterval);    
};

var reset = () => {
    ms = 0;
    secs = 0;
    document.querySelector(".miliseconds").innerHTML = ms + " ms";
    document.querySelector(".seconds").innerHTML = secs  + " secs";
    console.log("Reset button is clicked");
}

///////////////// TIMER /////////////////////////////////////////////////////////////



getData = () => {
    var timerMins = document.getElementById("timerMins").value;
    console.log("Minutes: " + timerMins);

    var timerSecs = document.getElementById("timerSecs").value;
    console.log("Seconds: " + timerSecs);

    setInterval(() => {

        --timerSecs;
        if(timerSecs == 0){
            --timerMins;
            timerSecs = 59;
        }
        document.getElementById("displayMins").innerHTML = timerMins + " mins";
        document.getElementById("displaySecs").innerHTML = timerSecs + " secs";

       

    },1000)

}


var timerStart = () => {
    console.log("timerStart is clicked")
}


var timerReset = () => {
    console.log("timerReset is clicked")
}
