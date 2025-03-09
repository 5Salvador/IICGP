import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

export default function CarouselRatio({ events }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        py: 1,
        overflowX: 'auto', // Enable horizontal scrolling
        scrollSnapType: 'x mandatory', // Smooth snapping effect
        scrollBehavior: 'smooth', // Enables smooth scrolling
        WebkitOverflowScrolling: 'touch', // Improves scrolling on iOS devices
        width: '100%', // Makes it responsive
        whiteSpace: 'nowrap', // Prevents items from wrapping
        '&::-webkit-scrollbar': { display: 'none' }, // Hides scrollbar in WebKit browsers
      }}
    >
      {events.map((item, index) => (
        <Card
          key={index}
          orientation="horizontal"
          size="md"
          variant="outlined"
          sx={{
            minWidth: '350px', // Ensures the card takes proper space
            scrollSnapAlign: 'center', // Ensures smooth scrolling stop
            flexShrink: 0, // Prevents items from shrinking
          }}
        >
          <AspectRatio ratio="1" sx={{ minWidth: 340 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          {/* <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="h3">{item.title}</Typography>
            <Typography level="body-md">{item.description}</Typography>
          </Box> */}
        </Card>
      ))}
    </Box>
  );
}
