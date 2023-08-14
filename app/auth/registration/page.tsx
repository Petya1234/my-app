'use client'
import styles from './styles.module.css'
import Link from "next/link";
import { FormEventHandler } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {initFirebase} from '@/app/firebase/firebaseApp'

export default function signUp() {
  initFirebase();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string; 
    const password = formData.get('password') as string
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  
  return (
    <div className={styles.signContainer}>
      <div className={styles.signBox}>
        <ul className={styles.ulClass}>
        <div className={styles.signInTranscription}>
          <p>Регистрация</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className={styles.signInput}>
          <input type='email'
            className={styles.text}
            placeholder="Email"
            name="email"
            required
          ></input>
        </div>
        <div className={styles.signInput}>
          <input type='password'
            className={styles.text}
            placeholder="Password"
            name="password"
            required
          ></input>
        </div>
        <div className={styles.signButtonDiv}><button type='submit' className={styles.signButton}>Зарегистрироваться</button> </div>
        </form>
        <div className={styles.signRegisterLink}>
          <Link className={styles.signLinkClass} href={'/'}>На главную</Link>
        </div>
        </ul>
      </div>
    </div>
  );
}