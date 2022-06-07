
import { Container, ImageWrapper } from "./styles";
import { reviews } from "./data";
import { Carousel } from "react-bootstrap";

const CarouselImages: React.FC = () => {
  return (
    <Container>
      <Carousel>
        {reviews.map((review) => (
          <Carousel.Item key={review.id} interval={3000}>
            <ImageWrapper src={review.image} className={review.className} alt={review.alt} />
            <Carousel.Caption>
              <h1>{review.caption}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselImages;
