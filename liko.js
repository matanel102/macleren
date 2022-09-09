let chees = [];
let chessRow = [];

for(let i = 0; i < 8; i++){
    for (let x = 0; x < 8; x++){
if((i+ + x) % 2==0){
    chessRow.push("black");
}else {
    chessRow.push("white");
}
    }

chees.push(chessRow);
chessRow = [];
}

// chees=[[b,w,b,w,b,w,b,w,b,w,b,w,b,w,b,w],[w,b,w,b,w,b,w,b,w,b,w,b,w,b]];
console.table(chees);