import styles from './Contact.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });

    // 問合せクリック時（formサブミット時）
    const _onSubmit = async (data) => {
        alert(`title=${data.title}, email=${data.email}, message=${data.message}`);
    }

    return (
        <main>
            <section className={styles.hero}>
                <h1>お問合せフォーム</h1>
                <p>お気軽にお問合せ下さい</p>
            </section>
            <section className={styles.formContainer}>
                <form className={styles.contactForm} onSubmit={handleSubmit(_onSubmit)}>

                    <label htmlFor='title'>お問合せタイトル</label>
                    <input type='text' id='title' {...register("title")} />
                    <p className={styles.errorMessage}>お問合せタイトルを正しく入力して下さい。</p>

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' {...register("email")} />
                    <p className={styles.errorMessage}>Emailを正しく入力して下さい。</p>

                    <label htmlFor='title'>お問合せ内容</label>
                    <textarea id='message' rows={5} {...register("message")}></textarea>
                    <p className={styles.errorMessage}>お問合せ内容を正しく入力して下さい。</p>

                    <button type='submit' id='button'>問合せる</button>

                </form>
            </section>
        </main>
    );
}

export default Contact;