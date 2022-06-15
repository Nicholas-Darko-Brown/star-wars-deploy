import StarWarsImg1 from "../../assets/starWars1.jpg"
import StarWarsImg2 from "../../assets/starWars2.jpg"
import StarWarsImg3 from "../../assets/starWars3.jpg"

interface CarouselProps {
    id: number;
    className: string;
    image: string;
    alt: string;
    caption: string;
}

export const reviews: CarouselProps[] = [
    {
      id: 1,
      className:"d-block w-100",
      image: StarWarsImg1,
      alt:"First slide",
      caption: "Slight weapons malfunction",
    },
    {
      id: 2,
      className:"d-block w-100",
      image: StarWarsImg2,
      alt:"Second slide",
      caption: "Rebellions are built on hopes",
    },
    {
      id: 3,
      className:"d-block w-100",
      image: StarWarsImg3,
      alt:"Third slide",
      caption: "The ability to speak does not make you intelligent.",
    }
  ];