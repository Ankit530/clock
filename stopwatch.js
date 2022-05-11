var hrs = 0;
    var mins = 0;
    var secs = 0;
    var flag = 1;
function start(val)
{
    if(flag == 2)
    {
        alert("click on reset");
    }
    else{
    flag = val;
    var interval = setInterval(() => {
        second();
    }, 1000);}
}
function reset()
{
    window.location.reload();
}
function second()
{
    if(flag == 2)
    {
        clearInterval(interval);
        document.getElementById("time").innerHTML = hrs + " : " + mins + " : " +secs;
        
    }
    if(secs < 60)
    {
        ++secs;
    }
    if(secs > 59)
    {
        ++mins;
        secs = 0;
    }
    else if(mins > 59)
    {
        ++hrs;
        mins = 0;
    }
    document.getElementById("time").innerHTML = hrs + " : " + mins + " : " +secs;
}