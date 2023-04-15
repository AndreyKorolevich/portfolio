import { Button } from '@mui/material'
import React from 'react'
import { BannerComponent } from './types'
import styles from './Banner.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Banner: BannerComponent = () => {
  return (
    <article className={styles.banner}>
      <h1>I`m Andrei Karalevich</h1>
      <h1>
        <strong className={styles.strong}>Front-end</strong> Engineer
      </h1>
      <main className={styles.message}>I have 3 years of experience in Software engineering and creating distinctive user
        interfaces for advanced digital companies.
      </main>
      <Button className={styles.button} variant="contained" endIcon={<ArrowForwardIcon className={styles.arrow} />}>Hire me</Button>
    </article>
  )
}

export default Banner