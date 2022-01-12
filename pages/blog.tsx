import * as React from "react";
import Head from "next/head";
import {createClient} from "contentful";
import Post from '../components/blocks/Posts';
import styles from "../styles/Home.module.css";
import Heading from "../components/blocks/Heading";
import styled from "styled-components";
import Menu from "../components/blocks/Menu";
import Link from "next/link";

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PostsContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 50px;
`

const PostsRowContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 50px;
`

const MiddleUnderlineText = styled.div`
  width: 80px;
  height: 2px;
  border-radius: 5px;
  background: #d5c5c8;
  margin-top: 5px;
`

export const getStaticProps = async () => {
  const client = createClient({
    space: 'ikvl49z5xxvr',
    accessToken: 'sUprHShkmtvcGlbwkd4w7wQvQLehDtHBVVfkw5GrAyU',
  })

  const posts = await client.getEntries('blogPost')

  return {
    props: {
      posts: posts.items
    },
  }
};

const NavMenuConfigs = [
  { path: '/blog/articles', label: 'Articles' },
  { path: '/contact', label: 'Contact' }
]

const Blog = ({ posts }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan IBOR | Blog</title>
        <meta name="description" content="Jonathan IBOR | Développeur front-end | Expert React.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavContainer>
          <div style={{ cursor: 'pointer' }}>
            <Link href="/">
              <a>
                <Heading title="💻 Jonathan IBOR | Accueil" size="medium" />
              </a>
            </Link>
          </div>
          <nav>
            <Menu configs={NavMenuConfigs} />
          </nav>
        </NavContainer>
        <PostsContainer>
          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <Heading title="Les derniers articles" size="medium" />
            <MiddleUnderlineText />
          </div>
          <PostsRowContainer>
            { posts.map((item: any, i: number) => i <= 3 ? <Post key={i} item={item.fields} i={i}/> : null)}
          </PostsRowContainer>
        </PostsContainer>
      </main>
    </div>
  )
}

export default Blog
