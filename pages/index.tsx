import * as React from "react";
import {createClient} from "contentful";
import Post from '../components/blocks/Posts';
import styles from "../styles/Home.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Heading from "../components/blocks/Heading";
import styled from "styled-components";
import PageLayout from "../components/layouts/PageLayout";

const LastPostsContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  margin: 50px auto;
  max-width: 800px;
`

const PostsRowContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 30px;
`

const AboutMeContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 800px;
  margin: 50px auto;
`

const MiddleUnderlineText = styled.div`
  width: 80px;
  height: 2px;
  border-radius: 5px;
  background: #d5c5c8;
  margin-top: 5px;
`

const TextContainer = styled.p`
  margin-top: 30px;
  max-width: 800px;
  line-height: 20px;
`

const List = styled.li`
  list-style: circle;
`

export const getStaticProps = async () => {
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

const Blog = ({posts}: any) => {
  return (
    <div className={styles.container}>
      <PageLayout>
        <AboutMeContainer>
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
            <Heading title="A propos de moi" size="medium"/>
            <MiddleUnderlineText/>
          </div>
          <TextContainer>
            Je suis développeur front-end, Français, vivant en région parisienne, je travail en ce moment pour BLIINK
            (Startup AdTech),
            vous pouvez aussi me trouvez ici : <a href="#"><GitHubIcon fontSize="small"/></a>, <a href="#"><LinkedInIcon
            fontSize="small"/></a>.
          </TextContainer>
          <TextContainer>
            Sur cette page, vous trouverez des informations a propos de moi ainsi que des articles de blogs que j&apos;ai
            écris.
            Tout les articles publiés sur ce blog sont des sujets du moment qui m&apos;intéresse comme des sujets de
            développement informatique comme JavaScript ou NodeJS.
          </TextContainer>
          <TextContainer>
            <span>Pour résumer : </span>
            <ul>
              <List>Diplômé de <a href="https://www.hetic.net/">HETIC</a> en 2019 (Concepteur développeur de solution
                digitales)</List>
              <List>Passionné de développement front-end</List>
              <List>J&apos;aime pratiquer le fitness </List>
              <List>Curieux à propos de la caféologie</List>
              <List>Actuellement développeur React chez <a href="https://bliink.io">BLIINK</a> </List>
            </ul>
          </TextContainer>
        </AboutMeContainer>
        <LastPostsContainer>
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', width: '100%'}}>
            <Heading title="Les derniers articles" size="medium"/>
            <MiddleUnderlineText/>
          </div>
          <PostsRowContainer>
            {posts.length === 0 ? <div>Coming soon...</div> : posts.map((item: any, i: number) => i <= 3 ? <Post key={i} item={item.fields} i={i}/> : null)}
          </PostsRowContainer>
        </LastPostsContainer>
      </PageLayout>
    </div>
  )
}

export default Blog
