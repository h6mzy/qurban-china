'use client'

import styles from './video.module.sass'

const Video = ({
  iframe,
  aspectRatio = [16, 9]
}: {
  iframe: string,
  aspectRatio?: [number, number]
}) => {

  const [w, h] = aspectRatio
  const paddingBottom = `${(h/w*100).toFixed(2)}%`

  return (
    <div
      className={styles.video}
      style={{ paddingBottom }}
      dangerouslySetInnerHTML={{ __html: iframe }}
    />
  )
}

export default Video