const noTruncarDecimales = {maximumFractionDigits: 2};

//
const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.textContent='Amortización Sistema Francés'
h1.classList.add('h1','text-center','py-1')
root.appendChild(h1)

const p1 = document.createElement('p');
p1.textContent='La amortización por el sistema francés, se caracteriza por cuotas iguales, valores de amortización del principal e interés cracientes.'
p1.classList.add('text-justify','m-1')
root.appendChild(p1)

const p2 = document.createElement('p');
p2.textContent='Para calcular los pagos mensuales introduzca: El principal, el plazo en meses y la tasa de interés mensual. Utilice el punto como separador decimal. Por ejemplo: 25.152,47; se escribe 25152.47; Los resultados aparecerán de forma automática, después de pinchar en "Calcular".'
p2.classList.add('text-justify','m-1')
root.appendChild(p2)

// TABLA
const containerTabla=document.createElement('div');
containerTabla.classList.add('m-2','border','col-xxl-3','col-5','col-md-5','col-sm-7','col-10')
root.appendChild(containerTabla)

const titulo=document.createElement('div');
titulo.textContent='Amortización Sistema Francés';
titulo.classList.add('text-tabla','text-center','bg-primary','m-0','py-1','bold','font-weight-bold','text-light','h5')
containerTabla.appendChild(titulo);

// fila1

const fila1=document.createElement('div');
fila1.classList.add('fila')
fila1.classList.add('text-tabla','m-1','d-flex','justify-content-between')
containerTabla.appendChild(fila1);

const principal=document.createElement('div');
principal.classList.add('col1');
principal.textContent='Monto total del Vehiculo:';
principal.classList.add('text-tabla','m-1')
fila1.appendChild(principal);

const principalInput=document.createElement('input');
principalInput.setAttribute('type','text','border');
principalInput.classList.add('col2','div-tabla','rounded','principalInput','f-15');
fila1.appendChild(principalInput);
document.querySelector('.fila').style.display = "flex";

// Inicial

const filaInicial=document.createElement('div');
filaInicial.classList.add('fila')
filaInicial.classList.add('text-tabla','m-1','d-flex','justify-content-between')
containerTabla.appendChild(filaInicial);

const inicial=document.createElement('div');
inicial.classList.add('col1');
inicial.textContent='Inicial:';
inicial.classList.add('text-tabla','m-1')
filaInicial.appendChild(inicial);

const inicialInput=document.createElement('input');
inicialInput.setAttribute('type','text','border');
inicialInput.classList.add('col2','div-tabla','principalInput','rounded','f-15');
filaInicial.appendChild(inicialInput);
document.querySelector('.fila').style.display = "flex";

// Valor Prestamo
const filaValorPrestamo=document.createElement('div');
filaValorPrestamo.classList.add('fila')
filaValorPrestamo.classList.add('m-1','d-flex','justify-content-between')
containerTabla.appendChild(filaValorPrestamo);

const valorPrestamo=document.createElement('div');
valorPrestamo.classList.add('col1');
valorPrestamo.textContent='Valor de Prestamo:';
valorPrestamo.classList.add('text-tabla','m-1')
filaValorPrestamo.appendChild(valorPrestamo);

const valorPrestamoInput=document.createElement('div');
valorPrestamoInput.setAttribute('type','text');
valorPrestamoInput.classList.add('col2','fz-15','pl-1','rounded','div-tabla','border','border-dark');
filaValorPrestamo.appendChild(valorPrestamoInput);
document.querySelector('.fila').style.display = "flex";

// fila2

const fila2=document.createElement('div');
fila2.classList.add('fila2','m-1','justify-content-between')
containerTabla.appendChild(fila2);

const plazo=document.createElement('div');
plazo.classList.add('col1');
plazo.textContent='Plazo en meses:';
plazo.classList.add('text-tabla','m-1')
fila2.appendChild(plazo);

const plazoInput=document.createElement('input');
plazoInput.setAttribute('type', 'text');
plazoInput.classList.add('col2','div-tabla','input-plazo','rounded','f-15');
fila2.appendChild(plazoInput);

document.querySelector('.fila2').style.display = "flex";


// fila3

const fila3=document.createElement('div');
fila3.classList.add('fila3','m-1','justify-content-between')
containerTabla.appendChild(fila3);

const tasa=document.createElement('div');
tasa.classList.add('col1');
tasa.textContent='Tasa de interés mensual:';
tasa.classList.add('text-tabla','m-1')
fila3.appendChild(tasa);

const tasaInput=document.createElement('input');
tasaInput.setAttribute('type', 'text');
tasaInput.classList.add('col2','div-tabla','tasaInput','rounded','f-15');
fila3.appendChild(tasaInput);

document.querySelector('.fila3').style.display = "flex";

// fila4 (botones)
const fila4=document.createElement('div');
fila4.classList.add('fila4','justify-content-between')
containerTabla.appendChild(fila4);

const calcular=document.createElement('button');
calcular.classList.add('col1');
calcular.textContent='Calcular';
calcular.classList.add('text-tabla','m-2', 'calcular','rounded')
fila4.appendChild(calcular);

const reset=document.createElement('button');
reset.classList.add('col1');
reset.textContent='Reset';
reset.classList.add('text-tabla','m-2', 'reset','rounded')
fila4.appendChild(reset);

