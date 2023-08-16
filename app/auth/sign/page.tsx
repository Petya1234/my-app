"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { FormEventHandler} from "react";


export default function Signin() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

  };
  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul className={styles.ulClass}>
          <div className={styles.signInTranscription}>
            <p>Вход</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.signInput}>
              <input
                type="email"
                className={styles.text}
                placeholder="Email"
                name="email"
                required
              ></input>
            </div>
            <div className={styles.signInput}>
              <input
                type="password"
                className={styles.text}
                placeholder="Password"
                name="password"
                required
              ></input>
            </div>
            <div className={styles.signButtonDiv}>
              <button type="submit" className={styles.signButton}>
                Войти
              </button>
            </div>
            <div id="1" className={styles.errorAlert}>
              {" "}
              <p>Неверный пароль</p>
            </div>
            <div id="2" className={styles.errorAlert}>
              {" "}
              <p>Email не зарегестрирован</p>
            </div>
          </form>
          <div className={styles.signRegisterLink}>
            <Link className={styles.signLinkClass} href={"/auth/registration"}>
              Нет аккаунта?
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
