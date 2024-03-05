<<<<<<< HEAD
import React, { memo, useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Box from '@mui/material/Box'
import { Button, Grid, IconButton, Stack, Typography, styled } from '@mui/material'
=======
import React, { memo, useRef, useState } from 'react'
import Slider from 'react-slick'
import Box from '@mui/material/Box'
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FoodCard from '../../../food-card/FoodCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
=======
import { useQuery } from 'react-query'
import { MostReviewedApi } from '../../../../hooks/react-query/config/productsApi'
import { useRouter } from 'next/router'
import { AllRoutes } from '../../../../AllRoutes'
import {
    HomeTitleTypography,
    LeftArrowStyle,
    RightArrowStyle,
} from '../../HomeStyle'
import { useTranslation } from 'react-i18next'
import CustomShimmerForBestFood from '../../../CustomShimmer/CustomShimmerForBestFood'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    CustomStackFullWidth,
    CustomViewAll,
    SliderCustom,
} from '../../../../styled-components/CustomStyles.style'
<<<<<<< HEAD
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import best_foods from '../../../../../public/static/best_foods.svg'
import CustomImageContainer from '../../../CustomImageContainer'
import FoodCardShimmer from '../../../food-card/FoodCarShimmer'
import { HandleNext, HandlePrev } from '../../../CustomSliderIcon';
import ReferSvgBG from "../../../../assets/images/refer2.png"
import ReferSvg from "../../../../assets/images/refer_a_friend.svg"
import Skeleton from '@mui/material/Skeleton'

import { getToken } from "../../../checkout-page/functions/getGuestUserId";
import toast from "react-hot-toast";

