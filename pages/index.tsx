import * as React from 'react';
import type { NextPage } from 'next';
import PageLayout from "../components/layouts/PageLayout";
import Heading from '../components/blocks/Heading';
import Menu from '../components/blocks/Menu';

import styled from 'styled-components'
import styles from '../styles/Home.module.css'

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

const SocialMenuConfigs = [
  { path: 'https://www.linkedin.com/in/jonathan-ibor-ab4607127/', label: 'Linkedin' },
  { path: 'https://github.com/Kola-Kola', label: 'Github' }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PageLayout page="Portfolio">
        <main>
          <ContentContainer>
            <div>
              <Heading
                title="Hello ✋🏼"
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
                openInNewWindow={true}
              />
            </SocialContainer>
          </ContentContainer>
        </main>
      </PageLayout>
    </div>
  )
}

export default Home
