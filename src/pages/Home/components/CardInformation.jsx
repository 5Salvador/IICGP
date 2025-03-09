import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({img, programName, description, secondDescription}) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={img}
        title="images card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {programName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
       <div className='rounded-md bg-yellow-700'>
       <Button size="small" sx={{ color: 'white'}} >{secondDescription}</Button>
       </div>
      </CardActions>
    </Card>
  );
}
