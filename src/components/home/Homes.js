<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

import { useWishListGet } from "@/hooks/react-query/config/wish-list/useWishListGet";
import { setWishList } from "@/redux/slices/wishList";
import { useDispatch, useSelector } from "react-redux";
import DeliveryPlace from "../navbar/DeliveryPlace";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ManageSearch from "../navbar/second-navbar/ManageSearch";
import { useRouter } from "next/router";
import { CustomStackFullWidth } from "@/styled-components/CustomStyles.style";
import PushNotificationLayout from "../PushNotificationLayout";
import { onErrorResponse, onSingleErrorResponse } from "../ErrorResponse";
import { useQuery } from "react-query";
import { BannerApi } from "@/hooks/react-query/config/bannerApi";
import { CategoryApi } from "../../hooks/react-query/config/categoryApi";
import { CampaignApi } from "@/hooks/react-query/config/campaignApi";
import {
    MostReviewedApi,
    PopularFoodNearbyApi
} from "@/hooks/react-query/config/productsApi";
import { RestaurantsApi } from "../../hooks/react-query/config/restaurantApi";
import FeatureCatagories from "./featured-categories/FeatureCatagories";
import FoodCampaign from "./food-campaign/FoodCampaign";
import BestReviewedFood from "./food-campaign/best-reviewed-foods/BestReviewedFood";
import PopularResturant from "./PopularResturant";
import NearbyPopularFood from "./new-popular-food/NearbyPopularFood";
import Restaurant from "./Restaurant";
import Cuisines from "./cuisines";
import HeroSectionWithSearch from "./hero-section-with-search";
import CustomContainer from "../container";
import ProductSearchPage from "../products-page/ProductSearchPage";
import Banner from "./Banner";
import Products from "../products-page/Products";
=======
import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Container from '@mui/material/Container'

import { useWishListGet } from '../../hooks/react-query/config/wish-list/useWishListGet'
import { setWishList } from '../../redux/slices/wishList'
import { useDispatch, useSelector } from 'react-redux'
import DeliveryPlace from '../navbar/DeliveryPlace'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import ManageSearch from '../navbar/second-navbar/ManageSearch'
import { useRouter } from 'next/router'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import PushNotificationLayout from '../PushNotificationLayout'
import { onErrorResponse, onSingleErrorResponse } from '../ErrorResponse'
import { useQuery } from 'react-query'
import { BannerApi } from '../../hooks/react-query/config/bannerApi'
import { CategoryApi } from '../../hooks/react-query/config/categoryApi'
import { CampaignApi } from '../../hooks/react-query/config/campaignApi'
import {
    MostReviewedApi,
    PopularFoodNearbyApi,
} from '../../hooks/react-query/config/productsApi'
import { RestaurantsApi } from '../../hooks/react-query/config/restaurantApi'
import FeatureCatagories from './featured-categories/FeatureCatagories'
import FoodCampaign from './food-campaign/FoodCampaign'
import BestReviewedFood from './food-campaign/best-reviewed-foods/BestReviewedFood'
import PopularResturant from './PopularResturant'
import NearbyPopularFood from './new-popular-food/NearbyPopularFood'
import Restaurant from './Restaurant'
import Cuisines from './cuisines'
import HeroSectionWithSearch from './hero-section-with-search'
import CustomContainer from '../container'
import ProductSearchPage from '../products-page/ProductSearchPage'
import Banner from './Banner'
import Products from '../products-page/Products'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    setBanners,
    setBestReviewedFood,
    setCampaignFoods,
<<<<<<< HEAD
    setPopularFood
} from "@/redux/slices/storedData";
import VisitAgain from "./visit-again";
import SearchFilterTag from "./Search-filter-tag/SearchFilterTag";
import { Typography } from "@mui/material";
import { t } from "i18next";
import DifferentFoodCompontent from "./DefferntFoodCompontent";
import NewRestaurant from "./NewRestaurant";
import { Box } from "@mui/system";
import PromotionalBanner from "./PromotionalBanner";
import { setSearchTagData, setSelectedName, setSelectedValue } from "@/redux/slices/searchTagSlice";
import { setFilterbyByDispatch, setFoodOrRestaurant } from "@/redux/slices/searchFilter";


