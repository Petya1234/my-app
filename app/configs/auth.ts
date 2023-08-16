import Credentials from "next-auth/providers/credentials";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebaseApp";
import type { AuthOptions } from "next-auth";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const querySnapshot = await getDocs(collection(db, "/users"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`); 
        });
        return null;
      },
    }),
  ],
};
