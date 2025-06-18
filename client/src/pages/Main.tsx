import React, { useRef, useState, useEffect } from "react";
import appleWatch from '../images/appleWatch.png'
import iPhoneMain from '../images/iPhone.png';
import airMax from '../images/airMax.png';
import iphone16 from '../images/iphone16.png';
import macbook from '../images/macBookBlack.png';
import whiteWatch from '../images/whiteWatch.png';
import heartIcon from "../../public/heart.png";
import cartIcon from "../../public/cart.png"
import './Main.css';
import iMac from "../images/iMac.png";
import accessories from "../images/accessories.png";
import TVs from '../images/TVs.png';
import WashingMachines from '../images/washingMachines.png';
import refrigerators from '../images/refrigerators.png';
import tablets from '../images/tablets.png';
import smartSpeakers from '../images/smartSpeakers.png';




const slides = [
  {
    title: "Apple Watch SE",
    description: "The ultimate sports and adventure watch",
    img: appleWatch,
  },
  {
    title: "iPhone 15 Pro Max",
    description: "Titanium Black (256GB)",
    img: iPhoneMain,
  }
];

const cards = [
  {
    img: airMax,
    btnCart: 'hgjhg',
    btnHeart: iPhoneMain,
    btnSearch: iPhoneMain,
    title: 'Apple AirPods Max',
    p: "$55.00 USD"
  },
  {
    img: iphone16,
    btnCart: iPhoneMain,
    btnHeart: iPhoneMain,
    btnSearch: iPhoneMain,
    title: 'iPhone 16 ',
    p: "$65.00 USD"
  },
  {
    img: macbook,
    btnCart: iPhoneMain,
    btnHeart: iPhoneMain,
    btnSearch: iPhoneMain,
    title: 'MacBook Air ',
    p: "$65.00 USD"
  },
  {
    img: whiteWatch,
    btnCart: iPhoneMain,
    btnHeart: iPhoneMain,
    btnSearch: iPhoneMain,
    title: 'Apple Watch Ultra',
    p: "$65.00 USD"
  }
];

const popularCards = [
  {
    img: iphone16,
    p: "Smartphones"
  },
  {
    img: macbook,
    p: "Laptops"
  },
  {
    img: smartSpeakers,
    p: "Smart speakers"
  },
  {
    img: tablets,
    p: "Tablets"
  },
  {
    img: refrigerators,
    p: "Refrigerators"
  },
  {
    img: TVs,
    p: "TVs"
  },
  {
    img: WashingMachines,
    p: "Washing machines"
  }
];

const Main: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [activeClass, setActiveClass] = useState(false);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -900, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 900, behavior: "smooth" });
  };
  

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { scrollLeft, scrollWidth, clientWidth } = slider;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };
  useEffect(() => {
    handleScroll();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  


  const changeSlide = (index: number) => {
    if (index === current || animating) return;

    setPrev(current);
    setAnimating(true);
    setActiveClass(false);

    setTimeout(() => {
      setCurrent(index);
      setPrev(null);
      setActiveClass(true); 
    }, 300);

      setTimeout(() => {
      setAnimating(false);
    }, 500); 
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        setActiveClass(true);
      });
    }, 20); 
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="main">
      <section className="main-slider-section">
        <div className="main-slider">
          <div className="main-slider-info">
            <h3 className="main-slider-info-title">{slides[current].title}</h3>
            <p className="main-slider-info-description">{slides[current].description}</p>
            <button className="main-slider-info-button">SHOP NOW</button>
          </div>

          <div className="main-slider-img">
            {prev !== null && (
              <img
                key={"prev"}
                src={slides[prev].img}
                alt="previous slide"
                className="exit"
              />
            )}

            <img
              key={"current"}
              src={slides[current].img}
              alt="current slide"
              className={activeClass ? "active" : ""}
            />
          </div>
        </div>

        <div className="slider-buttons">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className="main-slider-switch-btn"
              onClick={() => changeSlide(idx)}
              style={{ opacity: idx === current ? 1 : 0.5 }}
            />
          ))}
        </div>
      </section>
      <section className="main-top-selling-section">
        <div className="top-selling-title">
          <h2>Top Selling Products</h2>
          <hr />
        </div>

        <div className="main-top-selling-cards">
          {cards.map((card, idx) => (
            <div className="main-top-selling-card">
              <div className="main-top-selling-card-img-buttons" key={idx}>
                <div className="main-top-selling-card-img-div">
                  <img src={card.img} alt={`Product ${idx + 1}`} className="main-top-selling-card-img" />
                </div>
                <div className="main-top-selling-card-buttons">
                  <a href="" className="main-top-selling-card-button">
                    ...
                  </a>
                  <a href="/favorites" className="main-top-selling-card-button">
                   <img src={heartIcon} alt="icon" className="main-top-selling-card-button-img" />
                  </a>
                  <a href="/cart" className="main-top-selling-card-button">
                    <img src={cartIcon} alt="icon" className="main-top-selling-card-button-img" />
                  </a>
                </div>
              </div>
              <div className="main-top-selling-card-info">
                <h4>{card.title}</h4>
                <p>{card.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="macEssentials">
          <h3>Mac essentials</h3>
          <div className="macEssentialsCards">
            <div className="macAccessoriesBlock">
              <h4>Mac accessories</h4>
              <p>Explore keyboards, mice and other essentials.</p>
              <button className="buyMacAccessoriesButton">Buy Mac accessories</button>
              <img src={accessories} alt="" className="iMacAccessories" />
            </div>
            <div className="macBlock">
              <h4>Studio Display</h4>
              <p>The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
              <button className="buyMacAccessoriesButton">Learn more</button>
              <img src={iMac} alt="" className="iMacAccessories" />
            </div>
          </div>
      </section>
      <section className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="categories-slider-wrapper">
          {showLeft && (
            <button className="slider-btn left" onClick={scrollLeft}>◀</button>
          )}

          <div className="main-popular-categories-cards" ref={sliderRef} onScroll={handleScroll}>
            {popularCards.map((popularCard, idx) => (
              <div className="main-popular-categories-card" key={idx}>
                <a href="#" className="popular-categories-img">
                  <img src={popularCard.img} alt="" className="popular-categories-img" />
                </a>
                <p>{popularCard.p}</p>
              </div>
            ))}
          </div>

          {showRight && (
            <button className="slider-btn right" onClick={scrollRight}>▶</button>
          )}
        </div>
      </section>


    </main>
  );
};

export default Main;
