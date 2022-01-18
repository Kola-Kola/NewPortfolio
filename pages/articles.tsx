import PageLayout from "../components/layouts/PageLayout";
import styled from 'styled-components'
import styles from "../styles/Home.module.css";
import {createClient} from "contentful";
import Post from "../components/blocks/Posts";
import * as React from "react";
import MiddleUnderlineText from "../styles/middleUnderlineText";
import Heading from "../components/blocks/Heading";

const Row = styled.div`
  max-width: 800px;
  margin: 50px auto;
`

const PostsRowContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 30px;
`

export const getStaticProps = async () => {
  if (!process.env.SPACE_ID_CONTENTFUL && !process.env.TOKEN_CONTENTFUL) {
    return {}
  }

  const client = createClient({
    space: process.env.SPACE_ID_CONTENTFUL || '',
    accessToken: process.env.TOKEN_CONTENTFUL || '',
  })

  const posts = await client.getEntries('blogPost')

  return {
    props: {
      posts: posts.items
    },
  }
};

const Articles = ({ posts }: any) => {
  return (
    <div className={styles.container}>
      <PageLayout>
        <Row>
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', width: '100%'}}>
            <Heading title="Les derniers articles" size="medium"/>
            <MiddleUnderlineText/>
          </div>
          <PostsRowContainer>
            {posts?.length === 0 ? <div>Coming soon...</div> : posts.map((item: any, i: number) => i <= 3 ? <Post key={i} item={item.fields} i={i}/> : null)}
          </PostsRowContainer>
        </Row>
      </PageLayout>
    </div>
  )
}

export default Articles
