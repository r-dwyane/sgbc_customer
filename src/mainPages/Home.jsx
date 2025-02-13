import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './H.css';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <header>
        <div className="nav-container">
          <h1 className='business-name'>Samgyeop Grill Box - Cebu</h1>
          <nav>
            <ul className='nav-list'>
              <li className='home'><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
        <hr />

        <h1 className='tagline'>Grill your favorite <br /> authentic Korean <br /> sampling anytime, <br />anywhere</h1>
        <div className='order-now'><Link to='/order'>Order now &rarr;</Link></div>
      </header>

      <div className="container-1">
        <img src="/img_1.svg" alt="Image 1" className='img-1' />
        <div className="about-container">
          <h2 className='sizzling'>Sizzling flavors, unforgettable moments.</h2>
          <h1 className='tag'>Your Table, Your <br />Grill, Your Feast</h1>
          <p className='desc'>From sizzle to bite, authentic Korean taste.</p>
          <p className='about-desc'>Samgyeop Grill Box, established in 2023, offers food delivery <br />
            across Cebu City, Mandaue City, and Consolacion. We specialize <br />
            in authentic Korean samgyeopsal, providing freshly cooked side <br />
            dishes and frozen meat for a convenient grilling experience. Our <br />
            dedicated team is committed to professionalism and customer <br />
            satisfaction, ensuring outstanding results with every order.</p>
          <div className='learn-more'><Link to='/about'>Learn more &rarr;</Link></div>
        </div>
      </div>

      <div className="container-2">
        <h1 className="why">Why Choose Samgyeop Grill Box?</h1>
        <p className='reason'>
          Our commitment to professionalism, customer satisfaction, and top-tier ingredients ensures that
          <br />every order delivers outstanding flavors and convenience. Enjoy restaurant-quality Korean BBQ in
          <br />the comfort of your home—choose Samgyeop Grill Box for an unbeatable grilling experience!
        </p>
        <img src="/collage.svg" alt="Collage" />
      </div>

      <div className="container-3">
        <div className="group-1">
          <img src="/img_2.svg" alt="Image 2" className='img-2' />
          <div className='feedback-container'>
            <h1>Your Table, Your <br />Grill, Your Feast</h1>
            <p>From sizzle to bite, authentic Korean taste.</p>
            <input type="text" placeholder='Name' id='feedback_name' />
            <input type="text" placeholder='Email' name="email" id="feedback_email" />
            <input type="text" placeholder='Your Feedback' id="feedback" />
            <button className='feedback-submit'>Submit</button>
          </div>
        </div>
      </div>

      <FeedbackSlider />
      <Dropdown />
      
      <div className="container-6">
        <img src="/img_5.svg" alt="Image"/>
        <h1>Join Us Today!</h1>
        <p>Partner with us and start your journey as a reseller! Join now <br/>
        to access exclusive products, great deals, and a supportive <br/>
        community. Grow your business with us today!</p>
        <button id='reseller-button' onClick={openPopup}> Become a Reseller</button>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />

      <footer>
        <div className="container-footer">
          <div className="column-1">
            <h1>Samgyeop Grill Box</h1>
            <p>We specialize in authentic Korean samgyeopsal, 
              <br/>providing freshly cooked side dishes and frozen 
              <br/>meat for a convenient grilling experience. Our 
              <br/>dedicated team is committed to professionalism 
              <br/>and customer satisfaction, ensuring outstanding 
              <br/>results with every order.</p>
              <div className="icons">
                <a href="https://www.facebook.com/samgyeopgrillbox.cc"><img src="/fb_icon.svg" alt="Facebook Link"/></a>
                <a href="#"><img src="/instagram_icon.svg" alt="Instagram Link"/></a>
              </div>
          </div>
          <div className="column-2">
            <h1>Contact Us</h1>
            <p><img src="/location_icon.svg" alt="Location" /> R. Landon Ext. Cebu City</p>
            <p><img src="/phone_icon.svg" alt="Location" /> 09692521835</p>
            <p><img src="/email_icon.svg" alt="Location" /> sgbcebu0321@gmail.com</p>
          </div>
          <div className="column-3">
            <h1>Opening Hours</h1>
            <p>Monday 10:00 AM - 6:00 PM</p>
            <p>Tuesday 10:00 AM - 6:00 PM</p>
            <p>Wednesday 10:00 AM - 6:00 PM</p>
            <p>Thursday 10:00 AM - 6:00 PM</p>
            <p>Friday 10:00 AM - 6:00 PM</p>
          </div>
        </div>
        <img src="/footer.svg" alt="Copyright" className='footer-img'/>
      </footer>
    </>
  );
}
function Popup({ closePopup, isOpen }) {
  return (
    <div className={`popup-overlay ${isOpen ? "show" : ""}`} onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <span className="close-btn" onClick={closePopup}>&times;</span>
          <h1>Become a Reseller</h1>
          <h4>You will receive everything included in the box as a full package set.</h4>
        </div>
        
        <img src="/package_1.svg" alt="Reseller Package 1" />
        <img src="/package_2.svg" alt="Reseller Package 2" />

        <div className="get-started">
          <h2>REQUIREMENTS:</h2>
          <p>1. Vacant space/house room of <br/>at least 5-10sqm for sanitary <br/>purposes.</p>
          <p>2. Refrigerator with freezer.</p>
          <p>3. Microwave</p>
          <p>4. Clean table</p>
        </div>
        <a href="https://www.facebook.com/samgyeopgrillbox.cc" target='_blank' className='reseller-link'>Get Started &rarr;</a>
      </div>
    </div>
  );
}

