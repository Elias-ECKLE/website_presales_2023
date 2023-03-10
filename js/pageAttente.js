


function test() {
   // screen.orientation.lock();
   // screen.lockOrientation("orientation");

    var screenWidth = window.innerWidth;
    if  (screenWidth <= 600)
    {
        // true for mobile device
        console.log("mobile on");
        if (!document.getElementById('childDiv3')) {
            var div1 = document.getElementById('div1');
            var childDiv3 = document.createElement("div");
            div1.append(childDiv3);
            childDiv3.setAttribute('id', "childDiv3");
            //img
            imgChildDiv3 = document.createElement('img');
            imgChildDiv3.setAttribute('src', "sources/pageAttente/texteTitre_img.png");
            imgChildDiv3.setAttribute('alt', "imgDates");

            childDiv3.appendChild(imgChildDiv3);

            //modifier source childImg2
            var childDiv2 = document.getElementById('childDiv2');
            var childDiv2_img = document.getElementById('childDiv2_img');
            childDiv2_img.src = "sources/pageAttente/titreCentre.png";
        }
    }
    else{
        if (document.getElementById('childDiv3')) {
            document.getElementById('childDiv3').remove();
        }
        var childDiv2 = document.getElementById('childDiv2');
        var childDiv2_img = document.getElementById('childDiv2_img');
        childDiv2_img.src = "sources/pageAttente/texteEtTitre_img.png";
    }


}

//on récupère dans un premier temps, la taille en largeur de la page

//si la page est inférieur ou égale à 600px alors
//j'ajoute une div3 avec une img
//je modifie l'img de la div2

