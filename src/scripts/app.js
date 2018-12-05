var allStars = document.querySelectorAll(".stars");

for (var i = 0; i < allStars.length; i++) {
  allStars[i].addEventListener("click", rate);
  allStars[i].addEventListener("mouseover", hover);
  allStars[i].addEventListener("mouseout", noHover);

  function rate(event) {
    let clickedStar = event.target;
    let stars = this.querySelectorAll(".star");
    let rated = false;
    stars.forEach(function(star) {
      if (rated) {
        star.classList.remove("full");
        star.classList.remove("client-star");
      } else {
        star.classList.add("full");
        star.classList.add("client-star");
      }
      if (star === clickedStar) {
        rated = true;
      }
    });
  }
  function hover(event) {
    let clientStar = event.target;
    let stars = this.querySelectorAll(".star");
    let isHover = false;
    stars.forEach(function(star) {
      if (isHover) {
        star.classList.remove("star-hover");
      } else {
        star.classList.add("star-hover");
      }
      if (star === clientStar) {
        isHover = true;
      }
    });
  }
  function noHover(event) {
    let stars = this.querySelectorAll(".star");
    stars.forEach(function(star) {
    star.classList.remove("star-hover");
    });
  }
}

