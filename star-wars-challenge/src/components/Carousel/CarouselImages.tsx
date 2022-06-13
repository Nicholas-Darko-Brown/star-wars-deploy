
import { Container, ImageWrapper } from "./styles";
import { reviews } from "./data";
import { Carousel } from "react-bootstrap";

const CarouselImages: React.FC = () => {
  return (
    <Container>
      <Carousel>
        {reviews.map((image) => (
          <Carousel.Item key={image.id} interval={3000}>
            <ImageWrapper src={image.image} className={image.className} alt={image.alt} />
            <Carousel.Caption>
              <h1>{image.caption}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselImages;
