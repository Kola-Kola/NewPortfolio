import { format } from 'date-fns'
import styled from 'styled-components'
import ArticleIcon from '@mui/icons-material/Article';
import * as React from "react";

const PostContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
  width: 100%;
`

const InformationsContainer = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
`

const Row80 = styled.div`
  width: 80%;
`

const Row20 = styled.div`
  width: 20%;
`

const Post = ({item}: any) => {
  return (
    <a href={`/articles/${item.slug}`}>
        <PostContainer>
          <InformationsContainer>
            <Row80>
              <span style={{ marginRight: 10 }}>
                <ArticleIcon />
              </span>
              <span style={{ marginRight: 5 }}>
                { item.title }
              </span>
            </Row80>
            <Row20>
              <span style={{ fontSize: 12 }}>publié le : {format(new Date(item.createdAt), 'dd-MM-yyyy')}</span>
            </Row20>
          </InformationsContainer>
        </PostContainer>
    </a>
  )
}

export default Post
