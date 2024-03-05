import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { CardMedia, IconButton, Typography, useMediaQuery } from '@mui/material'
import { CustomCardMedia, CustomChip, OfferTypography, TypographyText } from './FoodCard.style'
=======
import { CardMedia, IconButton, Typography } from '@mui/material'
import { CustomCardMedia, OfferTypography } from './FoodCard.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { t } from 'i18next'
import CustomImageContainer from '../CustomImageContainer'
import { Box, Stack } from '@mui/system'
import { useSelector } from 'react-redux'
import { getAmount, isAvailable } from '../../utils/customFunctions'
<<<<<<< HEAD
import { CustomOverLay, CustomOverlayBox } from '../../styled-components/CustomStyles.style'
=======
import { CustomOverlayBox } from '../../styled-components/CustomStyles.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { useTheme } from '@mui/material/styles'
import test_image from '../../../public/static/testImage.svg'
import { CustomStackForFoodModal } from '../foodDetail-modal/FoodModalStyle'
import FoodRating from './FoodRating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
<<<<<<< HEAD
import QuickView from './QuickView'
import { useRouter } from "next/router";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const ProductCardMedia = (props) => {
    const {
        id,
<<<<<<< HEAD
        image,
        onClick,
        available_time_starts,
        available_time_ends,
        available_date_ends,
        imageUrl,
        alt,
        addToFavorite,
        isInList,
        deleteWishlistItem,
        handleBadge,
        product,
        isInCart,
        incrOpen,
        getQuantity,
        setIncrOpen,
        handleClickQuantityButton,
        addToCart,
        isTransformed,
        isRestaurantDetails,
        rating_count,
=======
        discount,
        image,
        height,
        name,
        discount_type,
        restaurant_discount,
        price,
        avg_rating,
        onClick,
        available_time_starts,
        available_time_ends,
        imageUrl,
        addToFavorite,
        isInList,
        deleteWishlistItem,
        available_date_ends,
        minFreeDelivery,
        maxFreeDelivery,
        freeDelivery,
        handleBadge,
        product,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    } = props
    const [languageDirection, setLanguageDirection] = useState('ltr')
    const { global } = useSelector((state) => state.globalSettings)
    const theme = useTheme()
<<<<<<< HEAD
    const router=useRouter()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    useEffect(() => {
        if (localStorage.getItem('direction')) {
            setLanguageDirection(localStorage.getItem('direction'))
        }
<<<<<<< HEAD
    }, []);
=======
    }, [])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <>
            {!image && (
                <Stack sx={{ overflow: 'hidden' }}>
                    <Box
                        onClick={onClick}
                        sx={{
                            position: 'relative',
<<<<<<< HEAD
                            maxHeight: '190px',
=======
                            maxHeight: '170px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                            [theme.breakpoints.down('sm')]: {
                                maxHeight: '140px',
                                // height:" 351px"
                            },
                        }}
                    >
<<<<<<< HEAD
                        {/* {!available_date_ends && (
=======
                        {!available_date_ends && (
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <Stack
                                position="absolute"
                                top="5%"
                                right="5%"
                                zIndex="99"
                            >
                                {!isInList(id) ? (
                                    <IconButton
                                        onClick={(e) => addToFavorite(e)}
                                    >
                                        <FavoriteBorderIcon color="primary" />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={(e) =>
                                            deleteWishlistItem(id, e)
                                        }
                                    >
                                        <FavoriteIcon color="primary" />
                                    </IconButton>
                                )}
                            </Stack>
<<<<<<< HEAD
                        )} */}

                        <Stack
                            position="absolute"
                            bottom="10%"
                            left="0"
                            zIndex="1"
                        >

                            {handleBadge(
                                product,
                                currencySymbol,
                                currencySymbolDirection,
                                digitAfterDecimalPoint,
                                available_date_ends
                            )}

                        </Stack>
                        {(isRestaurantDetails && isSmall && product?.avg_rating !== 0) && <Stack
                            position="absolute"
                            top="5%"
                            right="5%"
                            zIndex="1"
                        >

                            <FoodRating product_avg_rating={rating_count} />

                        </Stack>}
                        <CustomOverLay hover={isTransformed} border_radius="10px">
                            <QuickView
                                id={id}
                                isInList={isInList}
                                quickViewHandleClick={onClick}
                                addToWishlistHandler={addToFavorite}
                                removeFromWishlistHandler={deleteWishlistItem}
                                isInCart={isInCart}
                                product={product}
                                getQuantity={getQuantity}
                                handleClickQuantityButton={
                                    handleClickQuantityButton
                                }
                                setIncrOpen={setIncrOpen}
                                incrOpen={incrOpen}
                                addToCart={addToCart}
                            />
                        </CustomOverLay>
=======
                        )}

                        <Stack
                            position="absolute"
                            top="10%"
                            left="6%"
                            zIndex="1"
                        >
                            {!available_date_ends ? (
                                <FoodRating product_avg_rating={avg_rating} />
                            ) : (
                                <>
                                    {handleBadge(
                                        product,
                                        currencySymbol,
                                        currencySymbolDirection,
                                        digitAfterDecimalPoint,
                                        available_date_ends
                                    )}
                                </>
                            )}
                        </Stack>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        {!isAvailable(
                            available_time_starts,
                            available_time_ends
                        ) && (
<<<<<<< HEAD
                                <CustomOverlayBox>
                                    <Typography align="center" variant="h5">
                                        {t('Not Available now')}
                                    </Typography>
                                </CustomOverlayBox>
                            )}
