document.addEventListener("DOMContentLoaded", function(){

    let visitas = localStorage.getItem("Visitas");
    if (visitas){
        visitas++;        
    } else{
        visitas = 1;
    }
    localStorage.setItem("Visitas",visitas);
    document.getElementById('visitantes').innerHTML = visitas;
});

//consumir datos de una API