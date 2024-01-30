'use client'

import { Button, Grid, GridProps, Image, Modal } from 'antd-mobile'
import { LeftOutline, RightOutline } from 'antd-mobile-icons'
import { useState } from 'react'

export interface Copyright {
  name: string
  email?: string
  website: string
}

export interface imageProps {
  src: string
  title?: string
  caption?: string
  copyright?: Copyright
}

const Lightbox = ({
  images,
  gridProps = { columns: 1, gap: 'var(--adm-gap-sm)' },
  thumbnails = 1
}: {
  images: imageProps[],
  gridProps?: GridProps,
  thumbnails?: number
}) => {

  const len = images.length
  const maxed = thumbnails > len ? len : thumbnails

  const [imageIndex, setImageIndex] = useState(0)

  const openModal = () => {
    Modal.alert({
      className: 'lightbox-modal',
      title: images[imageIndex].title || null,
      content: 
        <>
          <Image
            src={images[imageIndex].src}
            width='100vw'
            height='100vh'
            alt='Photo of Cambridge Certificate'
            fit='contain'
          />
          {len > 1 &&
            <>
              {imageIndex > 0 &&
                <Button className='modal-prev' onClick={() => setImageIndex(imageIndex - 1)}>
                  <LeftOutline fontSize={24} />
                </Button>
              }
              {imageIndex < len - 1 &&
                <Button className='modal-next' onClick={() => setImageIndex(imageIndex + 1)}>
                  <RightOutline fontSize={24} />
                </Button>
              }
            </>
          }
        </>,
      showCloseButton: true,
      closeOnMaskClick: true
    })
    return
  }

  const grid = (
    <Grid {...gridProps}>
      {images.slice(0, maxed).map((image, imageIndex) => {
        return (
          <Grid.Item key={imageIndex}>
            <a 
              onClick={() => {
                setImageIndex(imageIndex)
                openModal()
              }}
            >
              <Image
                src={image.src}
                width='100%'
                height='auto'
                alt='Photo of Cambridge Certificate'
              />
            </a>
          </Grid.Item>
        )
      })}
    </Grid>
  )

  return (
    <div className='lightbox'>
      {grid}
    </div>
  )
}

export default Lightbox