<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    CustomFavICon,
    CustomFoodCard,
    CustomFoodCardNew,
} from './FoodCard.style'
import { Box, Stack } from '@mui/system'
import CustomImageContainer from '../CustomImageContainer'
import test_image from '../../../public/static/testImage.svg'
<<<<<<< HEAD
import { IconButton, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import VagSvg from '../foodDetail-modal/VagSvg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
=======
import StarIcon from '@mui/icons-material/Star'
import { IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import VagSvg from '../foodDetail-modal/VagSvg'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    CustomOverlayBox,
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
import {
    getAmount,
    getConvertDiscount,
<<<<<<< HEAD
    getReviewCount,
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    isAvailable,
} from '../../utils/customFunctions'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StartPriceView from '../foodDetail-modal/StartPriceView'
import FoodDetailModal from '../foodDetail-modal/FoodDetailModal'
import { RTL } from '../RTL/RTL'
import { t } from 'i18next'
import FoodRating from './FoodRating'
import { CustomTypographyEllipsis } from '../../styled-components/CustomTypographies.style'
import FoodCardIncrementAndDecrement from './FoodCardIncrementAndDecrement'
import AfterAddToCart from './AfterAddToCart'
import CartClearModal from '../foodDetail-modal/CartClearModal'
<<<<<<< HEAD
import CircularLoader from "../loader/CircularLoader";
import { useSelector } from 'react-redux'
import StarIcon from '@mui/icons-material/Star';
import CustomPopover from '../custom-popover/CustomPopover'
import CustomPopoverWithItem from '../custom-popover/CustomPopoverWithItem'
import WishListImage from '../../assets/images/WishListImage'
import DeleteIcon from '../../assets/images/icons/DeleteIcon'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const HorizontalFoodCard = (props) => {
    const {
        setOpenModal,
        product,
        imageUrl,
        isInList,
        languageDirection,
        addToFavorite,
        deleteWishlistItem,
        available_time_starts,
        available_time_ends,
        handleFoodDetailModal,
        handleBadge,
        addToCart,
        isInCart,
        getQuantity,
        incrOpen,
        setIncrOpen,
        handleClickQuantityButton,
<<<<<<< HEAD
        addToCartLoading,
        isRestaurantDetails,
        inWishListPage = "false"
    } = props
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const { global } = useSelector((state) => state.globalSettings)
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    const handleClick = (e) => {
        deleteWishlistItem(product?.id, e)
    }
    const handleClickDelete = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
=======
    } = props
    const theme = useTheme()

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            <RTL direction={languageDirection}>
                <CustomFoodCardNew
<<<<<<< HEAD
                    horizontal
                    onClick={handleFoodDetailModal}
                    background={theme.palette.cardBackground1}
                    width="100%"
=======
                    onClick={handleFoodDetailModal}
                    background={theme.palette.cardBackground1}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        width="100%"
                        sx={{ overflow: 'hidden' }}
                    >
                        <Stack
                            position="relative"
                            sx={{
                                transition: `${theme.transitions.create(
                                    ['background-color', 'transform'],
                                    {
                                        duration:
                                            theme.transitions.duration.standard,
                                    }
                                )}`,
<<<<<<< HEAD
                                marginLeft: languageDirection === "rtl" && ".8rem !important",
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <CustomImageContainer
                                src={imageUrl}
                                width="115px"
<<<<<<< HEAD
                                smWidth="95px"
                                smHeight="95px"
=======
                                smWidth="73px"
                                smHeight="73px"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                height="95px"
                                borderRadius="3px"
                                objectFit="cover"
                            />
                            <Stack
                                position="absolute"
                                top="10%"
<<<<<<< HEAD
                                left="0"
                                zIndex="1"
                            >
                                {handleBadge(
                                    product,
                                    currencySymbol,
                                    currencySymbolDirection,
                                    digitAfterDecimalPoint,
                                    product?.available_date_ends
                                )}
=======
                                left="6%"
                                zIndex="1"
                            >
                                <FoodRating
                                    product_avg_rating={product?.avg_rating}
                                />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            </Stack>

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
                        </Stack>
                        <Stack gap="7px" width="100%" >
                            <Stack>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    flexWrap="wrap"
                                    spacing={0.5}
                                >
                                    <Typography
                                        fontSize="14px"
                                        fontWeight="500"
                                        maxWidth="120px"
                                        noWrap
                                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                                        color={theme.palette.neutral[1200]}
                                    >
                                        {product?.name}
                                    </Typography>
                                    <VagSvg
                                        color={
                                            Number(product?.veg) === 0
                                                ? theme.palette.nonVeg
                                                : theme.palette.success.light
                                        }
                                    />
                                </Stack>
                                <Typography
                                    variant="subtitle2"
                                    fontSize="12px"
                                    fontWeight={400}
                                    color={theme.palette.neutral[400]}
                                    mt="-3px"
                                >
                                    {product?.restaurant_name}
                                </Typography>
                            </Stack>
                            <Stack flexDirection="row" gap="5px" >
                                <Typography
                                    fontSize={{ xs: "12px", md: "14px" }}
                                    fontWeight={400}
                                    color={theme.palette.text.secondary}
                                >
                                    {getReviewCount(product?.rating_count)}
                                </Typography>
                                {
                                    ((product?.avg_rating !== 0 && isRestaurantDetails && !isSmall) ||
                                        (!isRestaurantDetails && product?.avg_rating !== 0)) ? (
                                        <FoodRating product_avg_rating={product?.avg_rating} />) :
                                        ("")
                                }
                            </Stack>

=======
                                <CustomOverlayBox>
                                    <Typography align="center" variant="h5">
                                        {t('Not Available now')}
                                    </Typography>
                                </CustomOverlayBox>
                            )}
                        </Stack>
                        <Stack spacing={0.8} width="100%">
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                flexWrap="wrap"
                                spacing={0.5}
                            >
                                <CustomTypographyEllipsis
                                    variant="h5"
                                    fontWeight="500"
                                    maxWidth="125px"
                                >
                                    {product?.name}
                                </CustomTypographyEllipsis>
                                <VagSvg
                                    color={
                                        Number(product?.veg) === 0
                                            ? theme.palette.nonVeg
                                            : theme.palette.success.light
                                    }
                                />
                            </Stack>
                            <Typography
                                variant="subtitle2"
                                color={theme.palette.neutral[500]}
                            >
                                {product?.restaurant_name}
                            </Typography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <StartPriceView
                                data={product}
                                hideStartFromText="true"
                                handleBadge={handleBadge}
                            />
                        </Stack>
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <Stack
                            justifyContent="space-between"
                            alignItems=" flex-end"
                        >
                            {!product?.available_date_ends && (
                                <>
                                    {!isInList(product.id) ? (
                                        <IconButton
                                            onClick={(e) => addToFavorite(e)}
                                            sx={{ padding: '3px' }}
                                        >
                                            <FavoriteBorderIcon color="primary" />
                                        </IconButton>
                                    ) : (
<<<<<<< HEAD
                                        <>{inWishListPage === "true" ? (
                                            <IconButton
                                                onClick={handleClickDelete}
                                                sx={{ padding: '3px' }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        ) : (

                                            <IconButton
                                                onClick={(e) => deleteWishlistItem(product.id, e)}
                                                sx={{ padding: '3px' }}
                                            >
                                                <FavoriteIcon color="primary" />
                                            </IconButton>
                                        )

                                        }

                                        </>
=======
                                        <IconButton
                                            onClick={(e) =>
                                                deleteWishlistItem(
                                                    product.id,
                                                    e
                                                )
                                            }
                                            sx={{ padding: '3px' }}
                                        >
                                            <FavoriteIcon color="primary" />
                                        </IconButton>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    )}
                                </>
                            )}
                            {!isInCart && (
                                <IconButton
                                    onClick={(e) => addToCart(e)}
                                    sx={{ padding: '3px' }}
                                >
<<<<<<< HEAD
                                    {addToCartLoading ? <CircularLoader size="20px" /> : <AddShoppingCartIcon color="primary" />}

=======
                                    <ShoppingBagOutlinedIcon color="primary" />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                </IconButton>
                            )}
                            {isInCart && !incrOpen && (
                                <AfterAddToCart
                                    isInCart={isInCart}
                                    product={product}
                                    getQuantity={getQuantity}
                                    handleClickQuantityButton={
                                        handleClickQuantityButton
                                    }
                                    setIncrOpen={setIncrOpen}
                                    incrOpen={incrOpen}
<<<<<<< HEAD
                                    addToCartLoading={addToCartLoading}
=======
                                    // position="-30px"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                />
                            )}
                        </Stack>
                    </Stack>
                    <Box
                        position="relative"
                        width="100%"
                        sx={{
                            width: {
                                xs: 'calc(100% - 85px)',
                                sm: 'calc(100% - 130px)',
                            },
                            marginInlineStart: 'auto',
                        }}
                    >
                        {isInCart && incrOpen && (
                            <AfterAddToCart
                                isInCart={isInCart}
                                product={product}
                                getQuantity={getQuantity}
                                handleClickQuantityButton={
                                    handleClickQuantityButton
                                }
                                setIncrOpen={setIncrOpen}
                                incrOpen={incrOpen}
                                position="-30px"
                            />
                        )}
                    </Box>
                </CustomFoodCardNew>
<<<<<<< HEAD
            </RTL >
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
                    title="Remove this food"
                    subTitle="Want to remove this food your favourite list ?"
                />

            </CustomPopover>
=======
            </RTL>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </>
    )
}

export default HorizontalFoodCard
