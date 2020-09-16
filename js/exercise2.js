function printOut() {
    let a = parseFloat(document.getElementById("aEx2").value);
    let b = parseFloat(document.getElementById("bEx2").value);
    let c = parseFloat(document.getElementById("cEx2").value);
    let d = parseFloat(document.getElementById("dEx2").value);
    let max=a;

    if(b>=max)
    {
        max=b;
    }
    if(c>=max){
        max=c;
    }
    if(d>=max){
        max=d;
    }
    document.getElementById("displayEx2").innerHTML=max+" is the max number!";
}