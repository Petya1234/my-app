import styles from './styles.module.css'
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function signUp() {
  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul className={styles.ulClass}>
        <div className={styles.signInTranscription}>
          <p>Регистрация</p>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="Name"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="email"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="password"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="password again"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signButtonDiv}><button className={styles.signButton}>Зарегистрироваться</button> </div>
        <div className={styles.signRegisterLink}>
          <Link className={styles.signLinkClass} href={'/'}>На главную</Link>
        </div>
        </ul>
      </div>
    </div>
  );
}