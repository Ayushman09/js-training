/*
for (var rows=0;rows<=5;rows++){
    for (var col = 0;col<rows;col++){
        console.log("*")
    }
    console.log("\n")
}
*/
var triangle = ""
for (var rows=0;rows<=5;rows++){
    for (var cols = 0;cols<rows;cols++){
        triangle += "*"
    }
    triangle+="\n"
}
console.log(triangle)