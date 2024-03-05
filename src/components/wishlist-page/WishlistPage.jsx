import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import { Box, Grid, Stack } from '@mui/material'
=======
import {
    Box,
    Button,
    Grid,
    IconButton,
    Pagination,
    Stack,
    Typography,
} from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import 'bootstrap/dist/css/bootstrap.min.css'

import { useWishListResDelete } from '../../hooks/react-query/config/wish-list/useWishListResDelete'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { removeWishListRes } from '../../redux/slices/wishList'

import WishListShimmer from './WishListShimmer'
=======
import {
    removeWishListFood,
    removeWishListRes,
} from '../../redux/slices/wishList'
import emptyFood from '../../../public/static/resturants.png'

import {
    WishlistGrid,
    IconButtonGrid,
    WishlistBox,
    ArrowButton,
} from './WishList.style'
import WishListShimmer from './WishListShimmer'
import WishlistCard from './WishlistCard'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import WishListRestaurantCard from './WishListRestaurantCard'
import { useTranslation } from 'react-i18next'
import FoodOrRestaurant from '../products-page/FoodOrRestaurant'
import CustomEmptyResult from '../empty-view/CustomEmptyResult'
<<<<<<< HEAD
import { CustomPaperBigCard, NoDataFoundWrapper } from '../../styled-components/CustomStyles.style'
=======
import { CustomPaperBigCard } from '../../styled-components/CustomStyles.style'
import ScrollerProvider from '../scroller-provider'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@emotion/react'
import Meta from '../Meta'
import { noFoodFoundImage, noRestaurantsImage } from '../../utils/LocalImages'
<<<<<<< HEAD
import FoodCard from '../food-card/FoodCard'
import { setFoodOrRestaurant } from "../../redux/slices/searchFilter";

