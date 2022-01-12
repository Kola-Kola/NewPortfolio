import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

const Post = ({item, i}: any) => {
  return (
    <Link href={`/blog/articles/${item.slug}`}>
      <Paper
        elevation={8}
        square
        sx={{ background: '#11151c', marginRight: '30px' }}
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
              image={item.cover?.fields?.file?.url}
              alt="green iguana"
            />
            <CardContent sx={{ color: 'white' }}>
              <Typography gutterBottom variant="h5" component="div">
                { item.title }
              </Typography>
              <Typography variant="body2" color="white">
                { item.shortDescription }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Link>
  )
}

export default Post
