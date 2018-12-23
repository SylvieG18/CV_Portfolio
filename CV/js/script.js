// déclaration des variables
var entete = document.getElementById("entete");
var presentation = document.getElementById("presentation");
var competences = document.getElementById("competences");
var savoir = document.getElementById("savoir");
var realisations = document.getElementById("realisations");
var experience = document.getElementById("experience");
var exp = document.getElementById("exp");
var formation = document.getElementById("formation");
var diplIcon = document.getElementById("diplIcon");
var diplomes = document.getElementById("diplomes");
var contact = document.getElementById("contact");
var contactIcon = document.getElementById("contactIcon");
var via = document.getElementById("via");

// ouverture/fermeture des catégories  au clic  pour version MOBILE

if ($(window).width()<1000){
    competences.addEventListener("click",function(){
        if (savoir.style.display == "none"){
            absence();
            competences.style.display = "block";
            savoir.style.display = "block";        
        } else{
            savoir.style.display = "none"; 
            presence();
        }  
    });

    experience.addEventListener("click",function(){
        if (exp.style.display == "none"){
            absence();
            experience.style.display = "block";
            exp.style.display = "block"; 
        } else{
            exp.style.display = "none"; 
            presence();
        }  
    });

    diplIcon.addEventListener("click",function(){
        if (diplomes.style.display == "none"){
            absence();
            formation.style.display = "block";
            diplomes.style.display = "block"; 
        } else{
            diplomes.style.display = "none"; 
            presence();
        }    
    });

    contactIcon.addEventListener("click",function(){
        if (via.style.display == "none"){
            absence();
            contact.style.display = "block";
            via.style.display = "block"; 
        } else{
            via.style.display = "none";
            presence();       
        }    
    });

    function presence (){
        presentation.style.display = "block";
        competences.style.display = "block";
        realisations.style.display = "block";
        experience.style.display = "block";
        formation.style.display = "block";
        contact.style.display = "block";
    }

    function absence(){ 
        presentation.style.display = "none";
        competences.style.display = "none";
        realisations.style.display = "none";
        experience.style.display = "none";
        formation.style.display = "none";
        contact.style.display = "none";  
    }
}

// --------------VERIFICATION DU FORMULAIRE DE CONTACT---------------

// verification saisie nom et prenom
function verifNom(champ){
    console.log(champ.value);
    for(var i = 0; i < champ.value.length; i++){
        var lettre = champ.value[i];
        console.log(lettre);
        if ((lettre == '0') || (lettre == '1') || (lettre == '2') || (lettre == '3') ||
             (lettre == '4') || (lettre == '5') || (lettre == '6') || (lettre == '7') ||
             (lettre == '8') || (lettre == '9') || (lettre == '!') || (lettre == ',') ||
             (lettre == '_') || (lettre == '/') || (lettre == '\\') || (lettre == '"') ){
                 champ.style.backgroundColor = "rgb(250,100,80)";
                 champ.value = "";
                 champ.placeholder = "chiffres et caractères spéciaux non autorisés !"; 
                 verifForm();         
             } else {
                 champ.style.backgroundColor = "rgb(116,235,116)";              
                 verifForm();
             }
    }  
};
// verification email

function verifMail(champ){
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value)){
     champ.style.backgroundColor= "rgb(250,100,80)";
     champ.value = "";
     champ.placeholder = "adresse non valide";
     verifForm();
    } else {
     champ.style.backgroundColor= "rgb(116,235,116)";
     verifForm();
    }
 }  

// textaera non vide

function verifText(champ){
    if(champ.value != ""){
        champ.style.backgroundColor= "rgb(116,235,116)";
        verifForm();
    } else {
        champ.style.backgroundColor= "rgb(250,100,80)";
        champ.placeholder = "absence de message !";
        verifForm();
    }
}


// bouton submit
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var mail = document.getElementById('mail');
var message = document.getElementById('message');
var valid = document.getElementById('valid');

valid.onmouseover = verifForm();

function verifForm(){
    if (nom.style.backgroundColor=="rgb(116, 235, 116)" &&
        prenom.style.backgroundColor=="rgb(116, 235, 116)" &&
        mail.style.backgroundColor=="rgb(116, 235, 116)" &&
        message.style.backgroundColor=="rgb(116, 235, 116)")
        {
            valid.style.backgroundColor = "rgb(116,235,116)";
        } else {
            valid.style.backgroundColor = "rgb(250,100,80)";
        }
}




// changement background au clic dans barre de navigation (version DESKTOP)
var lien1 = document.getElementById("lien1");
var lien2 = document.getElementById("lien2");
var lien4 = document.getElementById("lien4");
var lien5 = document.getElementById("lien5");
var lien6 = document.getElementById("lien6");
var BGimage = "linear-gradient(to bottom, rgb(36, 50, 112),rgb(139, 166, 216))";

lien1.addEventListener("click",function(){
    if (lien1.style.backgroundImage != "none"){
        lien2.style.backgroundImage = BGimage; 
        lien4.style.backgroundImage = BGimage; 
        lien5.style.backgroundImage = BGimage; 
        lien6.style.backgroundImage = BGimage; 
        lien1.style.backgroundColor = "rgb(36, 50, 112)";
        lien1.style.backgroundImage = "none";        
    } else {
        lien1.style.backgroundImage = BGimage; 
    }  
})

lien2.addEventListener("click",function(){
    if (lien2.style.backgroundImage != "none"){
        lien1.style.backgroundImage = BGimage;
        lien4.style.backgroundImage = BGimage; 
        lien5.style.backgroundImage = BGimage; 
        lien6.style.backgroundImage = BGimage; 
        lien2.style.backgroundColor = "rgb(36, 50, 112)";
        lien2.style.backgroundImage = "none";        
    } else {
        lien2.style.backgroundImage = BGimage; 
    }  
})

lien4.addEventListener("click",function(){
    if (lien4.style.backgroundImage != "none"){
        lien1.style.backgroundImage = BGimage; 
        lien2.style.backgroundImage = BGimage;  
        lien5.style.backgroundImage = BGimage; 
        lien6.style.backgroundImage = BGimage; 
        lien4.style.backgroundColor = "rgb(36, 50, 112)";
        lien4.style.backgroundImage = "none";        
    } else {
        lien4.style.backgroundImage = BGimage; 
    }  
})

lien5.addEventListener("click",function(){
    if (lien5.style.backgroundImage != "none"){
        lien1.style.backgroundImage = BGimage; 
        lien2.style.backgroundImage = BGimage; 
        lien4.style.backgroundImage = BGimage;  
        lien6.style.backgroundImage = BGimage; 
        lien5.style.backgroundColor = "rgb(36, 50, 112)";
        lien5.style.backgroundImage = "none";        
    } else {
        lien5.style.backgroundImage = BGimage; 
    }  
})

lien6.addEventListener("click",function(){
    if (lien6.style.backgroundImage != "none"){
        lien1.style.backgroundImage = BGimage; 
        lien2.style.backgroundImage = BGimage; 
        lien4.style.backgroundImage = BGimage; 
        lien5.style.backgroundImage = BGimage; 
        lien6.style.backgroundColor = "rgb(36, 50, 112)";
        lien6.style.backgroundImage = "none";        
    } else {
        lien6.style.backgroundImage = BGimage; 
    }  
})

    


// 