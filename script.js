const moviesList = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Leon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
  ]

//store data to localstorage
let movies = []
localStorage.setItem('savedMovieList',JSON.stringify(moviesList));
movies = JSON.parse(localStorage.getItem('savedMovieList'))



  let titleInput = document.getElementById('title');
  let genreInput = document.getElementById('genre');
let searchResult= [];
function displaySearch(list){
  if(titleInput.value!==""){
    searchResult = searchByTitle(titleInput.value)
  }else if(genreInput.value!==""){
    searchResult = searchByGenre(genreInput.value)
  }
  displayResult(searchResult);
}



function searchByTitle(item){
  
  document.getElementById("list").innerText = "";
  return movies.filter(ele=>ele.title.toLowerCase().includes(item.toLowerCase().trim()))
}

function  searchByGenre(item){
  
  document.getElementById("list").innerText = "";
    return movies.filter(ele=>ele.genre.toLowerCase().includes(item.toLowerCase().trim()))
  }
function displayResult(list) {
    list.map(ele=>{
      document.getElementById('list').innerHTML += `<li>${ele.title}(${ele.genre})</li>`
    })
}

function sortByTitle(){
  document.getElementById("list").innerText = "";
  const sortedMoviesByTitle = searchResult.sort((a,b)=> a.title.localeCompare(b.title));
  displayResult(sortedMoviesByTitle);
}

function sortByGenre(){
  document.getElementById("list").innerText = "";
  const sortedMoviesByGenre = searchResult.sort((a,b)=>a.genre.localeCompare(b.genre))
  displayResult(sortedMoviesByGenre)
}

let object = {};
function  countByGenre(){
  document.getElementById("object").innerText = "";
for(let i=0;i<searchResult.length;i++){
  if(object[searchResult[i].genre]==undefined){
    object[searchResult[i].genre]=1
  }else{
    object[searchResult[i].genre]++
  }
}
const objectvalue = Object.values(object);
const objectkey = Object.keys(object);
for(let i=0;i<objectkey.length;i++){
  document.getElementById("object").innerHTML +=`<li>${objectkey[i]}:${objectvalue[i]}</li>`
}
if(document.getElementById("object").innerHTML!==""){
  document.getElementById("button").disabled=true
}
document.getElementById("title").addEventListener('change',function(){
  document.getElementById("object").innerText = "";
  object={};
  document.getElementById("button").disabled=false
})
document.getElementById("genre").addEventListener('change',function(){
  document.getElementById("object").innerText = "";
  object={};
  document.getElementById("button").disabled=false
})
}



