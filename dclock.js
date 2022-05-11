
setInterval(() => {
    second();
}, 1000);
function second()
{
    const d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    if(hrs > 12)
        document.getElementById("time").innerHTML = (hrs-12) + " : " + mins + " : " +secs + " PM";
    else
        document.getElementById("time").innerHTML = hrs + " : " + mins + " : " +secs + " PM";
    
}