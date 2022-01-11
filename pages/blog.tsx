import * as React from "react";
import Head from "next/head";
import Link from 'next/link'
import {createClient} from "contentful";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "../styles/Home.module.css";
import Heading from "../components/blocks/Heading";
import styled from "styled-components";

const WelcomeContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  height: 52px;
  cursor: pointer;
`

const PostsContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-top: 50px;
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
        <WelcomeContainer>
          <Link href="/blog">
            <div>
              <Heading title="Bienvenue dans le labs ✋🏼" size="medium" />
              <Heading title="Blog technique de ce qui me passionne au quotidien" size="small" />
            </div>
          </Link>
        </WelcomeContainer>
        <PostsContainer>
          { posts.map((item: any, i: number) => (
            <Link href={`/blog/${item.fields.slug}`}>
              <Paper
                elevation={8}
                square
                sx={{ background: '#11151c', marginRight: '15px' }}
                onClick={() => console.log('click')}
              >
                <Card
                  key={i}
                  sx={{
                    maxWidth: 345,
                    background: '#11151c',
                    height: '100%'
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.fields.cover.fields.file.url}
                      alt="green iguana"
                    />
                    <CardContent sx={{ color: 'white' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        { item.fields.title }
                      </Typography>
                      <Typography variant="body2" color="white">
                        { item.fields.shortDescription }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Paper>
            </Link>
          )) }
        </PostsContainer>
      </main>
    </div>
  )
}

export default Blog
