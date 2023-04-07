 
let url = "https://api.themoviedb.org/3/movie/550?api_key=d1154bdaa1d0a88050fa9c3b118c839c"

const imgb = document.getElementById('imgb')
const datotest = document.getElementById('datotest')
 fetch(url)
 .then(response => response.json())
 .then(data => {
   // Hacer algo con los datos recibidos
   console.log(data);
   
    
   imgb.src = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
  

   datotest.innerHTML= data.overview

 


 })
 .catch(error => {
   // Manejar errores
   console.error(error);
 });


