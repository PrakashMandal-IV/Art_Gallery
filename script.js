
//nav bar
function openbar() {
    document.getElementById("sidebar").style.width = "150px";
  }
  
  function closebar() {
    document.getElementById("sidebar").style.width = "0";
  }

//slider
let images=["prew/couple.jpg","prew/snow_beauty.jpg","prew/ripples.jpg","prew/asuna.jpg",];
var i=1;
function nextimg(){
    i=i+1;
    i=i % images.length;
    return images[i];
}


function right(){
    let btn=document.getElementById(rightbtn);
    document.getElementById("slider").src=nextimg();
}
function left(){
    let btn=document.getElementById(leftbtn);
    document.getElementById("slider").src=nextimg();
}