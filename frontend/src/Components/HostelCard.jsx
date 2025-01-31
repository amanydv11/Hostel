import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import {FaStar} from 'react-icons/fa'
const HostelCard = () => {
  return (
    <div>
      <Card variant="outlined" sx={{ width: 350, cursor:"pointer" }}>
      <CardOverflow>
        <AspectRatio ratio="1.7">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
      <div className="">
        <Typography level="title-md">Yosemite National Park</Typography>
        <Typography level="body-sm">California</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', bottom: '4rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
        </div>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{fontSize:"15px"}}
          >
           ₹ 3125 / month
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md', }}
          > 
          <p className='flex text-[14px] items-center gap-2'>
          <FaStar/> 4.5
          </p>
           
          </Typography>
          
        </CardContent>
      </CardOverflow>
    </Card>
    </div>
  )
}
export default HostelCard
