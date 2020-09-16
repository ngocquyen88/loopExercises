function printOut(){
    let a=parseFloat(document.getElementById("aEx1").value);
    let b=parseFloat(document.getElementById("bEx1").value);

    if(a>b) {
        document.getElementById("displayEx1").innerHTML = a+" is the larger number!";
    }
    else{
        document.getElementById("displayEx1").innerHTML=b+" is the larger number!";
    }
}