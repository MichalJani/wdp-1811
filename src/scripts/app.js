(function () {
  const allStars = document.querySelectorAll(".stars");

  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener("click", rate);
    allStars[i].addEventListener("mouseover", hover);
    allStars[i].addEventListener("mouseout", noHover);
  }
  function rate(event) {
    const clickedStar = event.target;
    if (clickedStar.classList.contains("star")) {
      const stars = this.querySelectorAll(".star");
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
  }
  function hover(event) {
    const clientStar = event.target;
    if (clientStar.classList.contains("star")) {
      const stars = this.querySelectorAll(".star");
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
  }
  function noHover(event) {
  	const stars = this.querySelectorAll(".star");
    stars.forEach(function(star) {
      star.classList.remove("star-hover");
    });
  }
})();
