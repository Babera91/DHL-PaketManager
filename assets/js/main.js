let list = document.getElementById("mylist"); // holt die werte von der selctor liste

let boxsize = document.getElementById("masse");// variable für text feld rechts Größe und Gewicht

function showtxt() { // Function für die aussgabe

    let sizeWeight = ""; // variable für die ausgabe der selectoren

    let Dhl = Number(list.value); // holt die Nummern der selctoren

    switch (Dhl) { // Sammlung der Daten für spätere Aussgabe ( was Ausgegeben werden soll )

        case 0: // case 0 beschreibt die Brief und Postkarten größen
        sizeWeight  = '<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm  H: bis 1 cm'
            break;


        case 1: // case 1 beschreibt die Größe des DHL Paketes ( 2KG )
        sizeWeight  = '<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm'
            break;


        case 2: // case 2 beschreibt die größe des DHL Paketes ( 5KG )
        sizeWeight  = '<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm'
            break;


        case 3: // case 3 beschreibt die größe des DHL Paketes ( 10KG )
        sizeWeight  = '<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm'
            break;



        default: // defult beschreibt alle größen die nicht bei Case 0 - 3 beschrieben wurden sind
        sizeWeight  = '<b>Extra große Größe</b>'
            break;

    }
    boxsize.innerHTML = sizeWeight; // schreibt das ergebniss in das Feld für die Aussgabe ( Größe und Gewicht )
}
