import React, { useEffect, useState } from 'react'
import {
    CustomStackFullWidth,
    SliderCustom,
} from '../../styled-components/CustomStyles.style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@mui/material'
import BannerCard from './Banner/BannerCard'
<<<<<<< HEAD
=======
import { bannerSettings } from './Banner/bannerSettings'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { setBannerFoodByDispatch } from '../../redux/slices/searchFilter'
import { useRouter } from 'next/router'
import FoodDetailModal from '../foodDetail-modal/FoodDetailModal'
import { useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton'
import { handleBadge } from '../../utils/customFunctions'
<<<<<<< HEAD
import { HandleNext, HandlePrev } from '../CustomSliderIcon'
const Banner = ({bannerIsLoading}) => {
=======
const Banner = () => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const router = useRouter()
    const { banners } = useSelector((state) => state.storedData)
    const [allBanners, setAllBanners] = useState()
    const [FoodBannerData, setFoodBannerData] = useState(null)
    const bannerData = allBanners?.concat(banners?.campaigns)
    const [openModal, setOpenModal] = useState(false)
    const { global } = useSelector((state) => state.globalSettings)
<<<<<<< HEAD
    const [hoverOn, setHoverOn] = useState(false)
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const globalImageUrl = global?.base_urls?.banner_image_url
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }

    useEffect(() => {
<<<<<<< HEAD
        const foodBanners = banners?.banners?.filter(
=======
        const foodBanners = banners?.banners.filter(
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            (item) => item?.type === 'item_wise'
        )
        const isOldVariations = foodBanners?.filter(
            (ite) =>
                ite?.food?.variations === null ||
                ite?.food?.variations[0]?.values ||
                ite?.food?.variations?.length === 0
        )

<<<<<<< HEAD
        const restaurantBanners = banners?.banners?.filter(
            (item) => item?.type === 'restaurant_wise'
        )

        setAllBanners(isOldVariations?.concat(restaurantBanners))
=======
        const restaurantBanners = banners?.banners.filter(
            (item) => item?.type === 'restaurant_wise'
        )

        setAllBanners(isOldVariations.concat(restaurantBanners))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    }, [banners])

    const handleBannerClick = (banner) => {
        if (banner.type === 'restaurant_wise') {
            router.push(
                {
                    pathname: '/restaurant/[id]',
                    query: {
<<<<<<< HEAD
                        id: `${banner?.restaurant?.slug
                            ? banner?.restaurant?.slug
                            : banner?.restaurant?.id
                            }`,
=======
                        id: `${
                            banner?.restaurant?.slug
                                ? banner?.restaurant?.slug
                                : banner?.restaurant?.id
                        }`,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    },
                },
                undefined,
                { shallow: true }
            )
        } else if (banner?.available_date_ends) {
            router.push(
                {
<<<<<<< HEAD
                    pathname: `campaigns/${banner?.slug ? banner?.slug : banner?.id
                        }`,
=======
                    pathname: `campaigns/${
                        banner?.slug ? banner?.slug : banner?.id
                    }`,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                },
                undefined,
                { shallow: true }
            )
        } else {
            setFoodBannerData(banner?.food)
            setOpenModal(true)
        }
    }
    const handleModalClose = () => {
        setOpenModal(false)
        setFoodBannerData(null)
    }
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }

<<<<<<< HEAD
    const bannerSettings = {
        infinite: bannerData?.length > 3 ? true : false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        nextArrow: hoverOn && <HandleNext />,
        prevArrow: hoverOn && <HandlePrev />,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: bannerData?.length > 3 ? true : false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: bannerData?.length > 3 ? true : false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    infinite: bannerData?.length > 3 ? true : false,
                    slidesToScroll: 1,
                    autoplay: true,
                    // dots: true
                },
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: bannerData?.length > 3 ? true : false,
                    dots: true,
                    autoplay: true,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    autoplay: true,
                },
            },
        ],
    }

    return (
        <CustomStackFullWidth
            sx={{ 
                paddingTop: { xs: bannerData?.length > 0 && '15px', md: bannerData?.length > 0 && '10px' }, 
                paddingBottom: { xs: "30px", md: "20px" } 
            }}
        >
            {!bannerIsLoading ? (
                <SliderCustom
                    //languageDirection={languageDirection}
                    gap='.8rem'
                    onMouseEnter={() => setHoverOn(true)}
                    onMouseLeave={() => setHoverOn(false)}
                >
=======
    return (
        <CustomStackFullWidth
            sx={{ paddingTop: bannerData?.length > 0 && '30px' }}
        >
            {banners ? (
                <SliderCustom languageDirection={languageDirection}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <Slider {...bannerSettings}>
                        {bannerData?.slice(0, 8).map((banner) => {
                            return (
                                <BannerCard
                                    banner={banner}
                                    key={banner?.id}
                                    handleBannerClick={handleBannerClick}
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                    handleModalClose={handleModalClose}
                                    FoodBannerData={FoodBannerData}
                                />
                            )
                        })}
                    </Slider>
                </SliderCustom>
            ) : (
                <SliderCustom>
                    <Slider {...bannerSettings}>
                        <Skeleton
                            maxWidth="390px"
                            width="100%"
                            height="151px"
                            variant="rectangular"
                        />
                        <Skeleton
                            maxWidth="390px"
                            width="100%"
                            height="151px"
                            variant="rectangular"
                        />
                        <Skeleton
                            maxWidth="390px"
                            width="100%"
                            height="151px"
                            variant="rectangular"
                        />
                    </Slider>
                </SliderCustom>
            )}
            {FoodBannerData && openModal && (
                <FoodDetailModal
                    product={FoodBannerData}
                    image={`${global?.base_urls?.product_image_url}/${FoodBannerData?.image}`}
                    open={openModal}
                    handleModalClose={handleModalClose}
                    setOpen={setOpenModal}
                    currencySymbolDirection={currencySymbolDirection}
                    currencySymbol={currencySymbol}
                    digitAfterDecimalPoint={digitAfterDecimalPoint}
                    handleBadge={handleBadge}
                />
            )}
        </CustomStackFullWidth>
    )
}

export default Banner
