import styles from './styles.module.css'
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function signIn() {
  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul className={styles.ulClass}>
        <div className={styles.signInTranscription}>
          <p>Вход</p>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="Email"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input
            className={styles.text}
            placeholder="Password"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signButtonDiv}><button className={styles.signButton}>Войти</button> </div>
        <div className={styles.signRegisterLink}>
          <Link className={styles.signLinkClass} href={'/auth/registration'}>Нет аккаунта?</Link>
        </div>
        </ul>
      </div>
    </div>
  );
}
