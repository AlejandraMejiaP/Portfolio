import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// Imgs proyects
import rockpaperscissors from "../../images/miniatures_proyects/rpsGame.jpg";
import animeSearcher from "../../images/miniatures_proyects/animeSearcher.jpeg";
import codeFigthersIMG from "../../images/miniatures_proyects/code_img.jpg";
import anonymousProxy from "../../images/miniatures_proyects/anonymous.jpg";
import awesomeCards from "../../images/miniatures_proyects/awesomeCard.png";
import refactory from "../../images/miniatures_proyects/undefined.png";
import WitcherFinder from "../../images/miniatures_proyects/hpImg.jpeg";

function Proyects() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel

  const items = [
    {
      src: `${codeFigthersIMG}`,
      altText: "Code Figthers",
      url: "https://alejandramejiap.github.io/Code-Figthers/",
    },
    {
      src: ` ${anonymousProxy}`,
      altText: "Anonymous Proxy",
      url: "https://alejandramejiap.github.io/Anonymous-proxy/",
    },
    {
      src: `${rockpaperscissors}`,
      altText: "Piedra, Papel o Tijera",
      url: "https://alejandramejiap.github.io/piedra-papel-o-tijera/",
    },
    {
      src: `${animeSearcher}`,
      altText: "Anime Searcher",
      url: "https://alejandramejiap.github.io/Anime-Searcher/",
    },
    {
      src: ` ${awesomeCards}`,
      altText: "Awesome-Profile Cards",
      url: "https://alejandramejiap.github.io/awesome-profile-cards/",
    },
    {
      src: `${WitcherFinder}`,
      altText: "WitcherFinder!",
      url: "https://alejandramejiap.github.io/WitchersFinder/",
    },
    {
      src: ` ${refactory}`,
      altText: "Refactory Awesome-Profile Cards",
      url: "https://undefined-awesome-cards.herokuapp.com/#/",
    },
  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.url}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <h5>{item.altText}</h5>
        <a href={item.url} target="_blank" rel="noreferrer">
          <img src={item.src} alt={item.altText} />
        </a>
      </CarouselItem>
    );
  });

  return (
    <section className="proyect" id="proyects">
      <h3 className="proyect__title">Proyectos:</h3>
      <div className="proyect__slider">
        <Carousel
          previous={previousButton}
          next={nextButton}
          activeIndex={activeIndex}
          style={{ width: "100%", height: "80px" }}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={(newIndex) => {
              if (animating) return;
              setActiveIndex(newIndex);
            }}
          />
          {carouselItemData}
          <CarouselControl
            directionText="Prev"
            direction="prev"
            onClickHandler={previousButton}
          />
          <CarouselControl
            directionText="Next"
            direction="next"
            onClickHandler={nextButton}
          />
        </Carousel>
      </div>
    </section>
  );
}

export default Proyects;
