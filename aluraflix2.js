function addMovie() {
  var favMovie = document.getElementById("filme").value;
  var elementMovieList = document.getElementById("listaFilmes");
  elementMovieList.innerHTML = elementMovieList.innerHTML + "<img src=" + favMovie + ">";
  document.getElementById('filme').value = ''
}

//accept only images
//redirect movie trailer while selecting the image
//create a list to manage images, trailers