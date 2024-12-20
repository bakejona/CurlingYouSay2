// src/app/page.js
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>Welcome to</h2>
            <h1>Curling You Say?</h1>
            <p>Your ultimate guide to the sport of curling.</p>
          </div>
        </section>

        {/* About Curling Section */}
        <section className={styles.aboutCurling}>
          <div className={styles.aboutText}>
            <h2>About Curling</h2>
            <p>
              Curling is a unique sport that combines strategy, skill, and teamwork. 
              It is played on ice, where players slide stones towards a target area. 
              The sport is often referred to as "chess on ice" due to its strategic depth.
            </p>
            <a href="/about" className={styles.aboutButton}>Learn More</a>
          </div>
          <div className={styles.aboutImage}>
            <img src="/curling-about-img.jpg" alt="Curling" />
          </div>
        </section>

        {/* Curling Events Section */}
        <section className={styles.curlingEvents}>
          <div className={styles.eventsHeader}>
            <h2>Curling Events</h2>
          </div>
          <div className={styles.learnMoreContainer}>
            <a href="/about" className={styles.learnMoreButton}>Learn More</a>
          </div>
          <div className={styles.eventList}>
            <div className={styles.eventCard}>
              <div className={styles.eventImage1} />
              <h3>World Curling Championships</h3>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventImage2} />
              <h3>Winter Olympics Curling</h3>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventImage3} />
              <h3>Continental Cup of Curling</h3>
            </div>
            <div className={styles.eventCard}>
              <div className={styles.eventImage4} />
              <h3>Grand Slam of Curling</h3>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}