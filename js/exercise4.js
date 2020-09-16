function printOut(){
    let a = parseFloat(document.getElementById("aEx4").value);
    let b = parseFloat(document.getElementById("bEx4").value);
    let c = parseFloat(document.getElementById("cEx4").value);

    if(a==b&&b==c||a==c&&c==b){
        document.getElementById("displayEx4").innerHTML="Equilateral triangle!!!"
    }
    else{
        document.getElementById("displayEx4").innerHTML="Not equilateral triangle!!!";
    }
}