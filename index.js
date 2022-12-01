const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


   const moviebox= document.querySelector('#movie-box');
   
   const getMovies=async (url)=>{

    const response = await fetch(url);
    const data= await response.json();
    // console.log(data.results);
    showMovies(data.results)
   }

   getMovies(APIURL);

   const showMovies=(result)=>{
    moviebox.innerHTML=""
    result.forEach((item)=>{
        const imagepath = item.poster_path===null?image-missing.png:IMGPATH+item.poster_path;
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML=`
        
        <img src="${imagepath}" alt="" />
        <div class="overlay">
            <div class="title"> 
                <h2> ${item.original_title}  </h2>
                <span> ${item.vote_average} <span>
            </div>
            <h3>Overview:</h3>
            <p> 
                ${item.overview}
            </p>
         </div>
        
        `
        moviebox.appendChild(box)
    })
document.querySelector('#search').addEventListener('keyup',function(e){

  if(e.target.value!=null){
    getMovies(SEARCHAPI+e.target.value)
  }else{
    getMovies(APIURL)
  }
})


   }