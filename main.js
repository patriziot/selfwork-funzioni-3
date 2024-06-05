function contaCifre(numero) {
    // Numero deve essere positivo
    if (typeof numero !== 'number' || numero < 0 || Math.floor(numero) !== numero) {
        console.log("Input non valido");
        return;
    }

    // Segnala numeri più grandi di 9999
    if (numero > 9999) {
        console.log("Numero troppo grande");
        return;
    }

    // Acquisire numero in nuova variabile per conteggio
    var numeroOriginale = numero;

    // Conta il numero di cifre utilizzando divisioni successive
    var numeroCifre = 0;
    // Conta posizioni
    while (numero >= 1) {
        numero = Math.floor(numero / 10);
        numeroCifre++;
    }
    console.log(numeroOriginale + " è un numero a " + numeroCifre + " cifra/e");
}

contaCifre(9845);      