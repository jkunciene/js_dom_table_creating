//1. pasizymiu elelemntus ant kintamuju
const my_custom_rows = document.getElementById('custom_rows');
const my_custom_col = document.getElementById('custom_col');
const my_button = document.querySelector('button');

//2.deklaruoju funkcija

const createTable = () => {
    console.log("Funkcija veikia");
    //pirmas ciklas kurs eilutes
    console.log(my_custom_rows.value);
    //pirmo ciklo viduje kurs stulpelius
    console.log(my_custom_col.value);
    //lentele turiu sukurti viena karta, funkcijai startavus
    const my_table = document.createElement('table');
    document.body.appendChild(my_table);
    for(let i=0; i < my_custom_rows.value; i++){
        //kuriu eilutes
        const my_rows = document.createElement('tr');
        //idedu eilutes i lentele
        my_table.appendChild(my_rows);

        //kiekvienos eilutes viduje kuriu stulpelius
        for(let j=0; j < my_custom_col.value; j++){
            //kuriu td elementus
            const my_col = document.createElement('td');
            //irasome teksta, kad matytume rezultata html dokumente
            my_col.innerText = "stulpelis";
            //pridedu stulpeliu i eilute, tik tada atsiras html jie
            my_rows.appendChild(my_col);
        }

    }
}

//3.kvieciu funkcija. aprasau mygtukui event
my_button.addEventListener('click', createTable )
