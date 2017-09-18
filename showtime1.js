function ShowTime(){
    var d=new Date();
    var t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    console.log(t);
}
setInterval(ShowTime,500);
var         