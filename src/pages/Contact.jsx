import styles from './Contact.module.css';

function Contact() {
    return (
        <main>
            <section className={styles.hero}>
                <h1>お問合せフォーム</h1>
                <p>お気軽にお問合せ下さい</p>
            </section>
            <section className={styles.formContainer}>
                <form className={styles.contactForm}>

                    <label htmlFor='title'>お問合せタイトル</label>
                    <input type='text' id='title' />
                    <p className={styles.errorMessage}>お問合せタイトルを正しく入力して下さい。</p>

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' />
                    <p className={styles.errorMessage}>Emailを正しく入力して下さい。</p>

                    <label htmlFor='title'>お問合せ内容</label>
                    <textarea id='message' rows={5}></textarea>
                    <p className={styles.errorMessage}>お問合せ内容を正しく入力して下さい。</p>

                    <button type='submit' id='button'>問合せる</button>

                </form>
            </section>
        </main>
    );
}

export default Contact;