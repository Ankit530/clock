
setInterval(() => {
    second();
}, 1000);
var r = document.querySelector(':root');
function second()
{
    const d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var calsec = secs*6;
    var calmin = (mins * 6) + (secs/10);
    var calhr = (hrs * 30) + (calmin/12);
    //document.getElementById("ex").innerHTML = hrs + " : " + mins + " : " +secs;
    r.style.setProperty('--secangle', +calsec+"deg");
    r.style.setProperty('--minangle', +calmin+"deg");
    r.style.setProperty('--hrangle', +calhr+"deg");

}