const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const submitbtn =document.getElementById("submitbtn");
const temp=document.getElementById("temp");
const getInfo=async(event)=>{
    event.preventDefault();
let url=`http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=046a6295406e175a3f8b2695d5d3de4c`;
let cityVal=cityname.value;

if(cityVal===""){
    city_name.innerText=`plz write the name before serch`;

}
else{
    try{

    
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=046a6295406e175a3f8b2695d5d3de4c`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    const arrData=[data];
    temp.innerText=arrData[0].main.temp;
    }catch{
        city_name.innerText=`plz write the name before serch`;
         
    }
}
}
submitbtn.addEventListener("click",getInfo)