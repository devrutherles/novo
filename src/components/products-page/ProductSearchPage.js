import React, { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import { ProductsApi } from '../../hooks/react-query/config/productsApi'
import Loading from '../custom-loading/Loading'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'

import SearchFilterWithResults from './SearchFilterWithResults'
import Skeleton from '@mui/material/Skeleton'
import { getFilterChoices } from './getFilterChoices'
import Meta from '../Meta'
import { onErrorResponse } from '../ErrorResponse'
import CustomContainer from '../container'
import { RestaurantsApi } from '../../hooks/react-query/config/restaurantApi'
import { searchMockData } from './SearchMockData'
<<<<<<< HEAD
import { setFilterbyByDispatch, setFoodOrRestaurant } from "../../redux/slices/searchFilter";
import { setSearchTagData } from "../../redux/slices/searchTagSlice";
=======
import { setFilterbyByDispatch } from '../../redux/slices/searchFilter'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const ProductSearchPage = ({
    product_type,
    configData,
    query,
    page,
    restaurantType,
<<<<<<< HEAD
                               tags
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const dispatch = useDispatch()
    const { global } = useSelector((state) => state.globalSettings)
    const router = useRouter()
    const [type, setType] = useState('all')
<<<<<<< HEAD
    const {searchTagData,selectedValue,selectedName}=useSelector((state) => state.searchTags)
    // const pageLimitFromAdmin = global.
    const [page_limit, setPageLimit] = useState(15)
    const [offset, setOffset] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    //const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
    const { filterData,foodOrRestaurant } = useSelector((state) => state.searchFilterStore)
    const [checkfilter, setCheckfilter] = useState(false)
    const [pageData, setPageData] = useState({})
    const [searchOrPage, setSearchOrPage] = useState({})
    const [totalData,setTotalData] = useState(null)
    const activeFilters = searchTagData.filter((item) => item.isActive === true)
=======
    // const pageLimitFromAdmin = global.
    const [page_limit, setPageLimit] = useState(60)
    const [offset, setOffset] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [foodOrRestaurant, setFoodOrRestaurant] = useState('products')
    const { filterData } = useSelector((state) => state.searchFilterStore)
    const [checkfilter, setCheckfilter] = useState(false)
    const [pageData, setPageData] = useState({})
    const [searchOrPage, setSearchOrPage] = useState({})
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const apiKey =
        foodOrRestaurant === 'products'
            ? 'products-search'
            : 'restaurant-search'
    const handleAPiCallOnSuccess = (res) => {
        if (restaurantType) {
<<<<<<< HEAD
            dispatch(setFoodOrRestaurant('restaurants'))
=======
            setFoodOrRestaurant('restaurants')
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            setPageData({
                ...res,
                data: {
                    ...res,
                    restaurants: res.data,
                    total_size: res?.data?.length,
                },
            })
            setSearchOrPage({
                ...res,
                data: {
                    ...res,
                    restaurants: res.data,
                    total_size: res?.data?.length,
                },
            })
        } else {
            if (page) {
<<<<<<< HEAD
                dispatch(setFoodOrRestaurant('restaurants'))
            }
            setPageData(res)
            setSearchOrPage(res)
        }
        setTotalData(res?.data?.total_size)
=======
                setFoodOrRestaurant('products')
            }

            setPageData(res)
            setSearchOrPage(res)
        }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    }

    const { isLoading, data, isError, error, refetch, isRefetching } = useQuery(
        [apiKey, foodOrRestaurant, searchValue, offset, page_limit],
        () =>
            ProductsApi.productSearch(
                foodOrRestaurant,
                searchValue,
                offset,
<<<<<<< HEAD
                page_limit,
                filterData
            ),
        {
            retry:1,
=======
                page_limit
            ),
        {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            enabled: false,
            onSuccess: handleAPiCallOnSuccess,
            onError: onErrorResponse,
        }
    )
<<<<<<< HEAD
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    //POPULAR AND BEST REVIEW FOOD API
    const {
        isLoading: popularFoodisLoading,
        data: popularData,
        refetch: popularRefetch,
    } = useQuery(
        ['popular-food', offset, page_limit, type],
        () => ProductsApi.products(page, offset, page_limit, type),
        {
            enabled: false,
            onSuccess: handleAPiCallOnSuccess,
        }
    )
    const {
        isLoading: restaurantIsLoading,
        data: restaurantData,
        refetch: restaurantRefetch,
    } = useQuery(
        [`restaurant-list`, restaurantType],
        () => RestaurantsApi.typeWiseRestaurantList({ restaurantType, type }),
        {
            enabled: false,
            onSuccess: handleAPiCallOnSuccess,
            onError: onErrorResponse,
        }
    )

    useEffect(() => {
        if (restaurantType !== undefined) {
            restaurantRefetch()
        }
<<<<<<< HEAD
    }, [restaurantType,offset])
=======
    }, [restaurantType])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        if (page !== undefined) {
            popularRefetch()
        }
