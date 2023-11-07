import React from 'react'
import "./Home.css";
import Product from "./Product";


function Home() {
  return (

    <div className="home">
        <div className="home__container">
            <img
              className="home__image"
              src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" 
              alt=""
            />
            
            <div className="home__row">
                <Product
                  id="100" 
                  title="boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime"
                  price={899} 
                  image="https://m.media-amazon.com/images/I/61KNJav3S9L._SY355_.jpg"
                  rating={4}
                />
                <Product
                  id="101" 
                  title='Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery' 
                  price={8999} 
                  image='https://m.media-amazon.com/images/I/41op1vdp-UL._SX300_SY300_QL70_FMwebp_.jpg'
                  rating={4} 
                />
                <Product
                  id="103" 
                  title='Adidas Mens M Bl Fl Swt Sweatshirt' 
                  price={1620} 
                  image='https://m.media-amazon.com/images/I/41UgrMxXh4L._UX679_.jpg'
                  rating={5} 
                />
                <Product
                  id="104" 
                  title='Puma Womens W Revolution 6 Nn Running' 
                  price={2344} 
                  image='https://m.media-amazon.com/images/I/51KFrJ6TA9L._UY625_.jpg'
                  rating={2} 
                />
            </div>

            <div className="home__row">
                <Product 
                   id="200" 
                   title="Think and Grow Rich THE 21st CENTURY EDITION Paperback – 1"
                   price={98} 
                   image="https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY327_FMwebp_QL65_.jpg"
                   rating={1}
                />
                <Product 
                   id="201" 
                   title="JBL Boombox 2 | Wireless Portable Bluetooth Speaker| BT 5.1 | AUX (Black)"
                   price={8990} 
                   image="https://m.media-amazon.com/images/I/71zDU8JBLZL._AC_UY327_FMwebp_QL65_.jpg"
                   rating={5}
                />
                <Product 
                   id="203" 
                   title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)"
                   price={11499} 
                   image="https://m.media-amazon.com/images/I/71jjLQZO+pL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={3}
                />
            </div>

            <div className="home__row">
                <Product 
                   id="300" 
                   title="Acer Aspire 3 Intel Core i5 12th Generation Laptop (Windows 11 Home/16GB/512 GB SSD/MS Office)"
                   price={42990} 
                   image="https://m.media-amazon.com/images/I/81eW38mGOWL._AC_UY327_FMwebp_QL65_.jpg"
                   rating={4}
                />
                <Product 
                   id="301" 
                   title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)"
                   price={11499} 
                   image="https://m.media-amazon.com/images/I/416-95iU0hL._SX300_SY300_QL70_FMwebp_.jpg"
                   rating={3}
                />
                <Product 
                   id="302" 
                   title="Home Centre Emily 5 Seater Fabric Sectional Sofa Set (Brown)"
                   price={24999} 
                   image="https://m.media-amazon.com/images/I/91wq-o6dODL._AC_UL480_FMwebp_QL65_.jpg"
                   rating={5}
                />
            </div>
            <p>
              This Amazon Clone is created by Mayank.
            </p>
        </div> 
    </div> 
  );
}

export default Home