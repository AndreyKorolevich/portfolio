import React, { useState } from 'react'
import styles from './Price.module.scss'
import { PriceComponent, PriceItemComponent } from './types'
import SectionHeader from '../SectionHeader/SectionHeader'
import { Button, Card } from '@mui/material'
import { PRICES } from 'src/constants/personalInfo'
import { CheckIcon, CloseIcon } from '../../Custom/Icons'
import CountUp from 'react-countup'
import { useNavigate } from 'react-router-dom'

export const Price: PriceComponent = () => {
  const prices = PRICES.map((price) => <PriceItem key={price.title} {...price} />)
  return (
    <section className={styles.price}>
      <SectionHeader
        title={'Price Plan'}
        introduction={
          'This is the typical base pay range for this role across the U.S. ' +
          'This range may vary to specific work locations, like San Francisco ' +
          'area or New York area. And also it depends on specifics, types, and models of work.'
        }
      />
      <main>
        <ul className={styles.list}>{prices}</ul>
      </main>
    </section>
  )
}

const PriceItem: PriceItemComponent = ({ title, description, price, isPopular, duties }) => {
  const [isCardHover, setIsCardHover] = useState(false)
  const navigate = useNavigate()

  const toggleIsCardHover = (value: boolean) => () => {
    setIsCardHover(value)
  }

  const handleRedirect = () => {
    navigate('/contact')
  }

  const dutiesList = duties.map((duty) => {
    return (
      <li className={styles.duty} key={duty.name}>
        {duty.isRequired ? (
          <CheckIcon className={styles.check} />
        ) : (
          <CloseIcon className={styles.close} />
        )}
        <p className={duty.isRequired ? styles.active : undefined}>{duty.name}</p>
      </li>
    )
  })
  return (
    <li className={styles.item}>
      <Card
        className={styles.card}
        elevation={isCardHover ? 2 : 0}
        onMouseEnter={toggleIsCardHover(true)}
        onMouseLeave={toggleIsCardHover(false)}
      >
        <header className={styles.header}>
          {isPopular && <span className={styles.popular}>Most Popular</span>}
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.charge}>
            <h2 className={styles.numbers}>
              <strong>
                $<CountUp end={price} duration={3} scrollSpyDelay={300} enableScrollSpy scrollSpyOnce />
                .00
              </strong>
            </h2>
            <span className={styles.hour}>/Hour</span>
          </div>
          <p className={styles.description}>{description}</p>
        </header>
        <main className={styles.main}>
          <ul>{dutiesList}</ul>
        </main>
        <footer className={styles.footer}>
          <Button
            className={styles.order}
            variant='contained'
            onClick={handleRedirect}
            color={isPopular ? 'primary' : 'secondary'}
          >
            Order now
          </Button>
        </footer>
      </Card>
    </li>
  )
}

export default Price
