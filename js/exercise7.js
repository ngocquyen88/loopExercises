function randEx7_1(){
        let tmp=Math.floor(Math.random()*2);
        document.getElementById("lblEx7_1").innerHTML=tmp;
}

function randEx7_2(){
    let tmp=Math.floor(Math.random()*2);
    document.getElementById("lblEx7_2").innerHTML=tmp;
}

function randEx7_3(){
    let tmp=Math.floor(Math.random()*2);
    document.getElementById("lblEx7_3").innerHTML=tmp;
}

function find() {
    let a = document.getElementById("lblEx7_1").textContent;
    let b = document.getElementById("lblEx7_2").textContent;
    let c = document.getElementById("lblEx7_3").textContent;
    debugger
    if(a==b&&b==c){
        document.getElementById("displayEx7").innerHTML="Hòa!";
        //alert("hòa");
        console.log("hoa");
    }
    if(a==b&&b!=c){
        document.getElementById("displayEx7").innerHTML="Player 3 win!";
        //alert("c thắng");
        console.log("c")
    }
    if(a==c&&c!==b){
        document.getElementById("displayEx7").innerHTML="Player 2 win!";
        //alert("Player 2 win!");
        console.log("b")
    }
    if(b==c&&c!==a){
        document.getElementById("displayEx7").innerHTML="Player 1 win!";
        //alert("a thắng")
        console.log("a");
    }
}