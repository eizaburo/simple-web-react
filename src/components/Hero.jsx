const styles = {
    hero: {
        background: "#aaf",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    heroH1: {
        fontSize: "1.6rem",
        color: "#fff",
    },
    heroP: {
        fontSize: "1.0rem",
        color: "#fff",
    },
};

function Hero({
    height = "200px",
    headline = "ヒーローエリア",
    catchcopy = "ヒーローエリアのキャッチコピー"
}) {
    return (
        <section style={{ ...styles.hero, height: height }}>
            <h1 style={styles.heroH1}>{headline}</h1>
            <p style={styles.heroP}>{catchcopy}</p>
        </section>
    );
};

export default Hero;