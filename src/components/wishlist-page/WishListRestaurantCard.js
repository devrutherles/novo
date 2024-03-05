<<<<<<< HEAD
import React, { useState } from 'react'
import { Grid, IconButton, Typography, Stack } from '@mui/material'
import Link from 'next/link'
import {
    IconButtonGrid,
    WishlistBox,
} from './WishList.style'
import StarIcon from '@mui/icons-material/Star'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomImageContainer from "../CustomImageContainer";
import CustomPopover from '../custom-popover/CustomPopover'
import WishListImage from '../../assets/images/WishListImage'
import CustomPopoverWithItem from '../custom-popover/CustomPopoverWithItem'
import DeleteIcon from '../../assets/images/icons/DeleteIcon'
=======
import React from 'react'
import { Box, Button, Grid, IconButton, Typography, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link'
import {
    WishlistGrid,
    IconButtonGrid,
    WishlistBox,
    ArrowButton,
    CatagoriName,
} from './WishList.style'
import StarIcon from '@mui/icons-material/Star'
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomImageContainer from "../CustomImageContainer";
import CustomDialogConfirm from "../custom-dialog/confirm/CustomDialogConfirm";
import {t} from "i18next";
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const WishListRestaurantCard = ({
    restaurantImageUrl,
    restaurant,
    deleteWishlistRes,
}) => {
    const theme = useTheme()
<<<<<<< HEAD
    const [anchorEl, setAnchorEl] = useState(null);
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { name, cover_photo, logo, id, rating, address } = restaurant
    const imageUrl = `${restaurantImageUrl}/${logo}`
    const handleClick = () => {
        deleteWishlistRes(id)
    }
    const handleClickDelete = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
=======
    const [openModal, setOpenModal] = React.useState(false)
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { name, cover_photo, logo, id, rating, address } = restaurant
    const imageUrl = `${restaurantImageUrl}/${logo}`
    const handleClick=()=>{
        deleteWishlistRes(id)
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <WishlistBox sx={{ cursor: 'pointer' }}>
            <Grid container md={12} xs={12} spacing={{ xs: 1 }}>
                <Link href={`/restaurant/${id}`} passHref>
<<<<<<< HEAD
                    <Grid item md={4} sm={4} xs={4}>
                        <CustomImageContainer src={imageUrl} alt={name} maxWidth="120px" smMaxWidth="80px" height="120px" smHeight="80px" objectFit="contained" borderRadius=".7rem" smWidth="80px" />
=======
                    <Grid item md={4} sm={ 4}xs={4}>
                        {/* <Typography>Veg</Typography> */}
                        <CustomImageContainer src={imageUrl}  alt={name} maxWidth="120px" smMaxWidth="80px" height= "120px" smHeight="80px" objectFit="contained" borderRadius=".7rem" smWidth="80px"/>
                        {/*<img src={imageUrl} alt={name}  className="PopularRes_img"/>*/}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    </Grid>
                </Link>
                <Grid item md={7} sm={6} xs={6} alignSelf="center">
                    <Stack padding=".6rem">
<<<<<<< HEAD
                        <Typography variant={isXSmall ? "h6" : "h5"}>{name}</Typography>
                        <Typography sx={{
                            fontSize: '14px', color: '#9B9B9B',
=======
                        <Typography variant={isXSmall?"h6":"h5"}>{name}</Typography>
                        <Typography sx={{ fontSize: '14px', color: '#9B9B9B',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '1',
<<<<<<< HEAD
                            WebkitBoxOrient: 'vertical'
                        }}>
                            {address}
                        </Typography>
                        <Typography>
                            {rating ? rating : "0"}
=======
                            WebkitBoxOrient: 'vertical'}}>
                            {address}
                        </Typography>
                        <Typography>
                            {rating? rating :"0"}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <StarIcon sx={{ width: '16px', color: 'orange' }} />
                        </Typography>
                    </Stack>
                </Grid>
                <IconButtonGrid item md={1} xs={2} >
<<<<<<< HEAD
                    <IconButton onClick={handleClickDelete} sx={{ height: "50px" }}>
                        <DeleteIcon />
                    </IconButton>
                </IconButtonGrid>
            </Grid>
            <CustomPopover
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                maxWidth="421px"
                padding="20px 35px 25px"
            >
                <CustomPopoverWithItem
                    icon={<WishListImage />}
                    deleteItem={handleClick}
                    handleClose={handleClose}
                    confirmButtonText="Yes , Remove"
                    cancelButtonText="Cancel"
                    title="Remove this restaurant"
                    subTitle="Are you sure you want to  delete this item?"
                />

            </CustomPopover>
=======
                    <IconButton onClick={() => setOpenModal(true)} sx={{height:"50px"}}>
                        <DeleteIcon sx={{ color: theme=>theme.palette.error.main }} />
                    </IconButton>
                </IconButtonGrid>
            </Grid>
            <CustomDialogConfirm
                dialogTexts={t("Are you sure you want to  delete this item?")}
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleClick}
            />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </WishlistBox>
    )
}

export default WishListRestaurantCard
