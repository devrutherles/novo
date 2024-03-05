import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import FoodOrRestaurant from '../../components/products-page/FoodOrRestaurant'
import ProductList from '../products-page/ProductList'
import { useTranslation } from 'react-i18next'
import { ButtonGroup, Grid, NoSsr, Popover, Typography } from "@mui/material";
import FoodNavigation from '../restaurant-details/foodSection/FoodNavigation'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { CategoryApi } from '../../hooks/react-query/config/categoryApi'
import CustomShimmerForBestFood from '../CustomShimmer/CustomShimmerForBestFood'
import CustomShimmerRestaurant from '../CustomShimmer/CustomShimmerRestaurant'
import {
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
import RestaurantsData from './RestaurantsData'
import CustomEmptyResult from '../empty-view/CustomEmptyResult'
import { noFoodFoundImage, noRestaurantsImage } from '../../utils/LocalImages'
import CustomPageTitle from "../CustomPageTitle";
import CustomDivider from "../CustomDivider";
import FilterButton from "../Button/FilterButton";
import RestaurantFilterCard from "../home/restaurant/RestaurantFilterCard";
import { mockData } from "./categoryFilterData";
import { handleFilterData } from "./helper";
import { setFoodOrRestaurant } from "../../redux/slices/searchFilter";

=======
import { Box, Container, Tabs } from '@material-ui/core'
import FoodOrRestaurant from '../../components/products-page/FoodOrRestaurant'
import ProductList from '../products-page/ProductList'
import { useTranslation } from 'react-i18next'
import { ButtonGroup, Grid, NoSsr, Typography } from '@mui/material'
import FoodNavigation from '../restaurant-details/foodSection/FoodNavigation'
import { RestaurantDetailsNavButton } from '../food-card/FoodCard.style'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { CategoryApi } from '../../hooks/react-query/config/categoryApi'
import RestaurantList from '../restaurant-page/RestaurantList'
import RestaurantCard from '../restaurant-details/RestaurantCard'
import RestaurantBoxCard from '../restaurant-details/RestaurantBoxCard'
import CustomShimmerForBestFood from '../CustomShimmer/CustomShimmerForBestFood'
import CustomePagination from '../pagination/Pagination'
import CustomShimmerRestaurant from '../CustomShimmer/CustomShimmerRestaurant'
import noData from '../../../public/static/no-data-images/no food.png'
import {
    CustomStackFullWidth,
    FlexContainerCenter,
} from '../../styled-components/CustomStyles.style'
import FilterButtons from './FilterButtons'
import GroupButtons from '../restaurant-details/foodSection/GroupButtons'
import CustomShimmerForCard from '../CustomShimmer/CustomShimmerForCard'
import FoodCard from '../food-card/FoodCard'
import Image from 'next/image'
import RestaurantsData from './RestaurantsData'
import noRestaurants from '../../../public/static/no-data-images/no restaurants.png'
import CustomEmptyResult from '../empty-view/CustomEmptyResult'
import { RTL } from '../RTL/RTL'
import no_restaurant_image from '../../../public/static/no-data-images/no restaurants.png'
import no_food_found_image from '../../../public/static/no-data-images/no food.png'
import { noFoodFoundImage, noRestaurantsImage } from '../../utils/LocalImages'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const CategoryDetailsPage = ({
    data,
    id,
    category_id,
    setCategoryId,
    resData,
    offset,
    page_limit,
    type,
    setOffset,
    setType,
<<<<<<< HEAD
    filterByData,
    setFilterByData, name, priceAndRating, setPriceAndRating, isLoading
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [highestPrice, setHighestPrice] = useState(0)
    const open = Boolean(anchorEl)
    //const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
    // const [priceAndRating,setPriceAndRating] = useState({
    //     price:'',
    //     rating:''
    // })
    const [checkedFilterKey, setCheckedFilterKey] = useState(
        mockData
    )
    const { foodOrRestaurant } = useSelector((state) => state.searchFilterStore)
    const [forFilter, setForFilter] = useState(false)
    const [isFirstRender, setIsFirstRender] = useState(true);
    //const [offset, setOffSet] = useState(1)
    //const [filterByData, setFilterByData] = useState({})
    const [catetoryMenus, setCategoryMenus] = useState([])
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()

=======
}) => {
    const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
    const [catetoryMenus, setCategoryMenus] = useState([])
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const {
        isLoading: isLoadingChilds,
        data: childesData,
        isError,
        error,
        refetch,
    } = useQuery([`category-Childes`, id], () =>
        CategoryApi.categoriesChildes(id)
    )
    useEffect(() => {
        if (childesData && id?.length > 0) {
<<<<<<< HEAD
=======
            // const catetoryMenu = childesData?.data?.filter((item) =>
            //     id.includes(item.id)
            // )

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            setCategoryMenus(childesData.data)
        }
        setCategoryId(id)
    }, [childesData, id])
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }
<<<<<<< HEAD
    const handleDropClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleDropClose = () => {
        setAnchorEl(null)
    }
    useEffect(() => {
        handleFilterData(checkedFilterKey, setFilterByData, setOffset, setForFilter)
    }, [checkedFilterKey])

    const handlePrice = (value) => {
        setPriceAndRating({
            ...priceAndRating,
            price: value,
        })
        setForFilter(true)
    }
    const handleChangeRatings = (value) => {
        setPriceAndRating({
            ...priceAndRating,
            rating: value,
        })
        setForFilter(true)
    }
    const getFoodOrRestaurant = (value) => {
        setFoodOrRestaurant(value)

    }
    useEffect(() => {
        if (foodOrRestaurant === "restaurants") {
            setOffset(1)
        }
    }, [foodOrRestaurant]);
    useEffect(() => {
        if (data && isFirstRender) {
            //const getHighestPrice = Math?.max(...data?.data?.products?.map(food => food.price));
            setHighestPrice(data?.data?.max_price);
            setIsFirstRender(false); // Set isFirstRender to false after the first render
        }
    }, [data, isFirstRender]);




    return (
        <NoSsr>
            <Grid container spacing={{ xs: 1, sm: 3, md: 2 }}>
                <Grid item md={12} sm={12} xs={12} align="center">
                    <CustomPageTitle title={`${t("Search Result for")} "${name}"`} textAlign="center" />
                </Grid>
=======
    return (
        <>
            <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                <Grid item xs={12} sm={12} md={12} align="center">
                    <NoSsr>
                        <FoodOrRestaurant
                            foodOrRestaurant={foodOrRestaurant}
                            setFoodOrRestaurant={setFoodOrRestaurant}
                        />
<<<<<<< HEAD
                        <CustomDivider marginTop="0px" />
                    </NoSsr>
                </Grid>
                <Grid item xs={12} sm={12} md={12} align="left" mt="0rem">
                    <CustomStackFullWidth direction="row" justifyContent="space-between" alignItems="center">
                        <FoodNavigation
                            catetoryMenus={catetoryMenus}
                            setCategoryId={setCategoryId}
                            category_id={category_id}
                            id={id}
                        />
                        <FilterButton
                            id="fade-button"
                            handleClick={handleDropClick}
                        //activeFilters={activeFilters}

                        />
                    </CustomStackFullWidth>

=======
                    </NoSsr>
                </Grid>
                <Grid item xs={12} sm={12} md={12} align="left">
                    <FoodNavigation
                        catetoryMenus={catetoryMenus}
                        setCategoryId={setCategoryId}
                        category_id={category_id}
                        id={id}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} align="center">
                    <CustomStackFullWidth
                        alignItems="center"
                        justifyContent="center"
                    >
                        <RTL direction={languageDirection}>
                            <GroupButtons setType={setType} type={type} />
                        </RTL>
                    </CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
<<<<<<< HEAD
                    spacing={{ xs: 1, md: foodOrRestaurant === 'products' ? 2 : 4 }}
=======
                    spacing={{ xs: 1, md: 2 }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                >
                    {foodOrRestaurant === 'products' &&
                        (data?.data ? (
                            <>
                                <ProductList
<<<<<<< HEAD
                                    product_list={data?.data}
=======
                                    product_list={data?.data?.data}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    offset={offset}
                                    page_limit={page_limit}
                                    setOffset={setOffset}
                                />
<<<<<<< HEAD
                                {data?.data?.products.length === 0 && (
=======
                                {data?.data?.data.products.length === 0 && (
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    <CustomEmptyResult
                                        image={noFoodFoundImage}
                                        label=" No Food Found"
                                    />
                                )}
                            </>
                        ) : (
                            <CustomShimmerForBestFood />
                        ))}

                    {foodOrRestaurant === 'restaurants' &&
                        (resData ? (
                            <>
                                <RestaurantsData
                                    resData={resData}
                                    offset={offset}
                                    page_limit={page_limit}
                                    setOffset={setOffset}
                                    global={global}
                                />
                                {resData.data.total_size === 0 && (
                                    <CustomStackFullWidth sx={{ mt: '10px' }}>
                                        <CustomEmptyResult
                                            image={noRestaurantsImage}
                                            label="No Restaurants Found"
                                        />
                                    </CustomStackFullWidth>
                                )}
                            </>
                        ) : (
                            <>
                                <CustomShimmerRestaurant />
                            </>
                        ))}
                </Grid>
            </Grid>
<<<<<<< HEAD
            <Popover
                onClose={() => handleDropClose()}
                id="fade-button"
                open={open}
                anchorEl={anchorEl}
                disableScrollLock={true}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}

                sx={{
                    zIndex: 999,
                }}
                disableRestoreFocus
            >
                <RestaurantFilterCard
                    mockData={mockData}
                    rowWise
                    checkboxData={checkedFilterKey}
                    handleDropClose={handleDropClose}
                    anchorEl={anchorEl}
                    highestPrice={highestPrice}
                    setFilterByData={setFilterByData}
                    //handleFilter={handleFilter}
                    //handleClearAll={handleClearAll}
                    setCheckedFilterKey={setCheckedFilterKey}
                    foodOrRestaurant={foodOrRestaurant}
                    handlePrice={handlePrice}
                    handleChangeRatings={handleChangeRatings}
                    priceAndRating={priceAndRating}
                />
            </Popover>
        </NoSsr>
=======
        </>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default CategoryDetailsPage
