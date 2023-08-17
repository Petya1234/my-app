export async function sendText(data: {email:string, name:string, text:string}) {
  const res = await fetch('/api/sendler', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

