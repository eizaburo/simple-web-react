import styles from './Hero.module.css';

function Hero({
    height = "200px",
    headline = "ヒーローエリア",
    catchcopy = "ヒーローエリアのキャッチコピー"
}) {
    return (
        <section className={styles.hero} style={{ height }}>
            <h1>{headline}</h1>
            <p>{catchcopy}</p>
        </section>
    );
}

export default Hero;