const Homes = ({ configData }) => {

    const [fetchedData, setFetcheedData] = useState({});
    const { searchTagData } = useSelector((state) => state.searchTags)
    const router = useRouter();
    const { query, page, restaurantType, tags } = router.query;
    const { campaignFoods, banners, bestReviewedFoods, popularFood } =
        useSelector((state) => state.storedData);

    const dispatch = useDispatch();
    const onSuccessHandler = (response) => {
        setFetcheedData(response);
        dispatch(setWishList(fetchedData));
    };
    const { refetch } = useWishListGet(onSuccessHandler);
    let getToken = undefined;
    if (typeof window !== "undefined") {
        getToken = localStorage.getItem("token");
    }
    useEffect(() => {
        if (getToken) {
            refetch().then();
        }
    }, [getToken, fetchedData]);
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    let zoneid = undefined;
    if (typeof window !== "undefined") {
        zoneid = localStorage.getItem("zoneid");
    }
    const { data, refetch: refetchBannerData, isLoading: bannerIsLoading } = useQuery(
        ["banner-image"],
=======
    setPopularFood,
} from '../../redux/slices/storedData'

const Homes = ({ configData }) => {
    const [fetchedData, setFetcheedData] = useState({})
    const router = useRouter()
    const { query, page, restaurantType } = router.query
    const { campaignFoods, banners, bestReviewedFoods, popularFood } =
        useSelector((state) => state.storedData)

    const dispatch = useDispatch()
    const onSuccessHandler = (response) => {
        setFetcheedData(response)
        dispatch(setWishList(fetchedData))
    }
    const { refetch } = useWishListGet(onSuccessHandler)
    let getToken = undefined
    if (typeof window !== 'undefined') {
        getToken = localStorage.getItem('token')
    }
    useEffect(() => {
        if (getToken) {
            refetch().then()
        }
    }, [getToken, fetchedData])
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    let zoneid = undefined
    if (typeof window !== 'undefined') {
        zoneid = localStorage.getItem('zoneid')
    }
    const { data, refetch: refetchBannerData } = useQuery(
        ['banner-image'],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        BannerApi.bannerList,
        {
            enabled: false,
            staleTime: 1000 * 60 * 8,
<<<<<<< HEAD
            onError: onSingleErrorResponse
        }
    );
=======
            onError: onSingleErrorResponse,
        }
    )
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    const {
        data: campaignData,
        refetch: refetchCampaignData,
<<<<<<< HEAD
        isLoading: campaignIsloading
    } = useQuery(["campaign"], CampaignApi.campaign, {
        enabled: false,
        onError: onSingleErrorResponse,
        staleTime: 1000 * 60 * 8,
        cacheTime: 8 * 60 * 1000
    });
    const {
        data: mostReviewedData,
        refetch: refetchMostReviewed,
        isLoading
    } = useQuery(["most-review-product"], MostReviewedApi.reviewed, {
        enabled: false,
        onError: onSingleErrorResponse
    });
=======
        isLoading: campaignIsloading,
    } = useQuery(['campaign'], CampaignApi.campaign, {
        enabled: false,
        onError: onSingleErrorResponse,
        staleTime: 1000 * 60 * 8,
        cacheTime: 8 * 60 * 1000,
    })
    const {
        data: mostReviewedData,
        refetch: refetchMostReviewed,
        isLoading,
    } = useQuery(['most-review-product'], MostReviewedApi.reviewed, {
        enabled: false,
        onError: onSingleErrorResponse,
    })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    const {
        isLoading: isLoadingNearByPopularRestaurantData,
        data: nearByPopularRestaurantData,
<<<<<<< HEAD
        refetch: refetchNearByPopularRestaurantData
    } = useQuery(["popular-food"], PopularFoodNearbyApi.popularFood, {
        enabled: false,
        onError: onSingleErrorResponse
    });
