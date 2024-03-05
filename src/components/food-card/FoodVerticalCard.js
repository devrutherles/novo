<<<<<<< HEAD
import React, { useState } from 'react'
import { CustomFoodCard, CustomFoodCardNew } from './FoodCard.style'
import { Chip, IconButton, Typography, useMediaQuery } from '@mui/material'
=======
import React from 'react'
import { CustomFoodCard, CustomFoodCardNew } from './FoodCard.style'
import CustomImageContainer from '../CustomImageContainer'
import test_image from '../../../public/static/testImage.svg'
import { CustomStackForFoodModal } from '../foodDetail-modal/FoodModalStyle'
import { Chip, IconButton, Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import ProductCardMedia from './ProductCardMedia'
import VagSvg from '../foodDetail-modal/VagSvg'
import { Stack } from '@mui/system'
import { useTheme } from '@mui/material/styles'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { CustomTypographyGray } from '../error/Errors.style'
import StartPriceView from '../foodDetail-modal/StartPriceView'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useSelector } from 'react-redux'
import { CustomTypographyEllipsis } from '../../styled-components/CustomTypographies.style'
import AfterAddToCart from './AfterAddToCart'
<<<<<<< HEAD
import { HomeTextTypography } from '../home/HomeStyle'
import { getReviewCount } from '../../utils/customFunctions'
import FoodRating from './FoodRating'
import { t } from 'i18next'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const FoodVerticalCard = (props) => {
    const {
        product,
        setOpenModal,
        productImageUrl,
        handleFoodDetailModal,
        deleteWishlistItem,
        isInList,
        addToFavorite,
        imageUrl,
        handleBadge,
        addToCart,
        isInCart,
        getQuantity,
        incrOpen,
        setIncrOpen,
        handleClickQuantityButton,
        hasBackGroundSection,
<<<<<<< HEAD
        isRestaurantDetails,
    } = props

    const [isTransformed, setIstransformed] = useState(false);
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <CustomFoodCardNew
            height="285px"
            smheight={(isRestaurantDetails && isSmall) ? "245px" : "230px"}
            maxwidth="250px"
            onClick={(e) => handleFoodDetailModal(e)}
            onMouseEnter={() =>
                setIstransformed(true)
            }
            onMouseDown={() =>
                setIstransformed(true)
            }
            onMouseLeave={() =>
                setIstransformed(false)}
=======
    } = props

    const { global } = useSelector((state) => state.globalSettings)
    const theme = useTheme()
    return (
        <CustomFoodCardNew
            maxwidth="240px"
            smheight="240px"
            height="290px"
            onClick={(e) => handleFoodDetailModal(e)}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            background={
                hasBackGroundSection === 'true'
                    ? theme.palette.cardBackground1
                    : theme.palette.cardBackground2
            }
        >
            <CustomStackFullWidth spacing={1.3}>
                <ProductCardMedia
<<<<<<< HEAD
                    id={product?.id}
                    onClick={handleFoodDetailModal}
                    available_time_starts={product?.available_time_starts}
                    available_time_ends={product?.available_time_ends}
                    available_date_ends={product?.available_date_ends}
                    imageUrl={imageUrl}
                    alt={product?.name}
                    addToFavorite={addToFavorite}
                    isInList={isInList}
                    deleteWishlistItem={deleteWishlistItem}
                    handleBadge={handleBadge}
                    product={product}
                    isInCart={isInCart}
                    getQuantity={getQuantity}
                    setIncrOpen={setIncrOpen}
                    handleClickQuantityButton={handleClickQuantityButton}
                    addToCart={addToCart}
                    isTransformed={isTransformed}
                    incrOpen={incrOpen}
                    isRestaurantDetails={isRestaurantDetails}
                    rating_count={product?.rating_count}
=======
                    imageUrl={imageUrl}
                    avg_rating={product?.avg_rating}
                    discount={product?.discount}
                    discount_type={product?.discount_type}
                    restaurant_discount={product?.restaurant_discount}
                    alt={name}
                    price={product?.price}
                    onClick={handleFoodDetailModal}
                    available_time_ends={product?.available_time_ends}
                    available_time_starts={product?.available_time_starts}
                    available_date_ends={product?.available_date_ends}
                    deleteWishlistItem={deleteWishlistItem}
                    isInList={isInList}
                    addToFavorite={addToFavorite}
                    id={product?.id}
                    deliveryTime={product?.delivery_time}
                    minFreeDelivery={product?.min_delivery_time}
                    maxFreeDelivery={product?.max_delivery_time}
                    handleBadge={handleBadge}
                    product={product}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                />
                <CustomStackFullWidth sx={{ padding: '5px' }}>
                    <Stack
                        direction="row"
<<<<<<< HEAD
                        justifyContent="space-between"
                        alignItems="center"
                        gap="5px"
                        sx={{ position: 'relative' }}
                    >
                        <Stack flexDirection="row" alignItems="center" gap="5px">
                            <Typography
                                fontSize="14px"
                                fontWeight="500"
                                maxWidth={{xs:"120px", sm: "130px", md:"150px"}}
                                noWrap
                                sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                                color={theme.palette.neutral[1200]}
                            >
                                {product?.name}
                            </Typography>
                            {/* <Typography fontSize={{ xs: "13px", sm: "14px", md: "15px" }} fontWeight={500} whiteSpace="nowrap">
                                {product?.name.length > 13 ? `${product?.name.slice(0, 13)}... ` : product?.name}
                            </Typography> */}
                            <VagSvg
                                color={
                                    Number(product?.veg) === 0
                                        ? theme.palette.nonVeg
                                        : theme.palette.success.light
                                }
                            />
                        </Stack>

                    </Stack>
                    <Stack flexDirection="row" gap="5px">
                        <Typography
                            fontSize={{ xs: "12px", md: "14px" }}
                            fontWeight={400}
                            color={theme.palette.text.secondary}
                        >
                            {getReviewCount(product?.rating_count)}
                        </Typography>
                        {((product?.avg_rating !== 0 && isRestaurantDetails && !isSmall) || (!isRestaurantDetails && product?.avg_rating !== 0)) ? <FoodRating product_avg_rating={product?.avg_rating} /> : ""}
                    </Stack>

                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        overflow: 'hidden',*/}
                    {/*        textOverflow: 'ellipsis',*/}
                    {/*        whiteSpace: 'nowrap',*/}
                    {/*        display: 'flex',*/}
                    {/*        flexDirection: 'row',*/}
                    {/*        marginTop: '3px',*/}
                    {/*        width: '100%',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    {product?.cuisines?.length > 0 &&*/}
                    {/*        product?.cuisines?.map((cuisine, index) => (*/}
                    {/*            <Typography*/}
                    {/*                key={index}*/}
                    {/*                align="left"*/}
                    {/*                fontSize="12px"*/}
                    {/*                color={theme.palette.neutral[600]}*/}
                    {/*            >*/}
                    {/*                {' '}*/}
                    {/*                {cuisine?.name}{' '}*/}
                    {/*                {product?.cuisines?.length - 1 === index*/}
                    {/*                    ? ''*/}
                    {/*                    : ','}*/}
                    {/*            </Typography>*/}
                    {/*        ))}*/}
                    {/*</div>*/}

                    {/* <Stack
                        width="100%"
                        justifyContent="space-between"
                        direction={(isRestaurantDetails && isSmall) ? "column" : "row"}
                        alignItems={(isRestaurantDetails && isSmall) ? "start" : "center"}
                        position="relative"
                        mt={{ xs: '0px', sm: '2px', md: '4px' }}
                    > */}
                    {/* <Stack>
                            <Typography
                                fontSize="12px"
                                fontWeight={500}
                                color={theme.palette.text.custom}
                            >
                                {product?.min_delivery_time}-{product?.max_delivery_time} {t('min')}
                            </Typography>
                        </Stack> */}
                    <StartPriceView
                        data={product}
                        handleBadge={handleBadge}
                        available_date_ends={product?.available_date_ends}
                    />
                    {/* </Stack> */}
