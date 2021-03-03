var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(xmlhttp.responseText)
    var jsonVeri = JSON.stringify(xmlhttp.responseText);
    var veri = JSON.parse(jsonVeri)
    veri = JSON.parse(veri)
    // console.log(veri.cities[i].color)
    
    var selection = document.querySelector("select")
    var result = document.getElementById("result");
    selection.addEventListener("change", () => {
      result.innerText = selection.options[selection.selectedIndex].text;
      num = selection.selectedIndex;
    
      function check(num) {
        for (let i = num; i < veri.cities.length; i++) {
          let plaka = veri.cities[i][0];
          if (plaka === num) {
            num = veri.cities[num].name
          }
          return num
        }
      }
      // console.log(check(num))
    
      var renk = veri.cities[num].color
      // console.log(renk)
      if (renk == "red") {
        result.innerHTML = "Bulunduğunuz ilde sokağa çıkmanız <b>yasaktır</b>"
      } else if (renk == "orange") {
        result.innerText = "Pazar günleri hariç çıkabilirsiniz"
      } else if (renk == "yellow") {
        result.innerText = "Özgürce gezebilirsiniz :) "
      } else {
        result.innerText = "Özgürce gezebilirsiniz :) "
      }
    
    });
  
  }
};
xmlhttp.open("GET", "veri.json", true);
xmlhttp.send();


