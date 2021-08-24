let getName=prompt("Adınız nedir?");
let putName=document.querySelector("#myName");
putName.innerHTML=getName;

function showTime() {
    let date = new Date().getDay().toLocaleString(); // tarih saati al
    let hour = `${new Date().getHours().toLocaleString()}:${new Date().getMinutes().toLocaleString()}:${new Date().getSeconds().toLocaleString()}`;
    switch(date){
        case "1":
            date="Pazartesi";
            break;
        case "2":
            date="Sali";
            break;
        case "3":
            date="Carsamba";
            break;
        case "4":
            date="Persembe";
            break;
        case "5":
            date="Cuma";
            break;
        case "6":
            date="Cumartesi";
            break;
        case "7":
            date="Pazar";
            break;
    }
    document.getElementById("myClock").innerHTML = `${hour} ${date}`; // zaman id'li elemente yazdır
}
setInterval(showTime,1000); 