<<<<<<< HEAD
    }, [page,offset])

=======
    }, [page])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        if (query || page || restaurantType) {
            setSearchValue(query)
        } else {
<<<<<<< HEAD
            if(tags) {
                setSearchValue(null)

            }else{
                router.push('/home')
            }
        }
    }, [query,tags])



    useEffect(() => {
        if(activeFilters?.length===0 && !query && !page && !restaurantType && !searchValue){
            router.push('/home')
        }
    }, [searchTagData]);
    useEffect(async () => {
        if(searchValue){
            await refetch()
        }else if(tags && page){
            await refetch()
        }else if(tags){
            if(activeFilters?.length>0){
                await refetch()
            }
        }

    }, [searchValue,filterData,tags,offset])
=======
            let searchValues = []
            if (typeof window !== 'undefined') {
                searchValues = JSON.parse(
                    localStorage.getItem('searchedValues')
                )
                if (searchValues?.length > 0 && searchValues[0]) {
                    setSearchValue(searchValues[0])
                } else {
                    router.push('/home')
                }
            }
        }
    }, [query])
    useEffect(async () => {
        if (searchValue !== '' && !page && !restaurantType) {
            await refetch()
        }
    }, [searchValue])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        setOffset(1)
        if (searchValue !== undefined) {
            refetch()
        }
    }, [foodOrRestaurant])

    if (isError) {
        return <h1>{error.messages}</h1>
    }
    //const searchOrPage = All ? popularData : data
    useEffect(() => {
        handleFilteredData()
    }, [checkfilter])

    const handleFilter = () => {
        setCheckfilter((prevState) => !prevState)
    }
    const handleClearAll = async () => {
        await refetch()
    }

    const handleFilteredData = () => {
        let filteredData = getFilterChoices(
            filterData,
            searchOrPage,
            foodOrRestaurant
        )

        setPageData({
            ...searchOrPage,
            data:
                foodOrRestaurant === 'products'
                    ? {
                          ...pageData?.data,
                          products: filteredData,
                          total_size: filteredData?.length,
                      }
                    : {
                          ...pageData.data,
                          restaurants: filteredData,
                          total_size: filteredData?.length,
                      },
        })
    }

<<<<<<< HEAD
    useEffect(() => {
        const temPage=page==="most-reviewed"?"rating":page
        const temRestaurantType=restaurantType==="latest"?"new_arrivals":restaurantType
        const newArr = searchTagData.map((item) =>
            item.value === (temPage ||temRestaurantType) ? { ...item, isActive: true } : item
        );
        dispatch(setSearchTagData(newArr))
    }, [page,restaurantType]);
    useEffect(() => {
        setOffset(1)
    }, [searchTagData,selectedName,searchValue]);

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            <Meta
                title={`${searchValue ? searchValue : 'Searching...'} on ${
                    configData?.business_name
                }`}
            />
            <CustomStackFullWidth mb="5rem" sx={{ minHeight: '70vh' }}>
                {pageData && (
                    <SearchFilterWithResults
                        searchValue={searchValue}
                        foodOrRestaurant={foodOrRestaurant}
                        setFoodOrRestaurant={setFoodOrRestaurant}
                        isLoading={isLoading}
                        isNetworkCalling={isRefetching}
                        data={pageData}
                        page_limit={page_limit}
                        offset={offset}
                        setOffset={setOffset}
                        global={global}
                        handleFilter={handleFilter}
                        handleClearAll={handleClearAll}
                        page={page === 'most-reviewed' ? 'most_reviewed' : page}
                        popularFoodisLoading={popularFoodisLoading}
                        restaurantType={restaurantType}
                        restaurantIsLoading={restaurantIsLoading}
<<<<<<< HEAD
                        totalData={totalData}

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    />
                )}
            </CustomStackFullWidth>
        </>
    )
}

export default ProductSearchPage
