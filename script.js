let lat;
let long;
let API_KEY = "1c18bdc3e52a15f56b3af6951038e572";

document.getElementById("fetch_data").addEventListener("click", () => {
  // get the lat and long
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("lat", lat, "long", long);
        // fetch
        document.body.innerHTML += `<br/><br/><iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.body.innerHTML += `
            <br/><br/>
            <p>location : ${data.name}</p>
            <p>${lat}, ${long}</p>
            <p>timezone: ${data.timezone}</p>
            <p>Date and Time: ${data.wind.speed}</p>
            <p>pincode: ${data.main.humidity}</p>
            <p>Message: ${data.wind.deg}</p>
            
            `;
          });
      },
      (error) => {
        alert(error);
      }
    );
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
const searchFun =() =>{
    let filter = document.getElementById('search').value.toUpperCase();
    let table= document.getElementById('books');
    let  tr=table.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if(td){
            let textValue=td.textContent  ;
        if(textValue.toUpperCase().indexOf(filter)>-1){
            tr[1].style.display="";
        }
        else{
            tr[i].style.display="none";
        }
        }
    }
}

