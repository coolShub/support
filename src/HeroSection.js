import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    <img className="hero_back" src="https://alaskacf.org/wp-content/uploads/2018/07/iStock-463406923.jpg"/>
      <h1>ADVENTURE AWAITS</h1>
      <p>Service to others is the rent you pay for your room here on earth</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;


