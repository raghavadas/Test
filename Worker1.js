var c=1;
function timerCount(){
    postMessage(c);
    c++;
    setTimeout("timerCount()",500);
}
timerCount();