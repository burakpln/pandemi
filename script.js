var cities = [
    {licence : 0, name: "Adana" , color: "red"},
    {licence : 1, name: "Adana" , color: "red"},
    {licence : 2, name: "Adıyaman"  , color: "yellow"},
    {licence : 3, name: "Afyon"  , color: "blue"},
    {licence : 4, name: "Ağrı"  , color: "orange"},
    {licence : 5, name: "Amasya"  , color: "red"},
    {licence : 6, name: "Ankara"  , color: "red"},
    {licence : 7, name: "Antalya" , color: "yellow"},
    {licence : 8, name: "Artvin"  , color: "yellow"},
    {licence : 9, name: "Aydın"  , color: "red"},
    {licence : 10, name: "Balıkesir" , color: "yellow"},
    {licence : 11, name: "Bilecik"  , color: "red"},
    {licence : 12, name: "Bingöl"  , color: "red"},
    {licence : 13, name: "Bitlis" , color: "red"},
    {licence : 14, name: "Bolu" , color: "red"},
    {licence : 15, name: "Burdur"  , color: "yellow"},
    {licence : 16, name: "Bursa"  , color: "blue"},
    {licence : 17, name: "Çanakkale"  , color: "orange"},
    {licence : 18, name: "Çankırı"  , color: "red"},
    {licence : 19, name: "Çorum"  , color: "red"},
    {licence : 20, name: "Denizli" , color: "yellow"},
    {licence : 21, name: "Diyarbakır"  , color: "yellow"},
    {licence : 22, name: "Edirne"  , color: "red"},
    {licence : 23, name: "Elazığ" , color: "yellow"},
    {licence : 24, name: "Erzincan"  , color: "red"},
    {licence : 25, name: "Erzurum"  , color: "red"},
    {licence : 26, name: "Eskişehir" , color: "red"},
    {licence : 27, name: "Gaziantep" , color: "red"},
    {licence : 28, name: "Giresun"  , color: "yellow"},
    {licence : 29, name: "Gümüşhane"  , color: "blue"},
    {licence : 30, name: "Hakkari"  , color: "orange"},
    {licence : 31, name: "Hatay"  , color: "red"},
    {licence : 32, name: "Isparta"  , color: "red"},
    {licence : 33, name: "Mersin" , color: "yellow"},
    {licence : 34, name: "İstanbul"  , color: "yellow"},
    {licence : 35, name: "İzmir"  , color: "red"},
    {licence : 36, name: "Kars" , color: "yellow"},
    {licence : 37, name: "Kastamonu"  , color: "red"},
    {licence : 38, name: "Kayseri"  , color: "red"},
    {licence : 39, name: "Kırklareli" , color: "red"},
    {licence : 40, name: "Kırşehir" , color: "red"},
    {licence : 41, name: "Kocaeli"  , color: "yellow"},
    {licence : 42, name: "Konya"  , color: "blue"},
    {licence : 43, name: "Kütahya"  , color: "orange"},
    {licence : 44, name: "Malatya"  , color: "red"},
    {licence : 45, name: "Manisa"  , color: "red"},
    {licence : 46, name: "Kahramanmaraş" , color: "yellow"},
    {licence : 47, name: "Mardin"  , color: "yellow"},
    {licence : 48, name: "Muğla"  , color: "red"},
    {licence : 49, name: "Muş" , color: "yellow"},
    {licence : 50, name: "Nevşehir"  , color: "red"},
    {licence : 51, name: "Niğde"  , color: "red"},

];




var selection = document.querySelector("select")
var result = document.getElementById("result");
selection.addEventListener("change", () => {
    result.innerText = selection.options[selection.selectedIndex].text;
    num = selection.selectedIndex;
    function check(num){
        for (let i=num ; i < cities.length ; i++){
        let plaka = cities[i].licence;
        if (plaka === num) {
            num = cities[num].name
        }
        return num
    } 
    }
    // console.log(check(num))
    
    var renk = cities[num].color
    // console.log(renk)
    if (renk == "red") {
        result.innerHTML = "Bulunduğunuz ilde sokağa çıkmanız <b>yasaktır</b>"
    } else if ( renk == "orange") {
        result.innerText = "Pazar günleri hariç çıkabilirsiniz" 
    } else if (renk == "yellow") {
        result.innerText = "Özgürce gezebilirsiniz :) "
    } else {
        result.innerText = "Özgürce gezebilirsiniz :) "
    }

});




