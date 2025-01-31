var i = 0;
var tableau = [];

document.getElementById("envoyer-1").addEventListener("click", function(){
    let taille = document.getElementById("taille").value;

    document.getElementById("envoyer-2").addEventListener("click", function(){
      if(i<taille){
        var chiffre = document.getElementById("tab").value;
        tableau.push(chiffre)
        i++;
    }else{
        document.getElementById("envoyer-2").value = "generate";
        document.getElementById("envoyer-2").addEventListener("click",function(){
            document.getElementById("moyenne").textContent = moyenne(tableau);
            document.getElementById("variance").textContent = variance(tableau);
            document.getElementById("ecart-type").textContent = ecartType(tableau);
        })
    }


    })

});


document.getElementById("reset-1").addEventListener("click", function(){
    document.location.reload(true)
})

document.getElementById("reset-2").addEventListener("click", function(){
    document.location.reload(true)
})


function moyenne(tableau){
    var sum = 0;
    var calcul = 0;
    for(var i=0;i<tableau.length;i++){
        sum += parseInt(tableau[i]);
        
    }
    calcul = sum / tableau.length;
    return calcul;
}

function variance(tableau){
    var moy = moyenne(tableau)
    for(var i=0; i<tableau.length;i++){
        var sum =0;
        sum += (parseInt(tableau[i]) - moy ) * (parseInt(tableau[i]) - moy );
    }
    sum = sum / tableau.length;
    return sum;
    
}

function ecartType(tableau){
    var a = variance(tableau);
    return Math.sqrt(a);

}