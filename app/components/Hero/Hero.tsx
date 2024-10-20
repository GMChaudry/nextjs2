// components/Hero.js
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to My Website</h1>
      <p>Your one-stop solution for web development needs!</p>
      <button>Get Started</button>
    </section>
  );
};

export default Hero;
