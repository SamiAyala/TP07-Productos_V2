import Carousel from 'react-bootstrap/Carousel'

const CarouselProducto = (props) => {
    

    return (
        <Carousel>
          {props.product.images.map((im) => (
            <Carousel.Item className="slide">
              <img
                style={{ height: "410px", width: "200px" }}
                className="d-block w-100"
                src={im}
                alt=""
              ></img>
              <Carousel.Caption>
                <p>{props.product.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    )
}
export default CarouselProducto;