function FeedbackSlider() {
    const [index, setIndex] = useState(0);
    const slides = [
      { id: 1, content: 
            <div className="hello-world">
                <div className='feedback-1'>
                    <h4>Helen &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                    <p>Hi ma’am! So far okay naman ang food maam lalo na <br/>
                    sakong anak kay favorite jud na niya nga food nahurot <br/>
                    jud ang duha ka box nga food gabie hehehe we’ll order <br/>
                    again maam puhon yummy and sulit kaayo sa budget <br/>ang food maam.</p>
                </div>
                <div className='feedback-1'>
                    <h4>Corrine &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                    <p>Thanks kaayu mam! <br/> SULIT and LAMI ang meat ug side dishes. <br/>
                    Order ko balik Pohon mam!</p>
                </div>
            </div>},
      { id: 2, content: 
            <div className="hello-world">
            <div className='feedback-1'>
                <h4>Linda &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                <p>First bite palang  na amazed ko! Rate ni nako 1000/10 </p>
            </div>
            <div className='feedback-1'>
                <h4>Marjorie &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                <p>Very Satisfied</p>
            </div>
    </div>
       },
      { id: 3, content: 
            <div className="hello-world">
                <div className='feedback-1'>
                    <h4>Jay Lyn &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                    <p>Kalami kaayo! First time nako kaon ani!</p>
                </div>
                <div className='feedback-1'>
                    <h4>Kyla &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="/img_4.svg" alt="Star" /></h4>
                    <p>Thanks po ulit! Super nag enjoy po kami ng Brother ko.</p>
                </div>
            </div>
       },
    ];
  
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

  
    return (
      <div className="container-4">
        <h1>Feedback By Our Valued Customers</h1>
        <h4>See what our customers say about our product.</h4>
        
        <div className="slider-container">
          <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
  
          <div className="slider-wrapper">
            <div
              className="slider"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="slide">
                  {slide.content}
                </div>
              ))}
            </div>
          </div>
  
          <button className="next-btn" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
    );
  }

  function Dropdown() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: "Where do you operate?", answer: "- We operate in Cebu City and Lapu-Lapu City, catering to cities in between up to Consolacion, Liloan, and down to Basak, Pardo." },
        { question: "Can I order for my family or friends?", answer: "- Yes, you can. When ordering, you will be asked if it is for yourself or for others. You just need to provide the recipient’s contact name, number, and address when ordering." },
        { question: "I am planning to go home, how long do your products last?", answer: "- Our products are frozen except for the Lettuce & Rice. They will last for more than 3 months as long as they are kept frozen. Once in transit, keep them cool, and they stay fresh for more than one hour." },
        { question: "Can we cancel our order?", answer: "- No, you cannot cancel your order once you confirm and an invoice is generated." },
        { question: "Can I ask for a refund?", answer: "- Unfortunately, No. We do not process refunds. We are a small business operating solely on trust and confidence. We make sure the foods we deliver are fresh." }
    ];

    return (
        <div className="container-5">
            <h1>Frequently Asked Questions</h1>
            <h4>Your Queries Answered</h4>

            {faqs.map((faq, index) => {
                const questionId = `question_${index + 1}`;
                const answerId = `answer_${index + 1}`;

                return (
                    <div key={index} className="dropdown-container">
                        <div className="dropdown-header" id={questionId} onClick={() => toggleDropdown(index)}>
                            <h3>{faq.question}</h3>
                            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
                        </div>
                        <div className={`dropdown-content ${openIndex === index ? 'show' : ''}`} id={answerId}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default Home;
