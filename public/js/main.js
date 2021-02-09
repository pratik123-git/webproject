const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const submitbtn =document.getElementById("submitbtn");
const temp_real_val=document.getElementById("temp_real_val");
const temp_state=document.getElementById("temp_status");

const getInfo=async(event)=>{
    event.preventDefault();
// let url=`http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=046a6295406e175a3f8b2695d5d3de4c`;
let cityVal=cityname.value;

if(cityVal===""){
    city_name.innerText=`plz write the name before serch`;

}
else{
    try{

    
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=046a6295406e175a3f8b2695d5d3de4c`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);  
    const arrData=[data];
    city_name.innerText= `${arrData[0].name},${arrData[0].sys.country} `;
    temp_real_val.innerText=arrData[0].main.temp;
    const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun'></i>"
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud'></i>"
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun'></i>"
            }
            temp_status.innerText = arrData[0].weather[0].main;
    }catch{
        city_name.innerText=`plz write the name before serch`;
         
    }
}
}
submitbtn.addEventListener("click",getInfo)