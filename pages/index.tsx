import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../components/blocks/Heading'
import Menu from '../components/blocks/Menu'

import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

const ContentContainer = styled.section`
  height: calc(100% - 72px);
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto;
`

const SocialContainer = styled.div`
  width: 100%;
  height: 50px;
`

const NavMenuConfigs = [
  { path: '#', label: 'Blog (Work In Progress)' },
  { path: '#', label: 'Contact' }
]

const SocialMenuConfigs = [
  { path: 'https://www.linkedin.com/in/jonathan-ibor-ab4607127/', label: 'Linkedin' },
  { path: 'https://github.com/Kola-Kola', label: 'Github' }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Jonathan IBOR | Développeur front-end | Expert React.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavContainer>
          <Heading title="💻 Jonathan IBOR" size="medium" />
          <nav>
            <Menu configs={NavMenuConfigs} />
          </nav>
        </NavContainer>
        <ContentContainer>
          <div>
            <Heading
              title=" Hello ✋🏼"
              size="large"
            />
            <Heading
              title="Développeur front-end | Expert React.JS | Web3.0"
              size="large"
              styles={{ fontSize: '62px' }}
            />
            <Heading
              title="Remote ❤️ | Mobile en région parisienne"
              size="medium"
              styles={{ fontSize: '40px' }}
            />
          </div>
          <SocialContainer>
            <Menu
              configs={SocialMenuConfigs}
              styleContainer={{ padding: 0 }}
              styleLink={{ fontSize: '30px' }}
            />
          </SocialContainer>
        </ContentContainer>
      </main>
    </div>
  )
}

export default Home
