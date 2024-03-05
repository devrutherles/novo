import { Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CustomImageContainer from '../CustomImageContainer'
import { CustomColouredPaper, FeatureImageBox } from './FeaturedCategory.style'
import Router, { useRouter } from 'next/router'
import { Box } from '@mui/system'

const FeaturedCategoryCard = ({
    categoryImage,
    name,
    id,
    categoryImageUrl,
<<<<<<< HEAD
    height, categoryIsSticky
}) => {
    const theme = useTheme()
    const router = useRouter()
    const isXSmall = useMediaQuery(theme.breakpoints.down('md'))
=======
    height,
}) => {
    const theme = useTheme()
    const router = useRouter()
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const image = `${categoryImageUrl}/${categoryImage}`
    const handleClick = () => {
        Router.push(
            {
                pathname: `/category/${id}`,
                query: { name: name },
            },
            undefined,
            { shallow: true }
        )
    }
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <Grid item sx={{ overflow: 'hidden' }} onClick={handleClick}>
            <FeatureImageBox
                justifyContent="center"
                alignItems="center"
<<<<<<< HEAD
                spacing={{ xs: .5, md: 1 }}

            >
                <Box
                    sx={{
                        height: { xs: "55px", md: categoryIsSticky ? "50px" : "100px" },
                        display: "flex",
                        width: { xs: "55px", md: categoryIsSticky ? "50px" : "100px" },
                        border: "1px solid",
                        borderColor: theme => theme.palette.neutral[200],
                        borderRadius: "32px",
                        transition: `all ease 0.5s`,
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                        animation: 'fadeInRight 2s  1'
=======
                spacing={1}
            >
                <Box
                    sx={{
                        transition: `${theme.transitions.create(
                            ['background-color', 'transform'],
                            {
                                duration: theme.transitions.duration.standard,
                            }
                        )}`,
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    }}
                >
                    <CustomImageContainer
                        src={image}
                        alt={name}
<<<<<<< HEAD
                        height="100%"
                        width="100%"
                        objectFit="cover"
                        smMb="5px"
                        smHeight="100%"
                        smMaxWidth="55px"
                        cursor="pointer"
                        borderRadius={router.pathname === "/categories" && isXSmall  ? "16px":"32px" }
=======
                        height="120px"
                        maxWidth="120px"
                        width="100%"
                        borderRadius="50%"
                        objectFit="contained"
                        smMb="5px"
                        smHeight="50px "
                        smMaxWidth="50px"
                        cursor="pointer"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    />
                </Box>
                <Typography
                    sx={{
<<<<<<< HEAD
                        color: (theme) => theme.palette.neutral[1200],
=======
                        color: (theme) => theme.palette.neutral[900],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                    }}
<<<<<<< HEAD
                    fontSize={{ xs: '13px', sm: '14px', md: "14px" }}
                    fontWeight="400"
=======
                    fontSize={{ xs: '13px', sm: '14px', md: '16px' }}
                    fontWeight="500"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                >
                    {name}
                </Typography>
            </FeatureImageBox>
        </Grid>
    )
}

export default FeaturedCategoryCard
