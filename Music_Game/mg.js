

var Ariana_Grande =
{
  img : "Pictures/Ariana_Grande.jpg",
  song : "Songs/Ariana_Grande.mp3"
};

var Taylor_Swift =
{
  img : "Pictures/Taylor_Swift.jpg",
  song : "Songs/Taylor_Swift.mp3"
};

var Cardi_B =
{
  img : "Pictures/Cardi_B.jpg",
  song :"Songs/Cardi_B.mp3"
};

var Nicki_Minaj =
{
  img : "Pictures/Nicki_Minaj.jpg",
  song : "Songs/Nicki_Minaj.mp3"
};

var Camila_Cabello =
{
  img : "Pictures/Ariana_Grande.jpg",
  song : "Songs/Ariana_Grande.mp3"
};

var Flo_Rida =
{
  img : "Pictures/Flo_Rida.jpg",
  song : "Songs/Flo_Rida.mp3"
};

var artists = [Ariana_Grande, Taylor_Swift, Nicki_Minaj, Flo_Rida, Camila_Cabello, Cardi_B];

var a = document.querySelectorAll(".square");

for(var i = 0; i < artists.length; i++)
{
  var x = document.createElement("IMG");
  x.src = artists[i].img;
  x.classList.add("img")
  a[i].appendChild(x);

  //a[i].style.src = artists[i].img;

}
