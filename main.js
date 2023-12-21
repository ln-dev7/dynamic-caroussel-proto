import "./style.scss";
import gsap from "gsap";

const btnNext = document.querySelector(".main-paginations__button-next");
const btnPrev = document.querySelector(".main-paginations__button-prev");
const mainDiv = document.querySelector(".main");

let nbrCurrentSlide = 1;

btnNext.addEventListener("click", () => {
  if (nbrCurrentSlide < 5) {
    gsap.to(".main-text", {
      y: "-=100%",
    });
    gsap.to(".main-images", {
      x: "-=490px",
    });
    gsap.to(".main-paginations__pages-page span", {
      y: "-=24px",
    });

    nbrCurrentSlide++;
    switch (nbrCurrentSlide) {
      case 1:
        gsap.to(".main", {
          backgroundColor: "#C28159",
        });
        break;
      case 2:
        gsap.to(".main", {
          backgroundColor: "#4D9CAA",
        });
        gsap.to(".main-image-one", {
          x: "-200%",
        });
        break;
      case 3:
        gsap.to(".main", {
          backgroundColor: "#48582B",
        });
        gsap.to(".main-image-two", {
          x: "-200%",
        });
        break;
      case 4:
        gsap.to(".main", {
          backgroundColor: "#184261",
        });
        gsap.to(".main-image-three", {
          x: "-200%",
        });
        break;
      case 5:
        gsap.to(".main", {
          backgroundColor: "#111110",
        });
        gsap.to(".main-image-four", {
          x: "-200%",
        });
        break;
      default:
        gsap.to(".main", {
          backgroundColor: "#C28159",
        });
        break;
    }
  }
});

btnPrev.addEventListener("click", () => {
  if (nbrCurrentSlide > 1) {
    gsap.to(".main-text", {
      y: "+=100%",
    });
    gsap.to(".main-images", {
      x: "+=490px",
    });
    gsap.to(".main-paginations__pages-page span", {
      y: "+=24px",
    });
    nbrCurrentSlide--;
    switch (nbrCurrentSlide) {
      case 1:
        gsap.to(".main", {
          backgroundColor: "#C28159",
        });
        gsap.to(".main-image-one", {
          x: "0",
        });
        break;
      case 2:
        gsap.to(".main", {
          backgroundColor: "#4D9CAA",
        });
        gsap.to(".main-image-two", {
          x: "0",
        });
        break;
      case 3:
        gsap.to(".main", {
          backgroundColor: "#48582B",
        });
        gsap.to(".main-image-three", {
          x: "0",
        });
        break;
      case 4:
        gsap.to(".main", {
          backgroundColor: "#184261",
        });
        gsap.to(".main-image-four", {
          x: "0",
        });
        break;
      case 5:
        gsap.to(".main", {
          backgroundColor: "#111110",
        });
        break;
      default:
        gsap.to(".main", {
          backgroundColor: "#C28159",
        });
        break;
    }
  }
});
