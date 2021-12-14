import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Internal Communications Producer</title>
        <meta property="og:title" content="Internal Communications Producer" />
      </Helmet>
    </div>
  )
}

export default Home
