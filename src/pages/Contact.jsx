import styles from './Contact.module.css';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "onChange" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [buttonText, setButtonText] = useState("問合せる");

    const _onSubmit = async (data) => {

        //送信開始
        setIsSubmitting(true); //ボタンdisable
        setButtonText("送信中...");

        //ダミーウエイト（ボタンの変化を見るために挿入）
        await new Promise(resolve => setTimeout(resolve, 2000));

        // バリデーションがOKだったときの処理（バリデーション無しなら、そのまま実行）
        alert(`title=${data.title}, email=${data.email}, message=${data.message}`);

        //送信完了
        reset();
        setButtonText("問合せる");
        setIsSubmitting(false);
    };

    return (
        <main>
            <section className={styles.hero}>
                <h1>お問合せフォーム</h1>
                <p>お気軽にお問合せ下さい</p>
            </section>
            <section>
                <form className={styles.contactForm} onSubmit={handleSubmit(_onSubmit)}>
                    <label htmlFor='title'>お問合せタイトル</label>
                    <input type="text" id="title" {...register("title", {
                        required: "お問合せタイトルは必須です。",
                    })} />
                    {errors.title && <p className={styles.errorMessage}>{errors.title.message}</p>}

                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" {...register("email", {
                        required: "Emailは必須です。",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Emailを正しい形式で入力して下さい。",
                        },
                    })} />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                    <label htmlFor='message'>お問合せ内容</label>
                    <textarea id='message' rows={5} {...register("message", {
                        required: "お問合せ内容は必須です。",
                        maxLength: {
                            value: 10,
                            message: "内容は10文字以下で入力して下さい。",
                        }
                    })}></textarea>
                    {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}

                    <button type='buttton' id='button' disabled={isSubmitting}>{buttonText}</button>

                </form>
            </section>
        </main>
    );
}

export default Contact;