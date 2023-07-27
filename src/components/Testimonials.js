import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import './Testimonials.css'

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
        <img src = {image3}  alt = "image3" className="image3"  />
            <img src = {image4}  alt = "image4" className="image4"  />
        
        <h1>Testimonials</h1>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p><br/>
            <br/>
            <br/>
          
           
            

          <div className="myCarousel">
              <img src = {image5} alt = "image5" className="image5"  />

              
            
              <img src = {image1} alt = "image1" className="image1"  />
              <h3>Josh brollins</h3> <h4>mywebsite.com</h4>
            
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua . At vero eos et accusame
              </p>
            
              <img src = {image6} alt = "image6" className="image6"  />

          </div>
        </div>

        <div>
        <img src = {image3}   alt = "image3" className="image3"  />
            <img src = {image4} alt = "image4" className="image4"  />

        <h1>Testimonials</h1>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p><br/>
            <br/>
            <br/>
        
            
            
          <div className="myCarousel">
            <img src = {image5} alt = "image5" className="image5"  />
            
            
            <img src = {image2} alt = "image2" className="image2" />
            <h3>Dave inau</h3> <h4>yourwebsite.com</h4>
            
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua . At vero eos et accusame
            </p>

            <img src = {image6} alt = "image6" className="image6"  />

          </div>
        </div>

        <div>
            <img src = {image3}   alt = "image3" className="image3"  />

            <img src = {image4}  alt = "image4" className="image4"  />

        <h1>Testimonials</h1>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p><br/>
            <br/>
            <br/>
        
            
            
          <div className="myCarousel">
            <img src = {image5} alt = "image5" className="image5"  />
            


            <img src = {image1} alt = "image1" className="image1" />

            <h3>Josh brollins </h3> <h4>mywebsite.com</h4>
            
            
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua . At vero eos et accusame
            </p>

            <img src = {image6} alt = "image6" className="image6"  />

          </div>
        </div>
      </Carousel>
    );
  }
}

