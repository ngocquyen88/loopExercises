function printOut(){
    let a = parseFloat(document.getElementById("aEx5").value);
    let b = parseFloat(document.getElementById("bEx5").value);
    let c = parseFloat(document.getElementById("cEx5").value);

    if(a==b||b==c||a==c){
        document.getElementById("displayEx5").innerHTML="Isosceles triangle!!!"
    }
    else{
        document.getElementById("displayEx5").innerHTML="Not isosceles triangle!!!";
    }
}