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

const inserisciAuto = automobili.filter(auto => {
    if (auto.alimentazione === 'Benzina') {
        autoBenzina.push(auto)
    } else if (auto.alimentazione === 'Diesel') {
        autoDiesel.push(auto)
    } else {
        altreAuto.push(auto)
    }
})

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

// SNACK 3

const animali = [
    {
        nome: 'Gatto',
        famiglia: 'Felidi',
        classe: 'Mammifero',
    },
    {
        nome: 'Elefante',
        famiglia: 'Elephantidae',
        classe: 'Mammifero',
    },
    {
        nome: 'Gallina',
        famiglia: 'Fasianidi',
        classe: 'Uccelli',
    }
]

const animaliMammiferi = []

for (let index = 0; index < animali.length; index++) {
    const animale = animali[index];
    if (animale.classe === "Mammifero") {
        animaliMammiferi.push(animale)
        
    }
    
}

console.log(animaliMammiferi)

// SNACK 4

const people = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 20
    },
    {
        nome: 'Luca',
        cognome: 'Bianchi',
        eta: 30
    },
    {
        nome: 'Paolo',
        cognome: 'Neri',
        eta: 17
    }
]

const frasi = people.map(persona => {
    const puoGuidare = persona.eta >= 18 ? "può guidare" : "non può guidare";

    return `${persona.nome} ${persona.cognome} ha ${persona.eta} e ${puoGuidare}`;
});

console.log(frasi)