document.querySelector('.fila4').style.display = "flex";

// fila5

const fila5=document.createElement('div');
fila5.classList.add('fila5','m-1','justify-content-between')
containerTabla.appendChild(fila5);

const pagoMen=document.createElement('div');
pagoMen.classList.add('col1');
pagoMen.textContent='Pago mensual:';
pagoMen.classList.add('text-tabla','m-1')
fila5.appendChild(pagoMen);

const pagoMenInput=document.createElement('div');
pagoMenInput.setAttribute('type', 'number');
pagoMenInput.classList.add('col2','rounded','border','fz-15','pl-1','div-tabla','border-dark');
fila5.appendChild(pagoMenInput);

document.querySelector('.fila5').style.display = "flex";

// fila6

const fila6=document.createElement('div');
fila6.classList.add('fila6','m-1','justify-content-between')
containerTabla.appendChild(fila6);

const TotalInt=document.createElement('div');
TotalInt.classList.add('col1');
TotalInt.textContent='Total Interes:';
TotalInt.classList.add('text-tabla','m-1')
fila6.appendChild(TotalInt);

const TotalIntInput=document.createElement('div');
TotalIntInput.setAttribute('type', 'number');
TotalIntInput.classList.add('col2','rounded','fz-15','pl-1','border','div-tabla','border-dark');
fila6.appendChild(TotalIntInput);

document.querySelector('.fila6').style.display = "flex";


// fila7

const fila7=document.createElement('div');
fila7.classList.add('fila7','justify-content-between','m-1')
containerTabla.appendChild(fila7);

const TotalPago=document.createElement('div');
TotalPago.classList.add('col1');
TotalPago.textContent='Total pagos:';
TotalPago.classList.add('text-tabla','m-1')
fila7.appendChild(TotalPago);

const TotalPagoInput=document.createElement('div');
TotalPagoInput.setAttribute('type', 'number');
TotalPagoInput.classList.add('col2','fz-15','pl-1','rounded','div-tabla','border','border-dark');
fila7.appendChild(TotalPagoInput);

document.querySelector('.fila7').style.display = "flex";

// Tabla

const lista = document.getElementById('root')
console.log(lista)

//Crear lista

//tabla
const arrayElement = ['Parc','Amort','Interés','Cuota',"Saldo", 'Desgravamen', 'Pago'];
//Crear tabla
const table = document.createElement('table');
table.classList.add("table-info","container");
lista.appendChild(table);
//Crear thead
const thead = document.createElement('thead');
table.appendChild(thead);
//Crear tr
const tr = document.createElement('tr');
tr.classList.add('p-1','border')
thead.appendChild(tr);
//Crear th
arrayElement.forEach(item =>{
    const th = document.createElement('th');
    th.classList.add('p-1','border','bg-secondary')
    th.textContent = item;
    tr.appendChild(th);
});

///Creamos tabla body
const tbody = document.createElement('tbody');
table.appendChild(tbody);

//calculo

function calcularCuota(Saldo, interes, tiempo){

    // Condicional inicialInput
    //
    valorPrestamoInput.textContent=principalInput.value-inicialInput.value;

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    let pagoInteres=0, Amortizacion = 0, cuota = 0;

    cuota = Saldo * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);

    newSaldo=principalInput.value-inicialInput.value;

    const row0=document.createElement('tr');
    row0.innerHTML= `
            <td class='border bg-ligth'>0</td>
            <td class='border'></td>
            <td class='border'></td>
            <td class='border'></td>
            <td class='border'>${newSaldo.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border'></td>
            <td class='border'></td>
        `;

    tbody.appendChild(row0);

    var counterInt = 0;
    var counterPagos = 0;

    for(let i = 1; i <= tiempo; i++,counterInt+=pagoInteres,counterPagos+=Pago) {
        pagoInteres = parseFloat(Saldo*(interes/100));
        Amortizacion = cuota - pagoInteres;
        Saldo = parseFloat(Saldo-Amortizacion);
        Desgravamen=Saldo*0.005;
        Pago=cuota+Desgravamen;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class='border bg-light'>${i}</td>
            <td class='border bg-light'>${Amortizacion.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border bg-light'>${pagoInteres.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border bg-light'>${cuota.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border bg-light'>${Saldo.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border bg-light'>${Desgravamen.toLocaleString('en',noTruncarDecimales)}</td>
            <td class='border bg-b1'>${Pago.toLocaleString('en', noTruncarDecimales)}</td>
        `;
        tbody.appendChild(row);    
    }

    pagoMenInput.textContent=cuota.toLocaleString('en',noTruncarDecimales);
    TotalIntInput.textContent=counterInt.toLocaleString('en',noTruncarDecimales);
    TotalPagoInput.textContent=counterPagos.toLocaleString('en',noTruncarDecimales);
}

calcular.addEventListener('click',() =>{
    calcularCuota(principalInput.value-inicialInput.value, tasaInput.value, plazoInput.value);
});

reset.addEventListener('click',() =>{
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
        principalInput.value='';
        inicialInput.value='';
        plazoInput.value='';
        tasaInput.value='';
        pagoMenInput.textContent='';
        TotalIntInput.textContent='';
        TotalPagoInput.textContent='';
    } 
});