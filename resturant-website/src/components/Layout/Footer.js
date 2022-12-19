import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:2}}>
        <Box sx = {{my:3, "& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2
        }, "& svg:hover":{
            color:'goldenrod',
            transform:'translate(5px)',
            transition:"all 400ms"

        }
        }}>
            <InstagramIcon />
            <GitHubIcon />
            <TwitterIcon />
            <YouTubeIcon />
        </Box>
        <Typography variant='h6'>
            All Rights Reserved &copy; arpana luckk
        </Typography>
    </Box>   
    </>
  )
}

export default Footer