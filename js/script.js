document.getElementById("invia").addEventListener("click", function(){
    
    //RACCOLTA DATI
    const km = document.getElementById("km-viaggio");
    const kmViaggio = km.value;

    const eta = document.getElementById("eta");
    const etaPass = eta.value;
    console.log(kmViaggio, etaPass, typeof kmViaggio);

    //CALCOLO PREZZO
    let prezzoBigliettoBase = (kmViaggio * 0.21);
    let prezzoBigliettoSconto 
    let scontoOttenuto 

    if (etaPass < 18) {
        prezzoBigliettoSconto = (prezzoBigliettoBase - (prezzoBigliettoBase * 0.2)).toFixed(2);
        scontoOttenuto = "20%"
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    } else if (etaPass > 65){
        prezzoBigliettoSconto = (prezzoBigliettoBase - (prezzoBigliettoBase * 0.4)).toFixed(2);
        scontoOttenuto = "40%";
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    } else{
        prezzoBigliettoSconto = (prezzoBigliettoBase).toFixed(2)
        scontoOttenuto = "Nessuno sconto ottenuto"
        console.log(prezzoBigliettoSconto, scontoOttenuto);
    }

    //OUTPUT
    const biglietto = document.querySelector(".biglietto")
    biglietto.classList.remove("hidden")

    document.getElementById("prezzoBigliettoSconto").innerHTML = prezzoBigliettoSconto;
    document.getElementById("scontoOttenuto").innerHTML = scontoOttenuto;
    document.getElementById("")
})

document.getElementById("annulla").addEventListener('click', function () {
    const km = document.getElementById("km-viaggio");
    km.value = "";

    const eta = document.getElementById("eta");
    eta.value = ""
    const biglietto = document.querySelector(".biglietto")
    biglietto.classList.add("hidden")
})