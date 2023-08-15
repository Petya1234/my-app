"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { FormEventHandler } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initFirebase } from "@/app/firebase/firebaseApp";
import { useRouter } from 'next/navigation'

export default function signUp() {
  initFirebase();
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push('/auth/sign')
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
          const el = document.getElementById('2') as HTMLElement
          el.style.display = (el.style.display == 'none') ? '' : 'block'
        }  
        else if (errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
          const el = document.getElementById('1') as HTMLElement
          el.style.display = (el.style.display == 'none') ? '' : 'block'
        }
        console.log(errorMessage)
      });
  };

  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul className={styles.ulClass}>
          <div className={styles.signInTranscription}>
            <p>Регистрация</p>
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
                  Зарегистрироваться
                </button>
            </div>
            <div id='1' className={styles.errorAlert}> <p>Email уже зарегестрирован</p></div>
            <div id='2' className={styles.errorAlert}> <p>Пароль должен быть длиннее 6 символов</p></div>
          </form>
          <div className={styles.signRegisterLink}>
            <Link className={styles.signLinkClass} href={"/"}>
              На главную
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
