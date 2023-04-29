
function coverAdaptable(){
    var cover = document.getElementById("cover");
    var screenWidth = window.innerWidth;

    if(screenWidth<=600){
      //  console.log("cover changement mobile activated ");
    cover.style.backgroundImage = "url('../sources/vraiSite/cover/planchesCoverMobile.jpg')";
    cover.style.height = "100vh";

    }

    if((screenWidth<=1100) && (screenWidth>600)){
        cover.style.backgroundImage = "url('../sources/vraiSite/cover/planchesCoverTablet.jpg')";
        cover.style.height = "80vh";
    }

    if(screenWidth>1100){
       // console.log("cover changement normal activated ");
        cover.style.backgroundImage = "url('../sources/vraiSite/cover/planchesCover.jpg')";
        cover.style.height = "80vh";
    }
}



