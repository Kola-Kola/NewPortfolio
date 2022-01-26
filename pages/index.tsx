import * as React from "react";
import {createClient} from "contentful";
import dynamic from 'next/dynamic'
import styles from "../styles/Home.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from "styled-components";

const Post = dynamic(() => import('../components/blocks/Posts'));
const Heading = dynamic(() => import('../components/blocks/Heading'));
const PageLayout = dynamic(() => import('../components/layouts/PageLayout'));


const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LastPostsContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  margin: 50px auto;
  max-width: 800px;
`;

const PostsRowContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 30px;
  width: 100%;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 800px;
  margin: 50px auto;
`;

const MiddleUnderlineText = styled.div`
  width: 80px;
  height: 2px;
  border-radius: 5px;
  background: #d5c5c8;
  margin-top: 5px;
`;

const TextContainer = styled.p`
  margin-top: 30px;
  max-width: 800px;
  line-height: 20px;
`;

const TextContainerWithWidth = styled.div`
  margin-top: 30px;
  max-width: 800px;
  line-height: 20px;
  @media (max-width: 480px) {
    width: 100%;
  }
  width: 50%
`

const List = styled.li`
  list-style: circle;
`;

export const getStaticProps = async () => {
  if (!process.env.SPACE_ID_CONTENTFUL && !process.env.TOKEN_CONTENTFUL) {
    return {
      props: {
        posts: []
      }
    }
  }

  const client = createClient({
    space: process.env.SPACE_ID_CONTENTFUL || '',
    accessToken: process.env.TOKEN_CONTENTFUL || '',
  });

  const posts = await client.getEntries('blogPost');

  return {
    props: {
      posts: posts.items
    },
  }
};

const Blog = ({posts}: any) => {
  return (
    <div className={styles.container}>
      <PageLayout page="Accueil">
        <AboutMeContainer>
          <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
            <Heading title="A propos de moi" size="medium"/>
            <MiddleUnderlineText data-cy="MiddleUnderlineText"/>
          </div>
          <TextContainer data-cy="firstTextContainer">
            Je suis développeur front-end, Français, vivant en région parisienne, je travail pour BLIINK
            (Startup AdTech),
            vous pouvez aussi me trouvez ici : <a data-cy="github" target="_blank" rel="noreferrer" href="https://github.com/Kola-Kola"><GitHubIcon fontSize="small"/></a>, <a data-cy="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathan-ibor-ab4607127/"><LinkedInIcon
            fontSize="small"/></a>.
          </TextContainer>
          <TextContainer data-cy="secondTextContainer">
            Sur cette page, vous trouverez des informations a propos de moi ainsi que des articles de blogs que j&apos;ai
            écris.
            Tout les articles publiés sur ce blog sont des sujets du moment qui m&apos;intéresse comme des sujets de
            développement informatique comme JavaScript ou NodeJS.
          </TextContainer>
          <Row>
            <TextContainerWithWidth data-cy="firstSkillset">
              <span>Pour résumer : </span>
              <ul>
                <List>Diplômé de <a target="_blank" rel="noreferrer" href="https://www.hetic.net/">HETIC</a> en 2019 (Concepteur développeur de solution
                  digitales)</List>
                <List>Passionné de développement front-end</List>
                <List>J&apos;aime pratiquer le fitness </List>
                <List>Curieux à propos de la caféologie</List>
                <List>développeur React chez <a target="_blank" rel="noreferrer" href="https://bliink.io">BLIINK</a> </List>
              </ul>
            </TextContainerWithWidth>
            <TextContainerWithWidth data-cy="secondSkillset">
              <span>Technos / Librairies 💪</span>
              <ul>
                <List>HTML 5 / CSS3 / SCSS / Styled-Component (CSS in JS)</List>
                <List>JavaScript / TypeScript</List>
                <List>React.js / Next.js / Redux / GraphQL / Rest</List>
                <List>Jest / Cypress / Enzyme / React-Testing-Library</List>
                <List>Webpack / EsLint / Gulp / Git / Figma / Photoshop / NPM</List>
              </ul>
            </TextContainerWithWidth>
          </Row>
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
};

export default Blog
