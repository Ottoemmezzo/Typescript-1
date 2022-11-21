var val_2 = Math.floor((Math.random() * 99) + 1);
var val_1 = Math.floor((Math.random() * 99) + 1);
var posta = Math.floor((Math.random() * 99) + 1);
console.log('Numero generato:', posta);
console.log('Giocatore1:', val_1);
console.log('Giocatore2:', val_2);
if (Math.abs(posta - val_1) > Math.abs(posta - val_2))
    console.log("Vince Giocatore2");
else
    console.log("Vince Giocatore1");
