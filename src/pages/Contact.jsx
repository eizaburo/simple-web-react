import styles from './Contact.module.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Hero from '../components/Hero';

function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });
    // ボタン制御のため追加
    const [isSubmit, setIsSubmit] = useState(false); // 送信中か？
    const [buttonText, setButtonText] = useState("問合せる"); // ボタンのテキスト表示変更用

    // 問合せクリック時（formサブミット時）
    const _onSubmit = async (data) => {

        // 状態変更
        setIsSubmit(true);
        setButtonText("送信中・・・")

        // sleep
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // alert(`title=${data.title}, email=${data.email}, message=${data.message}`);

        // APIのURL
        const api_url = "http://localhost:3000/contacts";

        try {

            const result = await fetch(api_url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: data.title,
                    email: data.email,
                    message: data.message
                })
            });

            const json = await result.json();
            alert(json.message);

        } catch (error) {
            alert(error.message);
        }

        reset();

        // 状態戻し
        setButtonText("問合せる");
        setIsSubmit(false);
    }

    return (
        <main>
            <Hero
                headline='お問合せフォーム'
                catchcopy='お気軽にお問合せ下さい。'
                height='120px'
            />
            <section className={styles.formContainer}>
                <form className={styles.contactForm} onSubmit={handleSubmit(_onSubmit)}>

                    <label htmlFor='title'>お問合せタイトル</label>
                    <input type='text' id='title' {...register("title", {
                        required: "お問合せタイトルは必須です。",
                        maxLength: {
                            value: 10,
                            message: "10文字以内で入力して下さい。"
                        }
                    })} />
                    {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' {...register("email", {
                        required: "Emailは必須です。",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Emailを正しい形式で入力して下さい。"
                        }
                    })} />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                    <label htmlFor='message'>お問合せ内容</label>
                    <textarea id='message' rows={5} {...register("message", {
                        required: "お問合せ内容は必須です。",
                        maxLength: {
                            value: 20,
                            message: "20文字以内で入力して下さい。"
                        }
                    })}></textarea>
                    {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}

                    <button type='submit' id='button' disabled={isSubmit}>{buttonText}</button>

                </form>
            </section>
        </main>
    );
}

export default Contact;