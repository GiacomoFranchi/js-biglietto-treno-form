document.getElementById("invia").addEventListener("click", function(){
    
    //RACCOLTA DATI
    const nome = document.getElementById("nome");
    const nomeUser = nome.value;

    const km = document.getElementById("km-viaggio");
    const kmViaggio = parseInt(km.value);

    const eta = document.getElementById("eta");
    const etaPass = eta.value;
    console.log(kmViaggio, etaPass, nomeUser, typeof kmViaggio);

    const carrozza = ((Math.random() * 10) +1).toFixed(0);
    const codice = ((Math.random () *1000) +1).toFixed(0);

    //CALCOLO PREZZO
    let prezzoBigliettoBase = (kmViaggio * 0.21);
    let prezzoBigliettoSconto 
    let scontoOttenuto 

    if (etaPass < 18) {
        prezzoBigliettoSconto = (prezzoBigliettoBase - (prezzoBigliettoBase * 0.2)).toFixed(2);
        scontoOttenuto = "Biglietto Minori"
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    } else if (etaPass > 65){
        prezzoBigliettoSconto = (prezzoBigliettoBase - (prezzoBigliettoBase * 0.4)).toFixed(2);
        scontoOttenuto = "Biglietto Over 65";
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    } else{
        prezzoBigliettoSconto = (prezzoBigliettoBase).toFixed(2)
        scontoOttenuto = "Biglietto standard"
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    }

    //OUTPUT
    const biglietto = document.querySelector(".biglietto")
    biglietto.classList.remove("hidden")

    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codice").innerHTML = codice;
    document.getElementById("nomeUser").innerHTML = nomeUser;
    document.getElementById("prezzoBigliettoSconto").innerHTML = prezzoBigliettoSconto;
    document.getElementById("scontoOttenuto").innerHTML = scontoOttenuto;
    document.getElementById("")
})

document.getElementById("annulla").addEventListener('click', function () {
    const km = document.getElementById("km-viaggio");
    km.value = "";

    const eta = document.getElementById("eta");
    eta.value = "";

    const nome = document.getElementById ("nome")
    nome.value = "";

    const prezzoBigliettoSconto = document.getElementById ("prezzoBigliettoSconto")
    prezzoBigliettoSconto.innerHTML = "";
    
    const biglietto = document.querySelector(".biglietto")
    biglietto.classList.add("hidden")
})