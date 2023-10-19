document.getElementById("invia").addEventListener("click", function(){
    const km = document.getElementById("km-viaggio");
    const kmViaggio = km.value;
    console.log(km);

    const eta = document.getElementById("eta");
    const etaPass = eta.value;
    console.log(kmViaggio, etaPass);
})