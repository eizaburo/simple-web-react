import styles from './Home.module.css';
import Hero from '../components/Hero';

function Home() {
    return (
        <main>
            <Hero />
            <section className={styles.services}>
                <div className={styles.service}>
                    <h2>サービスA</h2>
                    <p>サービスAの紹介</p>
                </div>
                <div className={styles.service}>
                    <h2>サービスB</h2>
                    <p>サービスBの紹介</p>
                </div>
                <div className={styles.service}>
                    <h2>サービスC</h2>
                    <p>サービスCの紹介</p>
                </div>
            </section>
        </main>
    );
}

export default Home;