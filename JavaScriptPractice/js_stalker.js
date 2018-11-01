var movie = [
  {
    title: "Frozen",
    rating: "3.5 stars",
    watched: "have watched"
  },
  {
    title: "Coco",
    rating: "5 stars",
    watched: "have not watched"
  },
  {
    title: "Searching",
    rating: "4.5 stars",
    watched: "have watched"
  }
];

movie.forEach(function (el)
{
  console.log("You "  + el.watched + " " + el.title + " - Rating " + el.rating);
});
