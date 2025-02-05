import React from 'react'
import HostelCard from './host/HostelCard'
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material';  // Importing the Grid component for layout

const Userwishlist = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen mb-5 w-full'>
      <div>
        <h1 className='text-5xl text-gray-900 p-2 m-5'>Wishlists</h1>
      </div>

      {/* Using Grid system for responsiveness */}
      <Grid container spacing={4} sx={{ padding: '0 30px' }}>
        {/* Grid item will take up 3 columns on larger screens and 12 columns on smaller screens */}
        {[...Array(8)].map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card onClick={() => navigate('/')} variant="outlined border-4 border-gray-200 " sx={{ cursor: "pointer" }}>
              <div>
                <Typography level="h2" sx={{ fontSize: 'md', mb: 0.5 }}>
                  <Skeleton>Yosemite National Park</Skeleton>
                </Typography>
                <Typography level="body-sm">
                  <Skeleton>April 24 to May 02, 2021</Skeleton>
                </Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                >
                  <BookmarkAdd />
                  <Skeleton />
                </IconButton>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <Skeleton>
                  <img
                    src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </Skeleton>
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">
                    <Skeleton>Total price:</Skeleton>
                  </Typography>
                  <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                    <Skeleton>$2,900</Skeleton>
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                >
                  Explore
                  <Skeleton />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Userwishlist