=======
                        justifyContent="flex-start"
                        alignItems="center"
                        flexWrap="wrap"
                        spacing={0.5}
                    >
                        <CustomTypographyEllipsis
                            variant="h5"
                            fontWeight="500"
                            sx={{
                                maxWidth: '163px',
                                [theme.breakpoints.down('md')]: {
                                    maxWidth: '112px',
                                },
                            }}
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

                    <div
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '3px',
                            width: '100%',
                        }}
                    >
                        {product?.cuisines?.length > 0 &&
                            product?.cuisines?.map((cuisine, index) => (
                                <Typography
                                    align="left"
                                    fontSize="12px"
                                    color={theme.palette.neutral[600]}
                                >
                                    {' '}
                                    {cuisine?.name}{' '}
                                    {product?.cuisines?.length - 1 === index
                                        ? ''
                                        : ','}
                                </Typography>
                            ))}
                    </div>

                    <Stack
                        width="100%"
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
                        position="relative"
                        mt={{ xs: '0px', sm: '2px', md: '4px' }}
                    >
                        <StartPriceView
                            data={product}
                            handleBadge={handleBadge}
                            available_date_ends={product?.available_date_ends}
                        />

                        {!isInCart && (
                            <IconButton
                                onClick={(e) => addToCart(e)}
                                sx={{ padding: '3px' }}
                            >
                                <ShoppingBagOutlinedIcon color="primary" />
                            </IconButton>
                        )}
                        {isInCart && (
                            <AfterAddToCart
                                isInCart={isInCart}
                                product={product}
                                getQuantity={getQuantity}
                                handleClickQuantityButton={
                                    handleClickQuantityButton
                                }
                                setIncrOpen={setIncrOpen}
                                incrOpen={incrOpen}
                            />
                        )}
                    </Stack>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </CustomStackFullWidth>
            </CustomStackFullWidth>
        </CustomFoodCardNew>
    )
}

export default FoodVerticalCard
