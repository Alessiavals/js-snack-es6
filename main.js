// SNACK 1 

const automobili = [
    { 
        nome: 'Fiat',
        modello: '500',
        alimentazione: 'GPL'
    },
    {
        nome: 'Audi',
        modello: 'A3',
        alimentazione: 'Benzina'
    },
    {
        nome: 'Hyundai',
        modello: 'i20',
        alimentazione: 'GPL'
    },
    {
        nome: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Diesel'
    },
    {
        nome: 'BMW',
        modello: 'Serie 3',
        alimentazione: 'Diesel'
    },
    {
        nome: 'Fiat',
        modello: 'Panda',
        alimentazione: 'GPL'
    },
    {
        nome: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'Diesel'
    },
    {
        nome: 'Ford',
        modello: 'Focus',
        alimentazione: 'Metano'
    },
    {
        nome: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'Elettrico'
    },
    {
        nome: 'Hyundai',
        modello: 'Kona',
        alimentazione: 'Elettrico'
    }
]

console.log(automobili)

const autoBenzina = [];
const autoDiesel = [];
const altreAuto = [];

for (let index = 0; index < automobili.length; index++) {
    const auto = automobili[index];

    if (auto.alimentazione === 'Benzina') {
        autoBenzina.push(auto)
    } else if (auto.alimentazione === 'Diesel') {
        autoDiesel.push(auto)
    } else {
        altreAuto.push(auto)
    }
    
}

console.log(autoBenzina)
console.log(autoDiesel)
console.log(altreAuto)

// 2 SNACK

const persone = ['aldo', 'GIOVANNI', 'giacomO']


function capitalizeWord(persone) {
    return persone.map(string => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    })
}

const nomiFormattati = capitalizeWord(persone)
console.log(nomiFormattati)