const WishlistPage = () => {
    const { foodOrRestaurant } = useSelector((state) => state.searchFilterStore)
=======

const WishlistPage = () => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const theme = useTheme()
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const matches = useMediaQuery('(max-width:655px)')
<<<<<<< HEAD
    //const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
=======
    const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { wishLists } = useSelector((state) => state.wishList)

    const onSuccessHandlerForResDelete = (res) => {
        if (res) {
            dispatch(removeWishListRes(res))
        }
    }
    const { mutate: restaurantMutate } = useWishListResDelete(
        onSuccessHandlerForResDelete
    )
    const deleteWishlistRes = (id) => {
        restaurantMutate(id, {
            onSuccess: onSuccessHandlerForResDelete(id),
        })
    }

<<<<<<< HEAD
    useEffect(() => { }, [wishLists])
=======
    useEffect(() => {}, [wishLists])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <>
            {' '}
            <Meta
                title={` My Wish List-${global?.business_name}`}
                description=""
                keywords=""
            />
            <CustomPaperBigCard
<<<<<<< HEAD
                padding={isXSmall ? '10px 10px' : '30px 40px'}
                border={false}
                sx={{ minHeight: !isXSmall && '558px', boxShadow: isXSmall && 'unset' }}
=======
                padding={isXSmall ? '1rem' : '2rem'}
                sx={{ minHeight: '77vh' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            >
                <Box>
                    <FoodOrRestaurant
                        foodOrRestaurant={foodOrRestaurant}
                        setFoodOrRestaurant={setFoodOrRestaurant}
                    />
                    {wishLists ? (
                        <>
                            {foodOrRestaurant === 'products' && (
                                <>
<<<<<<< HEAD
=======
                                    <ScrollerProvider maxHeight="60vh">
                                        <Grid
                                            container
                                            item
                                            md={12}
                                            xs={12}
                                            spacing={2}
                                            sx={{ paddingBlockStart: '1rem' }}
                                        >
                                            {wishLists?.food?.map((product) => {
                                                return (
                                                    <Grid
                                                        item
                                                        md={6}
                                                        sm={matches ? 12 : 6}
                                                        xs={12}
                                                        key={product?.id}
                                                    >
                                                        <WishlistCard
                                                            product={product}
                                                            productImageUrl={
                                                                global
                                                                    ?.base_urls
                                                                    ?.product_image_url
                                                            }
                                                            // deleteWishlistItem={
                                                            //     deleteWishlistItem
                                                            // }
                                                        />
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </ScrollerProvider>
                                    {wishLists?.food?.length === 0 && (
                                        <CustomEmptyResult
                                            label={t('No Favourite Food Found')}
                                            image={noFoodFoundImage}
                                        />
                                    )}
                                </>
                            )}
                            {foodOrRestaurant === 'restaurants' && (
                                <ScrollerProvider maxHeight="60vh">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    <Grid
                                        container
                                        item
                                        md={12}
                                        xs={12}
                                        spacing={2}
                                        sx={{ paddingBlockStart: '1rem' }}
<<<<<<< HEAD
                                        justifyContent="center"
                                    >
                                        {wishLists?.food?.map((product) => {
                                            return (
                                                <Grid
                                                    item
                                                    md={6}
                                                    sm={matches ? 12 : 6}
                                                    xs={12}
                                                    key={product?.id}
                                                >
                                                    <FoodCard
                                                        product={product}
                                                        inWishListPage="true"
                                                        productImageUrl={
                                                            global?.base_urls?.product_image_url
                                                        }
                                                        horizontal="true"
                                                        hasBackGroundSection="true"
                                                    />
                                                </Grid>
                                            )
                                        })}
                                        {wishLists?.food?.length === 0 && (
                                            <Stack minHeight="30vh" pt={{ xs: "40px", md: "110px" }}>
                                                <CustomEmptyResult
                                                    label='No Favourite Food Found'
                                                    image={noFoodFoundImage}
                                                    height={160}
                                                    width={160}
                                                />
                                            </Stack>
                                        )}
                                    </Grid>
                                </>
                            )}
                            {foodOrRestaurant === 'restaurants' && (
                                <Grid
                                    container
                                    item
                                    md={12}
                                    xs={12}
                                    spacing={2}
                                    sx={{ paddingBlockStart: '1rem' }}
                                    justifyContent="center"
                                >
                                    {wishLists?.restaurant?.map(
                                        (restaurantItem) => {
                                            return (
                                                <Grid
                                                    item
                                                    md={6}
                                                    sm={6}
                                                    xs={12}
                                                >
                                                    <WishListRestaurantCard
                                                        key={
                                                            restaurantItem?.id
                                                        }
                                                        restaurant={
                                                            restaurantItem
                                                        }
                                                        deleteWishlistRes={
                                                            deleteWishlistRes
                                                        }
                                                        restaurantImageUrl={
                                                            global
                                                                ?.base_urls
                                                                ?.restaurant_image_url
                                                        }
                                                    />
                                                </Grid>
                                            )
                                        }
                                    )}
                                    {wishLists?.restaurant?.length ===
                                        0 && (
                                            <Stack minHeight="30vh" pt={{ xs: "60px", md: "110px" }}>
                                                <CustomEmptyResult
                                                    label='No Favourite Restaurant Found'
                                                    image={noRestaurantsImage}
                                                    height={120}
                                                    width={120}
                                                />
                                            </Stack>

                                        )}
                                </Grid>
=======
                                    >
                                        {wishLists?.restaurant?.map(
                                            (restaurantItem) => {
                                                return (
                                                    <Grid
                                                        item
                                                        md={6}
                                                        sm={6}
                                                        xs={12}
                                                    >
                                                        <WishListRestaurantCard
                                                            key={
                                                                restaurantItem?.id
                                                            }
                                                            restaurant={
                                                                restaurantItem
                                                            }
                                                            deleteWishlistRes={
                                                                deleteWishlistRes
                                                            }
                                                            restaurantImageUrl={
                                                                global
                                                                    ?.base_urls
                                                                    ?.restaurant_image_url
                                                            }
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                        {wishLists?.restaurant?.length ===
                                            0 && (
                                            <CustomEmptyResult
                                                label={t(
                                                    'No Favourite Restaurant Found'
                                                )}
                                                image={noRestaurantsImage}
                                            />
                                        )}
                                    </Grid>
                                </ScrollerProvider>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            )}
                        </>
                    ) : (
                        <WishListShimmer />
                    )}
<<<<<<< HEAD
=======

                    {/*<Box*/}
                    {/*    sx={{*/}
                    {/*        display: 'flex',*/}
                    {/*        justifyContent: 'center',*/}
                    {/*        padding: '30px 0px 70px 0px',*/}
                    {/*    }}*/}
                    {/*>*/}

                    {/*</Box>*/}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Box>
            </CustomPaperBigCard>
        </>
    )
}

export default WishlistPage
