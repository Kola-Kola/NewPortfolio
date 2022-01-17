import styled from 'styled-components'
import styles from "../../styles/Home.module.css";
import PageLayout from "../../components/layouts/PageLayout";
import {createClient} from "contentful";
import Heading from "../../components/blocks/Heading";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MiddleUnderlineText from "../../styles/middleUnderlineText";
import richTextConfig from "../../components/configs/richTextContentFulConfig";
import { format } from 'date-fns'
import * as React from "react";

const Row = styled.section`
  max-width: 800px;
  margin: 50px auto;
`

const RowInformations = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
`

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export const getStaticProps = async ({ params }: any) => {
  const { slug } = params

  const client = createClient({
    space: process.env.SPACE_ID_CONTENTFUL || '',
    accessToken: process.env.TOKEN_CONTENTFUL || '',
  })

  const posts = await client.getEntries('blogPost')
  const post = posts.items.find(item => {
    const fields: any = item.fields
    if (slug.includes(fields.slug)) {
      return item
    }
  })

  return {
    props: {
      post: post || {}
    },
  }
};

const Post = ({ post }: any) => {
  const fields = post?.fields

  if (fields) {
    return (
      <div className={styles.container} style={{ height: 'auto' }}>
        <PageLayout>
          <Row>
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', width: '100%' }}>
              <Heading title={fields.title} size="large" />
              <MiddleUnderlineText />
            </div>
            <RowInformations>
              Publié le : { format(new Date(fields.createdAt), 'dd/MM/yyy') } Par : { fields.author }
            </RowInformations>
            <div>
              {documentToReactComponents(fields.content, richTextConfig)}
            </div>
          </Row>
        </PageLayout>
      </div>
    )
  }

  return null
}

export default Post
