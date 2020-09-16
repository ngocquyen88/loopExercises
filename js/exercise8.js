function printDays() {
    let tmp;
    tmp = "<table border='2' width='600px' cellspacing='0' cellpadding='3' align='center'>"
    let i = j = 1;//i là hàng, j là cột
    for (i = 1; i <= 2; i++) {
        tmp = tmp + "<tr>";
        if(i==1){
            for (j = 2; j <= 8; j++)
            tmp = tmp + "<td>" + j + "</td>";
        }
        else if(i==2)
        {
            for(j=1;j<=7;j++)
            {
                tmp=tmp+"<td>"+translate(j)+"</td>";
            }
        }
        tmp = tmp + "</tr>";
    }
    tmp = tmp + "</table>";
    document.write(tmp);
}

function translate(x){
    let day;
    switch (x){
        case 1:day="Monday";
        break;
        case 2:day="Tuesday";
        break;
        case 3:day="Wednesday";
        break;
        case 4:day="Thursday";
        break;
        case 5: day="Friday";
        break;
        case 6: day="Saturday";
        break;
        case 7: day="Sunday";
        break;
        default:"Ngoài ra không có thứ nào!"
    }
    return day;
}