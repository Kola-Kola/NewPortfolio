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
  align-items: center;
`

const PageLayout = (props: any) => {
  return (
    <>
      <Head>
        <script async id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/fd3dc1f775da2ee6a6b6e2d7/script.js"/>
        <title>Jonathan IBOR | {props.page ?? ''}</title>
        <meta name="title" content="Jonathan IBOR | Accueil"/>
        <meta name="description" content="Jonathan IBOR | Développeur front-end | Expert React.js"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://portfolio-psi-steel-88.vercel.app/"/>
        <meta property="og:title" content="Jonathan IBOR | Accueil"/>
        <meta property="og:description" content="Jonathan IBOR | Développeur front-end | Expert React.js"/>
        <meta property="og:image" content=""/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://portfolio-psi-steel-88.vercel.app/"/>
        <meta property="twitter:title" content="Jonathan IBOR | Accueil"/>
        <meta property="twitter:description" content="Jonathan IBOR | Développeur front-end | Expert React.js"/>
        <meta property="twitter:image" content=""/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oxygen:wght@300;400;700&display=swap"
          rel="stylesheet"/>
      </Head>
      <NavContainer>
        <div style={{cursor: 'pointer'}}>
          <Link href="/">
            <a>
              <Heading title="Jonathan IBOR | Accueil" size="medium"/>
            </a>
          </Link>
        </div>
        <nav>
          <Menu configs={ConfigMenu}/>
        </nav>
      </NavContainer>
      {props.children}
    </>
  )
}

export default PageLayout
