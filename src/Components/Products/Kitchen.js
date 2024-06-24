import React from "react";
import Slider from "react-slick";
import "../../Styles/kitchen.css";
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";

/*import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import kitchen1 from "../../Assets/Images/89.jpg";
import kitchen2 from "../../Assets/Images/90.jpg";
import kitchen3 from "../../Assets/Images/91.jpg";*/
import "../../Styles/Products.css"; // Import the CSS
import { Button } from "react-bootstrap";
//import Data from '../Products/Data.json';
//import kproduct from "./kproduct";

const Kitcard = () => {
  //const [products, setProducts]=useState(Data.products)
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="kitchenproduct">
      <h1>Kitchens</h1>
      <div className="slider1">
        <Slider {...productSliderOptions} >
          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/736x/c7/26/55/c726555b47cf7fae4bd96e7e1cdcee66.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>

          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/564x/a9/f9/93/a9f993e2c49fdea25a82cd04f783d072.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>


          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/564x/be/bc/33/bebc33ee1bf891e8c3da7f31eab114b8.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>


          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/564x/87/08/a7/8708a71401f1dd16393d54c106657645.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>


          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/564x/01/4b/03/014b032e788312ce4231cd61dc5f5f97.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>


          <div className="item productItem">
            <div className="imgWrapper">
              <img src="https://i.pinimg.com/564x/39/34/11/393411a46bb801d10eeab69214596516.jpg" className="resizeImg" />
            </div>
            <div className="infoWrapper">
              <h5 style={{ fontWeight: "bolder" }}>Woody Kitchen</h5>
              <div>This kitchen has a white color scheme that is able to make the kitchen look bright and clean. </div>
              <div style={{ fontWeight: "bolder" }}>Category: Kitchens</div>
              <span className="price">$18000</span>
              <div className="actionsandrating">
                <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                <div className="actions">
                  <Button><FaRegHeart /></Button>
                </div>
                <Button> Add to cart </Button>
              </div>
            </div>
          </div>

        </Slider >
      </div>
    </div >
  )
}




/*function Kitcard({ addToCart }) {
  // const navigate = useNavigate(); // Hook to navigate to other routes

  const handleAddToCart = (item) => {
    addToCart(item);
    // navigate("/cart"); // Navigate to Cart when an item is added
  };
  return (
    <div className="Container">
      <div className="row1">
        {/* Card 1 *//*}
<Card className="card">
<Card.Img src={kitchen1} className="image" alt="Kitchen 1" />
<Card.Body>
<Card.Title>Mint Modern Kitchen</Card.Title>
<Card.Text>Price: $30,000</Card.Text>
<Button
className="button"
onClick={() => handleAddToCart("Mint Modern Kitchen", 30000)}
>
Add to Cart
</Button>
<Link to="/Favorites">
<Button className="button">Add to Favorites</Button>
</Link>
</Card.Body>
</Card>

{/* Card 2 *//*}
<Card className="card">
  <Card.Img src={kitchen2} className="image" alt="Kitchen 2" />
  <Card.Body>
    <Card.Title>Woody Kitchen</Card.Title>
    <Card.price>Price: $60,000</Card.price>
    <Button
      className="button"
      onClick={() => handleAddToCart("Woody Kitchen", 60000)}
    >
      Add to Cart
    </Button>
    <Button className="button">Favorite</Button>
  </Card.Body>
</Card>

{/* Card 3 *//*}
<Card className="card">
  <Card.Img src={kitchen3} className="image" alt="Kitchen 3" />
  <Card.Body>
    <Card.Title>Marble Woody Kitchen</Card.Title>
    <Card.Text>Price: $23,000</Card.Text>
    <Button
      className="button"
      onClick={() => handleAddToCart("Marble Woody Kitchen", 23000)}
    >
      Add to Cart
    </Button>
    <Button className="button">Favorite</Button>
  </Card.Body>
</Card>
</div>
</div>
);
}*/






export default Kitcard;
