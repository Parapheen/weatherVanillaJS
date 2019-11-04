window.addEventListener('load', () => {
   let long;
   let lat;

   let place = document.querySelector('.location-timezone');
   let temperatureDegree = document.querySelector('.temperature-degree');
   let description = document.querySelector('.temperature-description');

   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;

          const proxy = "https://cors-anywhere.herokuapp.com/";
          const api = `${proxy}https://api.darksky.net/forecast/0d77bd51d30bd559bb6020d482d1e69a/${lat},${long}`;

          fetch(api)
              .then(response => {
              return response.json()
                  .then(data => {
                      console.log(data)
                  const {temperature, summary} = data.currently;
                    place.textContent = data.timezone;
                    temperatureDegree.textContent =  Math.floor((temperature - 32) * 5/9);
                    description.textContent = summary
              })
          })
      })
   }
});
