
// --------------------MENU -------------------------

// déclaration des variables
var hamburger = document.getElementById("hamburger");
var liens = document.getElementById("liens");

// ouverture menu
hamburger.addEventListener("click",function(){
    if( liens.style.display == "none"){
        liens.style.display = "block";
        // hamburger.src = "../images/cancel.png";
    } else {
        liens.style.display = "none";
        // hamburger.src = "../images/icone_Hamburger.png";
    }
});
liens.addEventListener("click", function(){
    liens.style.display = "none";
})

