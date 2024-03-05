import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
<<<<<<< HEAD

import { Grid, Stack, useMediaQuery } from "@mui/material";
import FoodOrRestaurant from './FoodOrRestaurant'
import ProductList from './ProductList'
import RestaurantsData from '../category/RestaurantsData'
import CustomEmptyResult from '../empty-view/CustomEmptyResult'
import { useTheme } from '@mui/material/styles'
import { AnimationDots } from './AnimationDots'
import { noFoodFoundImage, noRestaurantsImage } from '../../utils/LocalImages'
import CustomePagination from "../pagination/Pagination";
=======
import SearchResult from './SearchResult'
import { Grid, useMediaQuery } from '@mui/material'
import FoodOrRestaurant from './FoodOrRestaurant'

import ProductList from './ProductList'
import CustomShimmerForBestFood from '../CustomShimmer/CustomShimmerForBestFood'
import RestaurantsData from '../category/RestaurantsData'
import FilterWithSideDrawer from './FilterWithSideDrawer'
import CustomEmptyResult from '../empty-view/CustomEmptyResult'
import Skeleton from '@mui/material/Skeleton'
import noData from '../../../public/static/no-data-images/no food.png'
import noRestaurants from '../../../public/static/no-data-images/no restaurants.png'
import { useRouter } from 'next/router'
import { foodCount } from '../../utils/customFunctions'
import { useTheme } from '@mui/material/styles'
import { AnimationDots } from './AnimationDots'
import { noFoodFoundImage, noRestaurantsImage } from '../../utils/LocalImages'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const SearchFilterWithResults = ({
    searchValue,
    count,
    foodOrRestaurant,
    setFoodOrRestaurant,
    data,
    isLoading,
    offset,
    page_limit,
    setOffset,
    global,
    handleFilter,
    handleClearAll,
    isNetworkCalling,
    popularFoodisLoading,
    restaurantIsLoading,
    page,
<<<<<<< HEAD
    restaurantType, totalData

=======
    restaurantType,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const theme = useTheme()

    return (
        <CustomStackFullWidth
            spacing={2}
            sx={{
                minHeight: '53vh',
<<<<<<< HEAD
                marginTop: page || restaurantType ? '0px' : '20px',
            }}
        >
            <Grid container gap="15px">
=======
                marginTop: page || restaurantType ? '0px' : '-35px',
            }}
        >
            <Grid container>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                <Grid item xs={12} sm={12} md={12} align="center">
                    {!page && !restaurantType && (
                        <FoodOrRestaurant
                            foodOrRestaurant={foodOrRestaurant}
                            setFoodOrRestaurant={setFoodOrRestaurant}
                        />
                    )}
                </Grid>
<<<<<<< HEAD
=======

                <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    justifyContent="space-between"
                    sx={{
                        borderBottom: `1px solid ${theme.palette.neutral[300]}`,
                        paddingBottom: '10px',
                        paddingTop: '1.5rem',
                    }}
                >
                    <FilterWithSideDrawer
                        isLoading={isLoading}
                        handleFilter={handleFilter}
                        handleClearAll={handleClearAll}
                        foodOrRestaurant={foodOrRestaurant}
                        count={
                            foodOrRestaurant === 'products'
                                ? foodCount(data?.data?.products)
                                : data?.data?.total_size
                        }
                        isNetworkCalling={isNetworkCalling}
                        page={page}
                        restaurantType={
                            restaurantType === 'latest' ? 'new' : restaurantType
                        }
                    />
                </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    spacing={2}
                    paddingTop="1rem"
                >
<<<<<<< HEAD
                    {(foodOrRestaurant === 'products' || page)  && (
                        <>
                            {(isLoading || isNetworkCalling) ?
                                <Stack
                                 width="100%"
                                 minHeight="500px"

                                > <AnimationDots align="center" /></Stack>
                            :
                                <>
                                    {data?.data?.products?.length > 0 && (
                                        <ProductList
                                            product_list={data?.data}
                                            offset={offset}
                                            page_limit={page_limit}
                                            setOffset={setOffset}
                                        />
                                    )}
                                    {data?.data?.products?.length === 0 &&  (
                                        <CustomEmptyResult
                                            label="No food found"
                                            image={noFoodFoundImage}
                                        />
                                    )}
                                </>
                            }

=======
                    {(foodOrRestaurant === 'products' || page) && (
                        <>
                            {data?.data?.products?.length > 0 && !isLoading && (
                                <ProductList
                                    product_list={data?.data}
                                    offset={offset}
                                    page_limit={page_limit}
                                    setOffset={setOffset}
                                />
                            )}
                            {data?.data?.products?.length === 0 && (
                                <CustomEmptyResult
                                    label="No food found"
                                    image={noFoodFoundImage}
                                />
                            )}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        </>
                    )}
                    {foodOrRestaurant === 'restaurants' && (
                        <>
<<<<<<< HEAD
                            {(isLoading || isNetworkCalling)?(  <Stack
                                width="100%"
                                minHeight="500px"

                            > <AnimationDots align="center" /></Stack>):<>
                                {data && !isLoading && (
                                    <RestaurantsData
                                        resData={data}
                                        offset={offset}
                                        page_limit={page_limit}
                                        setOffset={setOffset}
                                        global={global}
                                        restaurantType={restaurantType}
                                    />
                                )}
                                {data?.data?.restaurants?.length === 0 && (
                                    <CustomEmptyResult
                                        label="No restaurant found"
                                        image={noRestaurantsImage}
                                    />
                                )}
                            </>}

                        </>
                    )}
                </Grid>
                {/*{totalData>0 && totalData>page_limit && !isLoading&&*/}
                {/*    <Grid item md={12} xs={12} sm={12}>*/}
                {/*    <CustomePagination page_limit={page_limit}*/}
                {/*                       setOffset={setOffset}*/}
                {/*                       offset={offset}*/}
                {/*                       total_size={totalData}*/}
                {/*    />*/}
                {/*   </Grid>*/}
                {/*}*/}

=======
                            {data && !isLoading && (
                                <RestaurantsData
                                    resData={data}
                                    offset={offset}
                                    page_limit={page_limit}
                                    setOffset={setOffset}
                                    global={global}
                                    restaurantType={restaurantType}
                                />
                            )}
                            {data?.data?.restaurants?.length === 0 && (
                                <CustomEmptyResult
                                    label="No restaurant found"
                                    image={noRestaurantsImage}
                                />
                            )}
                        </>
                    )}
                    {isLoading && <AnimationDots align="center" />}
                    {isNetworkCalling && <AnimationDots align="center" />}
                    {popularFoodisLoading && <AnimationDots align="center" />}
                    {restaurantIsLoading && <AnimationDots align="center" />}
                </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            </Grid>
        </CustomStackFullWidth>
    )
}

SearchFilterWithResults.propTypes = {}

export default SearchFilterWithResults
