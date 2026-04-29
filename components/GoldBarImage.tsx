import Image from 'next/image'
import styles from './GoldBarImage.module.css'

export default function GoldBarImage() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/images/goldbar.png"
        alt="Goldbarren Goldankauf Schaffhausen"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
      <div className={styles.fadeTop} />
      <div className={styles.fadeSides} />
    </div>
  )
}
