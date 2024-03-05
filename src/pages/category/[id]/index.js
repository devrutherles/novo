import React, { useEffect, useState } from 'react'
import RestaurantDetails from '../../../components/restaurant-details/RestaurantDetails'
import Head from 'next/head'
import Meta from '../../../components/Meta.js'
import CategoryDetailsPage from '../../../components/category/CategoryDetailsPage'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { RestaurantsApi } from '../../../hooks/react-query/config/restaurantApi'
import { CategoryApi } from '../../../hooks/react-query/config/categoryApi'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import { Container } from '@mui/material'
import CustomContainer from '../../../components/container'
<<<<<<< HEAD
import HomeGuard from "../../../components/home-guard/HomeGuard";
const index = () => {
    const [type, setType] = useState('all')
    const [offset, setOffset] = useState(1)
    const [page_limit, setPageLimit] = useState(10)
    const [filterByData, setFilterByData] = useState({})
    const [priceAndRating,setPriceAndRating] = useState({
        price:[],
        rating:0
    })

    const router = useRouter()
    const { id, name } = router.query
    const [category_id, setCategoryId] = useState(id)
    const { isLoading, data, isError, error, refetch } = useQuery(
        [`category-details`, category_id, offset, page_limit, type,filterByData,priceAndRating],
        () =>
            CategoryApi.categoriesDetails(category_id, type, offset, page_limit,filterByData,priceAndRating)
    )
    const { data: resData } = useQuery(
        [`category-detailsRes`, category_id, offset, page_limit, type,filterByData,priceAndRating],
=======
const index = () => {
    const [type, setType] = useState('all')
    const [offset, setOffset] = useState(1)
    const [page_limit, setPageLimit] = useState(50)
    const router = useRouter()
    const { id, name } = router.query

    const [category_id, setCategoryId] = useState(id)
    const { isLoading, data, isError, error, refetch } = useQuery(
        [`category-details`, category_id, offset, page_limit, type],
        () =>
            CategoryApi.categoriesDetails(category_id, type, offset, page_limit)
    )
    const { data: resData } = useQuery(
        [`category-detailsRes`, category_id, offset, page_limit, type],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        () =>
            CategoryApi.categoriesDetailsForRes(
                category_id,
                type,
                offset,
<<<<<<< HEAD
                page_limit,filterByData,priceAndRating
=======
                page_limit
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            )
    )
    useEffect(() => {
        type && setOffset(1)
    }, [type])
<<<<<<< HEAD

    useEffect(() =>{
        setPriceAndRating({...priceAndRating,rating: 0})
    },[id])
    return (
        <HomeGuard>
        <CustomContainer>
            <CustomStackFullWidth
                sx={{ paddingBottom: '1rem', paddingTop: {xs:"2rem",md:"4.5rem" }}}
=======
    return (
        <CustomContainer>
            <CustomStackFullWidth
                sx={{ paddingBottom: '1rem', paddingTop: '2rem' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            >
                <Meta title={name} keyword="" description="" />
                <CategoryDetailsPage
                    id={id}
<<<<<<< HEAD
                    data={data }
=======
                    data={{ data }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    category_id={category_id}
                    setCategoryId={setCategoryId}
                    resData={resData}
                    offset={offset}
                    type={type}
                    setType={setType}
                    page_limit={page_limit}
                    setOffset={setOffset}
<<<<<<< HEAD
                    name={name}
                    filterByData={filterByData}
                    setFilterByData={setFilterByData}
                    priceAndRating={priceAndRating}
                    setPriceAndRating={setPriceAndRating}
                    isLoading={isLoading}

                />
            </CustomStackFullWidth>
        </CustomContainer>
        </HomeGuard>
=======
                />
            </CustomStackFullWidth>
        </CustomContainer>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default index
