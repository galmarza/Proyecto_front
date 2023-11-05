// definir el valor del ticket
const valTicket = 5000;

// Descuentos según categoría
const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

// tomar los elementos

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');


function calcularPago() {

    let valTotal = cantidad.value * valTicket;

    // condicionar por descuentos
    switch (categoria.value) {
        case "estudiante":
            valTotal = valTotal - (valTotal * descEstudiante);
            break;
        case "trainee":
            valTotal = valTotal - (valTotal * descTrainee);
            break;
        case "junior":
            valTotal = valTotal - (valTotal * descJunior);
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${valTotal}`;

    console.log("hola");
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});