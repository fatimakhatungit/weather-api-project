const weatherBtn = document.getElementById('weather-btn');
weatherBtn.addEventListener('click', function () {

    const inputName = document.getElementById('cityName').value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputName + "&appid=7eff50fe5ba76ae139a65c3c122754f3")

        .then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const des = data.weather[0].description;

            const location = document.getElementById("location").innerText = cityName;
            const degree = document.getElementById("degree").innerText = temp.toFixed(2);
            const description = document.getElementById("description").innerText = des;

        })
        .catch(res => alert("Please Enter Right City Name!!!"))

})

