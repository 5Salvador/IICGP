import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard({ img, eventTitle, firstDescription, secondDescription}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
       <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={img} loading="lazy" alt={eventTitle} />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          {eventTitle}
        </Typography>
        <Typography
          level="body-sm"
          aria-describedby="card-description"
          sx={{ mb: 1 }}
        >
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            {firstDescription}
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          {secondDescription}
        </Chip>
      </CardContent>
    </Card>
  );
}
