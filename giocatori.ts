let val_2:number= Math.floor((Math.random()*100)+1);
let val_1:number= Math.floor((Math.random()*100)+1);
let posta:number=Math.floor((Math.random()*100)+1);
console.log('Numero generato:',posta);
console.log('Giocatore1:',val_1);
console.log('Giocatore2:',val_2);

if( Math.abs(posta-val_1) > Math.abs(posta-val_2)) console.log("Vince Giocatore2");
else console.log("Vince Giocatore1");
