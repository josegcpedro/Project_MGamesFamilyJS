document.getElementById("valider").addEventListener("click", function(){
    var taille = document.getElementById("infos").value;
    afficherTriangle(TrianglePascal(taille))
});

function TrianglePascal(taille){
    var tab = [];

    for(var n=0;n<taille;n++){
        tab[n] = new Array();
        for(var p=0; p<n+1;p++){
            if(p==0 || p==n){
                tab[n][p] = 1;
            }else{
                tab[n][p]= tab[n-1][p] + tab[n-1][p-1];
            }
        }
    }
    return tab;
}

function afficherTriangle(tab){
    for(var i=0;i<tab.length;i++){
        for(var j=0;j<tab[i].length;j++){
            document.getElementById("res").innerHTML += tab[i][j] + " ";

        }
        document.getElementById("res").innerHTML += "<br>";
    }
}