=======
        refetch: refetchNearByPopularRestaurantData,
    } = useQuery(['popular-food'], PopularFoodNearbyApi.popularFood, {
        enabled: false,
        onError: onSingleErrorResponse,
    })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    useEffect(async () => {
        if (
            banners?.banners?.length === 0 &&
            banners?.campaigns?.length === 0
        ) {
<<<<<<< HEAD
            await refetchBannerData();
        }

        if (campaignFoods?.length === 0) {
            await refetchCampaignData();
        }
        if (bestReviewedFoods?.length === 0) {
            await refetchMostReviewed();
        }
        if (popularFood?.length === 0) {
            await refetchNearByPopularRestaurantData();
        }
    }, []);
    const iSSearchValue = false;
    useEffect(() => {
        if (campaignData?.data) {
            dispatch(setCampaignFoods(campaignData?.data));
        }
        if (data) {
            dispatch(setBanners(data?.data));
        }
        if (mostReviewedData) {
            dispatch(setBestReviewedFood(mostReviewedData?.data?.products));
=======
            await refetchBannerData()
        }

        if (campaignFoods?.length === 0) {
            await refetchCampaignData()
        }
        if (bestReviewedFoods?.length === 0) {
            await refetchMostReviewed()
        }
        if (popularFood?.length === 0) {
            await refetchNearByPopularRestaurantData()
        }
    }, [])
    const iSSearchValue = false
    useEffect(() => {
        if (campaignData?.data) {
            dispatch(setCampaignFoods(campaignData?.data))
        }
        if (data) {
            dispatch(setBanners(data?.data))
        }
        if (mostReviewedData) {
            dispatch(setBestReviewedFood(mostReviewedData?.data?.products))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        }
        if (nearByPopularRestaurantData) {
            dispatch(
                setPopularFood(nearByPopularRestaurantData?.data?.products)
<<<<<<< HEAD
            );
        }
    }, [campaignData, data, mostReviewedData, nearByPopularRestaurantData]);

    useEffect(() => {
        const activeFilters = searchTagData.filter((item) => item.isActive === true)
        if (activeFilters?.length > 0) {
            if (router.asPath === "/home") {
                const newArr = searchTagData.map((item) => ({ ...item, isActive: false }));
                dispatch(setSearchTagData(newArr));
                dispatch(setFoodOrRestaurant('products'))
                dispatch(setSelectedValue(""))
                dispatch(setSelectedName(""))
            }
        }
        dispatch(setFilterbyByDispatch(activeFilters))

    }, [tags,page,restaurantType,query]);
=======
            )
        }
    }, [campaignData, data, mostReviewedData, nearByPopularRestaurantData])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    return (
        <>
            <PushNotificationLayout>
<<<<<<< HEAD
                <CustomContainer>
                    <CustomStackFullWidth sx={{ marginTop: { xs: "60px", md: "130px" }, marginBottom: "10px" }}>
                        <Typography
                            fontSize={{ xs: "16px", md: "20px" }}
                            fontWeight={{
                                xs: "500",
                                md: "700"
                            }}
                            color={theme.palette.neutral[1000]}
                        >{t("Find Best Restaurants and Foods")}</Typography>
                    </CustomStackFullWidth>
                </CustomContainer>
                <SearchFilterTag tags={tags} query={query} page={page} />
                {(query || page || restaurantType || tags) ? (
                    <CustomContainer>
                        <ProductSearchPage
                            tags={tags}
=======
                {/*<DeliveryPlace />*/}
                <CustomStackFullWidth spacing={2}>
                    <HeroSectionWithSearch query={query} page={page} />
                </CustomStackFullWidth>
                <CustomContainer>
                    {query || page || restaurantType ? (
                        <ProductSearchPage
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            configData={configData}
                            query={query}
                            page={page}
                            restaurantType={restaurantType}
                        />
<<<<<<< HEAD
                    </CustomContainer>

                ) : (
                    <>
                        <CustomContainer>
                            <Banner bannerIsLoading={bannerIsLoading}/>
                        </CustomContainer>
                        <Box>
                            <FeatureCatagories height="70px" />
                            <CustomContainer>
                                <VisitAgain />
                            </CustomContainer>
                        </Box>

                        <CustomContainer>
                            <DifferentFoodCompontent
                                campaignIsloading={campaignIsloading}
                                isLoading={isLoading}
                                isLoadingNearByPopularRestaurantData={isLoadingNearByPopularRestaurantData} />
                            <NewRestaurant />
                            <Cuisines />
                            <PromotionalBanner />
                            <Restaurant />
                        </CustomContainer>
                    </>
                )}

            </PushNotificationLayout>
        </>
    );
};

export default Homes;
=======
                    ) : (
                        <>
                            <FoodCampaign isLoading={campaignIsloading} />
                            <Banner />
                            <BestReviewedFood isLoading={isLoading} />
                            <Cuisines />
                            <NearbyPopularFood
                                isLoading={isLoadingNearByPopularRestaurantData}
                            />
                            <Restaurant />
                        </>
                    )}
                </CustomContainer>
            </PushNotificationLayout>
        </>
    )
}

export default Homes
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
