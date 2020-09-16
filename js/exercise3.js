function printOut() {
    let a = parseFloat(document.getElementById("aEx3").value);
    let b = parseFloat(document.getElementById("bEx3").value);
    let c = parseFloat(document.getElementById("cEx3").value);
    let d = parseFloat(document.getElementById("dEx3").value);
    let max1=a;
    let max2=c;
    let max=0;

    if(a<b)
        max1=b;
    if(c<d)
        max2=d;
    max=max1;
    if(max1<max2)
        max=max2;
    document.getElementById("displayEx3").innerHTML=max+" is the max number!";
}