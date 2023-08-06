import '@/app/contacts/styles.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
};
export default function Team () {
    return (
      <div className='box'>
        <div>
          <p>Our team 1</p>
        </div>
      </div>
    )
  }