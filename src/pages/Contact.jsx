import styles from './Contact.module.css';

function Contact() {
    return (
        <main>
            <section className={styles.hero}>
                <h1>ヒーローエリア</h1>
                <p>ヒーローエリアのキャッチコピー</p>
            </section>
            <section className={styles.formContainer}>
                <form className={styles.contactForm}>

                    <label htmlFor='title'>お問合せタイトル</label>
                    <input type='text' id='title' />

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' />

                    <label htmlFor='title'>お問合せ内容</label>
                    <textarea id='message' rows={5}></textarea>

                    <button type='submit' id='button'>問合せる</button>

                </form>
            </section>
        </main>
    );
}

export default Contact;