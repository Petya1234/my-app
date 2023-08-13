import styles from './styles.module.css'
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign",
};

export default function Home() {
  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul>
        <div className={styles.signInTranscription}>
          <p>Вход</p>
        </div>
        <div className={styles.signInput}>
          <input
            type="text"
            placeholder="email"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input
            type="text"
            placeholder="password"
            name="uname"
            required
          ></input>
        </div>
        <div className={styles.signRegisterLink}>
          <Link className={styles.signLinkClass} href={''}>Нет аккаунта?</Link>
        </div>
        <div className={styles.signButtonDiv}><button className={styles.signButton}>Войти</button> </div>
        </ul>
      </div>
    </div>
  );
}
