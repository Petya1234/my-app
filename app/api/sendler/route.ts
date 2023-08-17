import { NextResponse  } from "next/server"
import { transporter } from "@/configs/nodemailer"

export async function POST(req: Request) {
  const body = await req.json()
  let mailOptions = {
    from: body.name,
    to: 'alexeenkospam@gmail.com',
    subject: 'Proj message',
    text: body.text
  };
  await transporter.sendMail(mailOptions)
  return NextResponse.json({message: 'OK'})
}