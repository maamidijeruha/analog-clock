


let hourdiv=document.querySelector("[data-hour-hand]");

let mindiv=document.querySelector("[data-minute-hand]");
let secdiv=document.querySelector('[data-second-hand]');
setInterval(updateClock,1000);


function updateClock(){
    let date=new Date();
    let sec= date.getSeconds()/60;
    let min= date.getMinutes()/60;
    let hours= date.getHours()/12;
    setrotation(secdiv,sec);
    setrotation(mindiv,min);
    setrotation(hourdiv,hours);

}
function setrotation(element,rotationratio){

 element.style.setProperty('--rotation',   rotationratio*360);
}
updateClock();