burger=document.querySelector('.burger');
respList=document.querySelector('.resp-list');
burger.addEventListener('click',()=>{
    respList.classList.toggle('v-resp');

})
function hideContent() {
    var x = document.getElementById("content");
    var c = document.getElementById("cards");
   var y = document.querySelector(".container");
   var s = document.querySelector(".side-bar");
   // var z = document.querySelector(".book-list");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // }
    // else { x.style.display = "none"; }
    //if (z.style.display === "block") {
    //   z.style.display = "none";
    //}
    //else { z.style.display = "block"; }
    x.style.display="none";
    c.style.visibility="visible" ;
    s.style.height="360vh" ;
    // if (c.style.display === "none") {
    //     c.style.display = "block";
    // }
    // else { c.style.display = "none"; }isplay="block";
    // if (y.style.display === "none") {
    //     y.style.display = "block";
    // }
    // else { y.style.display = "none"; }
   
}
