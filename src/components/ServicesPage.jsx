import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';
import toothCracked from '../Tooth Cracked.png';
import dentalmachine from '../Dental Machine.png';
import teeth from '../Set of Teeth.png';
import toothache from '../Toothache.png';
import serv1 from '../serv1.png';
import serv2 from '../serv2.png';
import serv3 from '../serv3.png';
import serv4 from '../serv4.png';
import BackButton from './BackButton';


const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBooking = (serviceCategory) => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      navigate('/booking', { state: { category: serviceCategory } });
    } else {
      sessionStorage.setItem('redirectAfterLogin', '/booking');
      sessionStorage.setItem('selectedService', serviceCategory);
      navigate('/login');
    }
  };

  return (
    <>
      <Navbar />
      <BackButton className="bg-white" />
      <div className="services-page">
        <div className="services-header">
          <h1>Our Dental Services</h1>
          <p>Comprehensive dental care for you and your family using the latest technology and techniques</p>
        </div>

        <div className="services-container">
          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>General Dentistry <span className="service-icon"><img src={toothCracked} alt="General Dentistry" /></span></h2>
                <p>Comprehensive dental check-ups, cleanings, and preventative care for patients of all ages.</p>
                <ul>
                  <li>Regular dental check-ups and professional cleanings</li>
                  <li>Digital X-rays for accurate diagnosis</li>
                  <li>Cavity fillings using tooth-colored materials</li>
                  <li>Root canal therapy</li>
                  <li>Gum disease treatment</li>
                  <li>Oral cancer screenings</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('General Dentistry')}>
                  Book General Dentistry
                </button>
              </div>
              <div className="service-image">
                <img src={serv1} alt="General Dentistry" />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content reverse">
              <div className="service-text">
                <h2>Cosmetic Dentistry <span className="service-icon"><img src={dentalmachine} alt="Cosmetic Dentistry" /></span></h2>
                <p>Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic procedures.</p>
                <ul>
                  <li>Professional teeth whitening</li>
                  <li>Porcelain veneers</li>
                  <li>Dental bonding</li>
                  <li>Smile makeovers</li>
                  <li>Gum contouring</li>
                  <li>Torus-colored fillings</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('Cosmetic Dentistry')}>
                  Book Cosmetic Dentistry
                </button>
              </div>
              <div className="service-image">
                <img src={serv2} alt="Cosmetic Dentistry" />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Orthodontics <span className="service-icon"><img src={teeth} alt="Orthodontics" /></span></h2>
                <p>Correct misaligned teeth and jaws with braces, clear aligners, and other orthodontic treatments.</p>
                <ul>
                  <li>Traditional braces</li>
                  <li>Clear aligners (similar to Invisalign)</li>
                  <li>Retainers</li>
                  <li>Early intervention orthodontics</li>
                  <li>Corrective jaw surgery consultation</li>
                  <li>Digital treatment planning</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('Orthodontics')}>
                  Book Orthodontics
                </button>
              </div>
              <div className="service-image">
                <img src={serv3} alt="Orthodontics" />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content reverse">
              <div className="service-text">
                <h2>Oral Surgery <span className="service-icon">🔍</span></h2>
                <p>Expert surgical procedures including tooth extractions, implant placement, and bone grafting.</p>
                <ul>
                  <li>Simple and surgical tooth extractions</li>
                  <li>Wisdom teeth removal</li>
                  <li>Dental implant placement</li>
                  <li>Bone grafting</li>
                  <li>Sinus lift procedures</li>
                  <li>Biopsies and lesion removal</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('Oral Surgery')}>
                  Book Oral Surgery
                </button>
              </div>
              <div className="service-image">
                <img src={serv4} alt="Oral Surgery" />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <div className="service-text">
                <h2>Pediatric Dentistry <span className="service-icon">👶</span></h2>
                <p>Child-friendly dental care in a comfortable environment designed for young patients.</p>
                <ul>
                  <li>Child-friendly dental exams and cleanings</li>
                  <li>Fluoride treatments</li>
                  <li>Dental sealants</li>
                  <li>Space maintainers</li>
                  <li>Early orthodontic assessment</li>
                  <li>Education on proper oral hygiene for children</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('Pediatric Dentistry')}>
                  Book Pediatric Dentistry
                </button>
              </div>
              <div className="service-image">
                <img src={serv1} alt="Pediatric Dentistry" />
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content reverse">
              <div className="service-text">
                <h2>Emergency Care <span className="service-icon"><img src={toothache} alt="Emergency Care" /></span></h2>
                <p>Prompt treatment for dental emergencies including severe pain, trauma, and broken teeth.</p>
                <ul>
                  <li>Same-day emergency appointments</li>
                  <li>Treatment for severe toothaches</li>
                  <li>Repair of broken or chipped teeth</li>
                  <li>Re-cementing of crowns or bridges</li>
                  <li>Treatment for dental trauma</li>
                  <li>24/7 emergency phone consultation</li>
                </ul>
                <button className="book-btn" onClick={() => handleBooking('Emergency Care')}>
                  Book Emergency Care
                </button>
              </div>
              <div className="service-image">
                <img src={serv2} alt="Emergency Care" />
              </div>
            </div>
          </div>
        </div>

        <section className="appointment-section">
          <div className="container text-center py-5">
            <h2 className="mb-4">Ready to schedule your appointment?</h2>
            <div>
              <button 
                className="btn btn-primary rounded-pill me-3"
                onClick={() => handleBooking('General Consultation')}
              >
                Book an Appointment Now
              </button>
              <button className="btn btn-dark rounded-pill">Call for Info</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;