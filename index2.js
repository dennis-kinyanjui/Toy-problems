function speedDector(currentspeed){
    const maxspeed = 70;

    const demeritpoint = Math.floor((currentspeed - maxspeed)/5);
if (demeritpoint <70){
    return console.log("OK");

}else if (demeritpoint <=12 ){
  return ("License suspendend")
}
else {
    return ('Points: ${demeritpoint}');

}
}