=======
                            <CustomOverlayBox>
                                <Typography align="center" variant="h5">
                                    {t('Not Available now')}
                                </Typography>
                            </CustomOverlayBox>
                        )}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <Box
                            sx={{
                                transition: `${theme.transitions.create(
                                    ['background-color', 'transform'],
                                    {
                                        duration:
                                            theme.transitions.duration.standard,
                                    }
                                )}`,
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <CustomImageContainer
                                src={imageUrl}
<<<<<<< HEAD
                                alt={alt}
                                width="100%"
                                height="170px"
                                borderRadius="8px"
                                objectFit="cover"
                                smHeight="130px"
                            />
                        </Box>
                        {
                            router.pathname !== `/restaurant/[id]` &&
                            <CustomStackForFoodModal
                                padding="12px"
                                direction="row"
                                width="100%"
                                right='0'
                                spacing={1}
                                justifyContent="flex-end"
                                alignItems="flex-end"

                            >
                                    <Typography
                                        fontSize="12px"
                                        fontWeight={500}
                                        color={theme.palette.whiteContainer.main}
                                    >
                                        {product?.min_delivery_time}-{product?.max_delivery_time} {t('min')}
                                    </Typography>
                                {/* <Typography
                                    fontSize="12px"

                                    color={theme.palette.whiteContainer.main}
                                >
                                    {t('Free Delivery')}
                                </Typography> */}
                            </CustomStackForFoodModal>
                        }
=======
                                width="100%"
                                height="170px"
                                borderRadius="3px"
                                objectFit="contained"
                                smHeight="130px"
                            />
                        </Box>

                        <CustomStackForFoodModal
                            padding="12px"
                            width="100%"
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="flex-end"
                        >
                            <Typography
                                fontSize="12px"
                                color={theme.palette.whiteContainer.main}
                            >
                                {minFreeDelivery}-{maxFreeDelivery} {t('min')}
                            </Typography>
                            <Typography
                                fontSize="12px"
                                color={theme.palette.whiteContainer.main}
                            >
                                {freeDelivery === 1 && t('Free Delivery')}
                            </Typography>
                        </CustomStackForFoodModal>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    </Box>
                </Stack>
            )}
        </>
    )
}

export default ProductCardMedia
