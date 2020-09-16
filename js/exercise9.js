function printOut(){
    let tmp=parseInt(document.getElementById("idInput").value);
    let a,b,c,s;
    switch (tmp){
        case 1: hinhVuong();
        break;
        case 2: hinhChuNhat();
        break;
        case 3: hinhTron();
        break;
        case 4: hinhTamGiac();
        break;
        case 5: hinhThang();
        break;
    }
}

function hinhVuong(){
    a=prompt("Nhập vào chiều dài a=");
    s=a*a;
    document.getElementById("displayEx9").innerHTML="Diện tích của hình vuông là:"+s;
}

function hinhChuNhat(){
    a=prompt("Nhập vào chiều dài a=");
    b=prompt("Nhập vào chiều rộng b=");
    s=a*b;
    document.getElementById("displayEx9").innerHTML="Diện tích của hình chữ nhật là: "+s;
}

function hinhTron(){
    a=prompt("Nhập vào bán kính a=");
    b=Math.PI;
    s=b*a*a;
    document.getElementById("displayEx9").innerHTML="Diện tích của hình tròn là: "+s;
}

function hinhTamGiac(){
    a=prompt("Nhập vào cạnh a=");
    b=prompt("Nhập vào chiều cao b=");
    s=(1/2)*a*b;
    document.getElementById("displayEx9").innerHTML="Diện tích của hình tam giác là: "+s;
}

function hinhThang(){
    a=prompt("Nhập vào cạnh a=");
    b=prompt("Nhập vào cạnh b=");
    c=prompt("Nhập vào chiều cao h=");
    s=(1/2)*h*(a+b);
    document.getElementById("displayEx9").innerHTML="Diện tích của hình thang là: "+s;
}