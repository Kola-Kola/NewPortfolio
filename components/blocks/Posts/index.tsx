import Link from "next/link";
import {format} from 'date-fns'
import styled from 'styled-components'
import ArticleIcon from '@mui/icons-material/Article';
import * as React from "react";

const PostContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
`;

const InformationsContainer = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Post = ({item}: any) => {
  return (
    <Link href={`/articles/${item.slug}`}>
      <PostContainer>
        <InformationsContainer>
          <div style={{display: 'flex', width: '80%'}}>
            <span style={{marginRight: 10}}>
              <ArticleIcon/>
            </span>
            <span style={{ marginRight: 5 }}>
              {item.title} |
            </span>
          </div>
          <span style={{fontSize: 12}}>publié le : {format(new Date(item.createdAt), 'dd-MM-yyyy')}</span>
        </InformationsContainer>
      </PostContainer>
    </Link>
  )
};

export default Post
