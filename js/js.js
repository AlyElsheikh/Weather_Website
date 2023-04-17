
var container = document.getElementById("container");
var serch = document.getElementById("serch");
var result;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month;
var day;
var dayN;
var nextDay;
var AafterNDay;
let datedData;
var currentData;
var locationData;
var currentIcon;
var condition;
var windD;
var windKM;
var windDir;
var nDW;
var aNDW;
var mNDW;
var mANDW;
var cND;
var cAND;
var cNDI;
var cANDI;
var countyData;
async function connection (country){
    var res = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=a2fb0ad5cb894be388490317231504&q=${country}&days=3&aqi=yes&alerts=no`)
    result = await res.json();
    currentData = result.current.temp_c;
    // nextData = result.forecast.forecastday[1].date;
    locationData = result.location.name;
    countyData = result.location.country;
    currentIcon = result.current.condition.icon;
    condition = result.current.condition.text;
    windD = result.current.wind_degree;
    windKM = result.current.wind_kph;
    windDir = result.current.wind_dir;
    nDW = result.forecast.forecastday[1].day.avgtemp_c;
    aNDW = result.forecast.forecastday[2].day.avgtemp_c;
    
    mNDW = result.forecast.forecastday[1].day.mintemp_c;
    mANDW = result.forecast.forecastday[2].day.mintemp_c;
    condition.text

    cND = result.forecast.forecastday[1].day.condition.text;
    cAND = result.forecast.forecastday[2].day.condition.text;
    cNDI = result.forecast.forecastday[1].day.condition.icon;
    cANDI = result.forecast.forecastday[2].day.condition.icon;
    data ()
}

connection("cairo");


    serch.addEventListener("keyup",function() {
        connection(serch.value)
        if(serch.value == ""){
            connection("cairo");
        }
    })



function date(){
    datedData = result.forecast.forecastday[0].date;
    var date1 = new Date(datedData);
    month = months[date1.getMonth()];
    var d = new Date();
    dayN = date1.getDate();
    day = days[date1.getDay()];


    nextDay = days[date1.getDay()+1];
    AafterNDay = days[date1.getDay()+2];
}

function data (){
    date()

    allData = `<div class="row">
    <div class="detals">
        <div class="d-flex flex-wrap text-light">
            <div class="col-md-4 col-12">
                <div class="top detal-up1 p-3">
                    <div class=" d-flex justify-content-between">
                        <span>${day}</span>
                        <span>${dayN}${month}</span>
                    </div>
                </div>
                <div class="middle detal-middle1 p-3">
                    <p>${locationData} ${countyData}</p>
                    <div class=" d-flex align-items-center justify-content-between"">
                        <h1 class="fw-bolder">${currentData}<sup>o</sup>C</h1>   <img class=" " src="${currentIcon}" alt="">
                    </div>
                    <div class="bottom mt-4 pb-3">
                        <span>${condition}</span>
                        <div class="d-flex justify-content-between my-3">
                            <div>${windD}%</div>
                            <div>${windKM}m/h</div>
                            <div>${windDir}</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-md-4 col-6">
                <div class="top detal-up1 detal-up2 p-3">
                    <div class=" d-flex justify-content-between ">
                        <span class="m-auto d-block">${nextDay}</span>
                    </div>
                </div>
                <div class="middle detal-middle1 detal-middle2 p-3 text-center">
                    <img src="${cNDI}" alt="">
                    <h5 class="py-2">${nDW}<sup>o</sup>C</h5>
                    <h6 class="py-2">${mNDW}<sup>o</sup></h6>
                    <span class="py-2">${cND}</span>
                </div>
            </div>
            <div class="col-md-4 col-6">
                <div class="top detal-up1 p-3">
                    <div class=" d-flex justify-content-between ">
                        <span class="m-auto d-block">${AafterNDay}</span>
                    </div>
                </div>
                <div class="middle detal-middle1 p-3 text-center">
                    <img src="${cANDI}" alt="">
                    <h5 class="py-2">${aNDW}<sup>o</sup>C</h5>
                    <h6 class="py-2">${mANDW}<sup>o</sup></h6>
                    <span class="py-2">${cAND}</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

container.innerHTML = allData;

}

