import styles from "../../styles/Home.module.css";
import Head from "next/head";
import * as React from "react";
import Link from "next/link";
import Heading from "../blocks/Heading";
import Menu from "../blocks/Menu";
import {Menu as ConfigMenu} from "../configs/menu";
import styled from "styled-components";

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

const PageLayout = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan IBOR | ${props.page ?? ''}</title>
        <meta name="description" content="Jonathan IBOR | Développeur front-end | Expert React.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <script src="https://www.cognitoforms.com/f/iframe.js" />
      </Head>
      <NavContainer>
        <div style={{ cursor: 'pointer' }}>
          <Link href="/">
            <a>
              <Heading title="💻 Jonathan IBOR | Accueil" size="medium" />
            </a>
          </Link>
        </div>
        <nav>
          <Menu configs={ConfigMenu} />
        </nav>
      </NavContainer>
      { props.children }
    </div>
  )
}

export default PageLayout
