const loader = document.querySelector('.loader')

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((location) => {
		const long = location.coords.longitude
		const lat = location.coords.latitude
    console.log(long, lat);
	})
}
