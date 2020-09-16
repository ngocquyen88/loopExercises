function printOut(){
    let a = parseFloat(document.getElementById("aEx6").value);
    let b = parseFloat(document.getElementById("bEx6").value);
    let c = parseFloat(document.getElementById("cEx6").value);


    if((a==Math.sqrt(b*b+c*c))||(b==Math.sqrt(a*a+c*c))||(c==Math.sqrt(a*a+b*b))){
        document.getElementById("displayEx6").innerHTML="Right triangle!!!"
    }
    else{
        document.getElementById("displayEx6").innerHTML="Not right triangle!!!";
    }
}