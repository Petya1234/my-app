import Image from 'next/image';
import imgSrc from '../public/photos/1photo.jpg';
import '@/app/main-content-styles.css'

export default function Home() {
  return (
    <div>
      <Image className='main-img' src={imgSrc} alt="" role="presentation" />
    </div>
  )
}