const ReferWrapper = styled(Stack)(({ theme, src }) => ({
    height: "90%",
    width: "100%",
    padding: "14px 54px 34px",
    backgroundImage: ` url(${ReferSvgBG.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    borderRadius:"10px"
}))

export const ReferButton = styled(Button)(({ theme }) => ({

    background: theme.palette.primary.main,
    borderRadius: '5px',
    fontWeight: "500",
    backgroundColor: `${theme.palette.whiteContainer.main}`,
    color: `${theme.palette.primary.main}`,
    gap: '5px',
    boxShadow: "0px 0px 1.81508px rgba(145, 158, 171, 0.2), 0px 9.07541px 18.1508px -2.72262px rgba(145, 158, 171, 0.05)",
    '&:hover': {
        backgroundColor: theme.palette.whiteContainer.main,
    },

}))
=======
import { CustomTypography } from '../../../custom-tables/Tables.style'
import FeaturedCategoryCard from '../../../featured-category-item/FeaturedCategoryCard'
import CustomShimmerCategories from '../../../CustomShimmer/CustomShimmerCategories'
import { CustomIconButton, CustomSideOverLay } from '../FoodCampaign.style'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { settings } from './SliderSetting'
import { onSingleErrorResponse } from '../../../ErrorResponse'
import best_foods from '../../../../../public/static/best_foods.svg'
import CustomImageContainer from '../../../CustomImageContainer'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import FoodCardShimmer from '../../../food-card/FoodCarShimmer'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { HandleNext, HandlePrev } from '../../../CustomSliderIcon'
import { setHandleHomePage } from '../../../../redux/slices/global'
import Skeleton from '@mui/material/Skeleton'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const BestReviewedFood = ({ data, isLoading }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { bestReviewedFoods } = useSelector((state) => state.storedData)
    const [hoverOn, setHoverOn] = useState(false)
    const bestfoodslideRef = useRef(null)
    const foodCampaignSliderRef = useRef(null)
    const router = useRouter()
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const isXSmall = useMediaQuery(theme.breakpoints.up('sm'))

    const { global } = useSelector((state) => state.globalSettings)
<<<<<<< HEAD
    const [fullWidth, setFullWidth] = useState(true);
    useEffect(() => {
        if (global?.ref_earning_status && global?.ref_earning_exchange_rate !== 0)
            setFullWidth(false)
    }, [])
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const languageDirection = localStorage.getItem('direction')

    const settings = {
        speed: 500,
<<<<<<< HEAD
        slidesToShow: !fullWidth ? 3.45 : 4.45,
        slidesToScroll: 1,
=======
        slidesToShow: 4.7,
        slidesToScroll: 3,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        initialSlide: 0,
        infinite: false,
        nextArrow: hoverOn && <HandleNext />,
        prevArrow: hoverOn && <HandlePrev />,
        // rtl:true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
<<<<<<< HEAD
                    slidesToShow: !fullWidth ? 3.3 : 4.3,
                    slidesToScroll: 5,
=======
                    slidesToShow: 5,
                    slidesToScroll: 5,

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    initialSlide: 0,
                    // dots: true
                },
            },
            {
                breakpoint: 1340,
                settings: {
<<<<<<< HEAD
                    slidesToShow: !fullWidth ? 3.2 : 4.2,
                    slidesToScroll: 5,
=======
                    slidesToShow: 4.5,
                    slidesToScroll: 5,

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    initialSlide: 0,
                    // dots: true
                },
            },
            {
                breakpoint: 1075,
                settings: {
<<<<<<< HEAD
                    slidesToShow: !fullWidth ? 2.9 : 3.9,
=======
                    slidesToShow: 4,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    slidesToScroll: 1,
                    initialSlide: 0,
                    // dots: true
                },
            },
            {
                breakpoint: 999,
                settings: {
<<<<<<< HEAD
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
=======
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                    // dots: true
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 800,
                settings: {
<<<<<<< HEAD
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
=======
                    slidesToShow: 3,
                    slidesToScroll: 3,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    // initialSlide: 2

                    initialSlide: 0,
                },
            },
            {
                breakpoint: 670,
                settings: {
<<<<<<< HEAD
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
=======
                    slidesToShow: 2.5,
                    slidesToScroll: 3,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                    initialSlide: 0,
                },
            },
            {
<<<<<<< HEAD
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
=======
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                    initialSlide: 0,
                },
            },
            {
                breakpoint: 400,
                settings: {
<<<<<<< HEAD
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
=======
                    slidesToShow: 1.7,
                    slidesToScroll: 2,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                    // dots: true
                    initialSlide: 0,
                },
            },
        ],
    }

    const handleClick = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
        router.push(
            {
                pathname:
                    router.pathname === '/home'
                        ? window.location.pathname
                        : 'search',
                query: {
                    page: 'most-reviewed',
                },
            },
            undefined,
            { shallow: router.pathname === '/home' ? true : false }
        )
    }
<<<<<<< HEAD
    const handleClickRefer = () => {
        const token = getToken()
        if (token) {
            router.push(`/info?page=referral`)
        } else {
            toast.error(t("please login first"))
        }

    }
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <Grid
            container
            paddingTop={bestReviewedFoods?.length > 0 && '1.9rem'}
            gap="1.4rem"
        >
<<<<<<< HEAD
            {(bestReviewedFoods?.length > 0 && !isLoading) && (
=======
            {bestReviewedFoods?.length > 0 && (
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                <Grid item xs={12} md={12}>
                    <CustomStackFullWidth
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1}>
                            <CustomImageContainer
                                src={best_foods.src}
                                width="26px"
                                height="26px"
                            />
                            <Typography
                                variant="h3"
                                color={theme.palette.neutral[1000]}
<<<<<<< HEAD
                                fontSize={{ xs: "16px", md: "20px" }}
                                fontWeight={{ xs: "500", md: "700" }}
=======
                                fontWeight="500"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            >
                                {t('Best Reviewed Foods')}
                            </Typography>
                        </Stack>
                        <CustomViewAll
                            onClick={handleClick}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
<<<<<<< HEAD

                                <Typography fontSize="14px" fontWeight="500" >{t('View all')}</Typography>

=======
                            {isXSmall && (
                                <Typography>{t('View all')}</Typography>
                            )}

                            <IconButton
                                sx={{
                                    filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1))',
                                    flex: 'none',
                                    order: '1',
                                    flexGrow: '0',
                                    boxShadow: 3,
                                }}
                            >
                                <KeyboardArrowRightIcon
                                    color="primary"
                                    style={{
                                        width: '19px',
                                        height: '19px',
                                        transform:
                                            languageDirection === 'rtl' &&
                                            'rotate(180deg)',
                                    }}
                                    fontWeight="700"
                                />
                            </IconButton>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        </CustomViewAll>
                    </CustomStackFullWidth>
                </Grid>
            )}
<<<<<<< HEAD
            {!isLoading ? (
                <Grid
                    item
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    spacing={2}
                    onMouseEnter={() => setHoverOn(true)}
                    onMouseLeave={() => setHoverOn(false)}
                    sx={{ position: 'relative' }}
                    gap={{ xs: "10px", md: "0px" }}
                >
                    <>
                        {!fullWidth &&
                            <Grid

                                item
                                lg={2.5}
                                md={2.5}
                                xs={12}
                                position="relative"
                                pb={{ xs: "0px", md: "40px" }}
                            >

                                <Stack
                                    sx={{
                                        backgroundImage: `radial-gradient(134.36% 100.77% at 58.31% -36.98%, ${theme.palette.customColor.fourteen} 0%, ${theme.palette.primary.main} 100%)`,
                                        borderRadius: "16px",
                                        width: "100%"
                                    }}
                                >
                                    <ReferWrapper src={ReferSvgBG.src}>
                                        <img src={ReferSvg.src} alt="refer a friend" />
                                        <Typography
                                            fontSize="14px"
                                            fontWeight={600}
                                            color={theme.palette.whiteText.main}
                                        >
                                            {t("Earn ")}
                                            <Typography
                                                component="span"
                                                fontSize="20px"
                                                fontWeight={600}
                                            >
                                                {`${global?.currency_symbol}${global?.ref_earning_exchange_rate}`}
                                            </Typography>
                                            <Typography component="span" fontWeight="400">{t(" when you")}</Typography>
                                            <Typography component="span" fontWeight={600}>{t(" Refer an Friend")}</Typography>
                                        </Typography>
                                        <ReferButton onClick={() => handleClickRefer()} >
                                            {t("Refer Now")}
                                        </ReferButton>

                                    </ReferWrapper>
                                </Stack>
                            </Grid>
                        }
                        <Grid
                            item
                            lg={!fullWidth ? 9.5 : 12}
                            md={!fullWidth ? 9.5 : 12}
                            xs={12}
                            position="relative"
                        >
                            <CustomStackFullWidth justifyContent="right">
                                <SliderCustom
                                    paddingBottom="20px"
                                    languageDirection={languageDirection}
                                >
                                    <Slider
                                        ref={foodCampaignSliderRef}
                                        {...settings}
                                    >
                                        {bestReviewedFoods
                                            .map((product) => {
                                                if (
                                                    product?.variations === null ||
                                                    product?.variations[0]
                                                        ?.values ||
                                                    product?.variations?.length ===
                                                    0
                                                ) {
                                                    return (
                                                        <FoodCard
                                                            key={product?.id}
                                                            hasBackGroundSection="false"
                                                            product={product}
                                                            global={global}
                                                            productImageUrl={
                                                                global?.base_urls
                                                                    ?.product_image_url
                                                            }
                                                        />
                                                    )
                                                }
                                            })}
                                    </Slider>
                                </SliderCustom>
                            </CustomStackFullWidth>
                        </Grid>
                    </>
                    {/*{hoverOn && <CustomSideOverLay left="0" right="unset"  />}*/}
                </Grid>
            ) : (
                <Grid item md={12} xs={12} sm={12}>
                    <Stack marginTop="40px" spacing={2}>
                        <Skeleton
                            variant="rectangular"
                            width="40%"
=======
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                onMouseEnter={() => setHoverOn(true)}
                onMouseLeave={() => setHoverOn(false)}
                sx={{ position: 'relative' }}
            >
                {!isLoading ? (
                    <Grid
                        container
                        item
                        lg={12}
                        md={12}
                        xs={12}
                        position="relative"
                    >
                        <CustomStackFullWidth justifyContent="right">
                            <SliderCustom languageDirection={languageDirection}>
                                <Slider
                                    ref={foodCampaignSliderRef}
                                    {...settings}
                                >
                                    {bestReviewedFoods
                                        .slice(0, 10)
                                        .map((product) => {
                                            if (
                                                product?.variations === null ||
                                                product?.variations[0]
                                                    ?.values ||
                                                product?.variations?.length ===
                                                    0
                                            ) {
                                                return (
                                                    <FoodCard
                                                        key={product?.id}
                                                        hasBackGroundSection="false"
                                                        product={product}
                                                        global={global}
                                                        productImageUrl={
                                                            global?.base_urls
                                                                ?.product_image_url
                                                        }
                                                    />
                                                )
                                            }
                                        })}
                                </Slider>
                            </SliderCustom>
                        </CustomStackFullWidth>
                    </Grid>
                ) : (
                    <Stack marginTop="40px" spacing={2}>
                        <Skeleton
                            variant="rectangular"
                            width="400px"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            height="20px"
                        />
                        <SliderCustom>
                            <Slider {...settings}>
                                <FoodCardShimmer />
                                <FoodCardShimmer />
                                <FoodCardShimmer />
                                <FoodCardShimmer />
                                <FoodCardShimmer />
                            </Slider>
                        </SliderCustom>
                    </Stack>
<<<<<<< HEAD
                </Grid>
            )}
=======
                )}
                {/*{hoverOn && <CustomSideOverLay left="0" right="unset"  />}*/}
            </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </Grid>
    )
}

export default memo(BestReviewedFood)
