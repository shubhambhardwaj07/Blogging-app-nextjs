import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/shubh.png"
          alt="An image showing Shubh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shubh</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React.
      </p>
    </section>
  );
}

export default Hero;
