import styles from "./styles.module.css";
import Link from "next/link";
import { FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import prisma from "@/app/lib/prisma";
import type { GetServerSideProps } from "next";


export default function Signup({props}: any) {
  // const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = 'имя'
    async function createUserWithProfile(data : any) {
      const { email, password, username} = data
      try {
        const user = await prisma.user.create({
          data: {
            email,
            password,
            username,
          }
        })
        return user
      } catch(e) {
        console.log('ошибка')
      }
    }
    createUserWithProfile({email,password,name})
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
            <div id="1" className={styles.errorAlert}>
              {" "}
              <p>Email уже зарегестрирован</p>
            </div>
            <div id="2" className={styles.errorAlert}>
              {" "}
              <p>Пароль должен быть длиннее 6 символов</p>
            </div>
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


export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: { users }
  };
};