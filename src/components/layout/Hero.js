import classes from './Hero.module.css';

function Hero() {
  return (
    <div>
      <img
        className={classes.heroimage}
        src={require('../../assets/img/hero.jpg')}
        alt='Hero'
      />
    </div>
  );
}

export default Hero;
