<<<<<<< HEAD
import { Box, Chip, Grid, MenuItem, Popover, Select } from "@mui/material";
=======
import { Box, Grid, MenuItem, Select } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantBoxCard from '../restaurant-details/RestaurantBoxCard'
import { useSelector } from 'react-redux'
import { RestaurantsApi } from '../../hooks/react-query/config/restaurantApi'
import { useQuery } from 'react-query'
//import LinearProgress from '@mui/material/LinearProgress'
import CustomePagination from '../pagination/Pagination'
import { useTranslation } from 'react-i18next'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
<<<<<<< HEAD
import { CustomPaperBigCard, CustomStackFullWidth } from "../../styled-components/CustomStyles.style";

import { onErrorResponse } from '../ErrorResponse'
import RestaurantListShimmer from './RestaurantListShimmer'
import PageSearchWithTitle from "../category/PageSearchWithTitle";
import CustomDivider from "../CustomDivider";
import FilterButton from "../Button/FilterButton";
import RestaurantFilterCard from "../home/restaurant/RestaurantFilterCard";
import { mockData } from "./restaurantpageData";
import { handleFilterData } from "../category/helper";
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import 'simplebar-react/dist/simplebar.min.css'
import { Stack } from "@mui/system";
import CustomEmptyResult from "../empty-view/CustomEmptyResult";
import { noRestaurantsImage } from "../../utils/LocalImages";
import CustomShimmerRestaurant from "../CustomShimmer/CustomShimmerRestaurant";
=======
import { CustomPaperBigCard } from '../../styled-components/CustomStyles.style'
import CustomPageTitle from '../CustomPageTitle'
import GroupButtons from '../restaurant-details/foodSection/GroupButtons'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CustomSearch from '../custom-search/CustomSearch'
import { onErrorResponse } from '../ErrorResponse'
import RestaurantListShimmer from './RestaurantListShimmer'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const RestaurantList = () => {
    const { t } = useTranslation()
    const theme = useTheme()
<<<<<<< HEAD
    const [checkedFilterKey, setCheckedFilterKey] = useState(
        mockData
    )
    const [filterByData, setFilterByData] = useState({})
    const [forFilter, setForFilter] = useState(false)
    const [page_limit, setPageLimit] = useState(16)
    const [offset, setOffset] = useState(1)
    const matchesToSmall = useMediaQuery('(min-width:400px)')
    const [searchKey, setSearchKey] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const { global } = useSelector((state) => state.globalSettings)
    const [priceAndRating,setPriceAndRating] = useState({
        price:[],
        rating:0
    })
=======
    const orangeColor = theme.palette.primary.main
    const [alignment, setAlignment] = useState('web')
    const [page_limit, setPageLimit] = useState(16)
    const [offset, setOffset] = useState(1)
    const [type, setType] = useState('all')
    const [filterType, setFilterType] = useState('all')
    const matchesToSmall = useMediaQuery('(min-width:400px)')
    const [reRenderSearch, setRerenderSearch] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const { global } = useSelector((state) => state.globalSettings)

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [languageDirection, setLanguageDirection] = React.useState('ltr')
    useEffect(() => {
        if (localStorage.getItem('direction')) {
            setLanguageDirection(localStorage.getItem('direction'))
        }
    }, [])

<<<<<<< HEAD
    const { isLoading, data, isError, error, refetch,isRefetching } = useQuery(
        ['all-restaurant', offset, page_limit,filterByData,priceAndRating],
=======
    const { isLoading, data, isError, error, refetch } = useQuery(
        ['all-restaurant', offset, page_limit],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        () =>
            RestaurantsApi.restaurants({
                offset,
                page_limit,
<<<<<<< HEAD
                searchKey,
                filterByData,
                priceAndRating
=======
                type,
                filterType,
                searchKey,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            }),
        {
            onError: onErrorResponse,
        }
    )

<<<<<<< HEAD

    useEffect(()=>{
        handleFilterData(checkedFilterKey,setFilterByData,setOffset,setForFilter)
    },[checkedFilterKey])

    useEffect(async () => {
        await refetch()
    }, [searchKey])

=======
    if (data) {
    }
    const handleSelect = (e) => {
        setFilterType(e.target.value)
    }

    useEffect(() => {
        refetch().then()
    }, [filterType])
    useEffect(async () => {
        await refetch()
    }, [type])
    useEffect(async () => {
        await refetch()
    }, [searchKey])
    if (isLoading) {
        return (
            <Box mt={{ xs: '0px', md: '80px' }}>
                <RestaurantListShimmer />
            </Box>
        )
    }

    const handleType = (value) => {
        setType(value)
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleSearchResult = async (values) => {
        if (values === '') {
            await refetch()
            setSearchKey('')
        } else {
            //setType('all')
            setSearchKey(values)
        }
    }

<<<<<<< HEAD
    const handleDropClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleDropClose = () => {
        setAnchorEl(null)
    }
    const getSelectedFilter =  checkedFilterKey?.filter((item) => item?.isActive)
    const handleDelete = (chipItem) => {
        const tempData = checkedFilterKey?.map(
            (items) => items?.value === chipItem?.value ? { ...items, isActive: false } : items
        );
        setCheckedFilterKey(tempData);
    };

    const handleChangeRatings = (value) => {
        setPriceAndRating({
            ...priceAndRating,
            rating: value,
        })
        setForFilter(true)
    }
    return (
        <>
            {languageDirection && (
                <Box mt={{ xs: '4rem', md: '8.5rem' }} mb="1rem">
                    <Grid
                        container
                        spacing={{xs:1,sm:2,md:2}}
=======
    return (
        <>
            {languageDirection && (
                <Box mt={{ xs: '0px', md: '5rem' }} mb="1rem">
                    <Grid
                        container
                        spacing={3}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        alignItems="center"
                        justifyContent="center"
                        mt="1rem"
                    >
<<<<<<< HEAD
                        <Grid item md={12} sm={12} xs={12} >
                            <PageSearchWithTitle title={t("Choose Food from  your Favourite Restaurants")} handleSearchResult={handleSearchResult}
                                                 label="Search restaurants..."
                            />
                        </Grid>
                        <Grid item md={12} align="right" sm={12} xs={12}>
                            <CustomStackFullWidth direction="row" justifyContent="flex-end"   alignItems="center" spacing={1}>
                                <SimpleBar style={{ width: '100%' }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent={{
                                            xs: 'flex-start',
                                            sm: 'flex-start',
                                            md: 'flex-end',
                                        }}
                                        alignItems="center"
                                    >
                                        {getSelectedFilter?.map((item) => (
                                            <Chip
                                                sx={{fontWeight:"400",color:theme.palette.neutral[500],fontSize:"12px",padding:"0px 5px",height:"30px"}}
                                                label={item?.name}
                                                variant="outlined"
                                                onDelete={() => handleDelete(item)}
                                            />
                                        ))}
                                    </Stack>
                                </SimpleBar>
                                <FilterButton
                                    id="fade-button"
                                    handleClick={handleDropClick}
                                />
                            </CustomStackFullWidth>
                        </Grid>
                        <Grid item md={12}>
                            <CustomDivider marginTop="0rem"/>
=======
                        <Grid item xs={12} md={12}>
                            <CustomPageTitle title="Restaurant" />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            justifyContent="center"
                        >
                            <GroupButtons setType={handleType} type={type} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <CustomSearch
                                key={reRenderSearch}
                                handleSearchResult={handleSearchResult}
                                label="Search a restaurant"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            align={
                                languageDirection === 'rtl' ? 'left' : 'right'
                            }
                        >
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    {t('Filter')}
                                </InputLabel>
                                <Select
                                    sx={{ width: '130px', height: '40px' }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterType}
                                    label="Age"
                                    onChange={handleSelect}
                                >
                                    <MenuItem
                                        value="all"
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        {t('All')}
                                    </MenuItem>
                                    <MenuItem
                                        value="delivery"
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        {t('Delivery')}
                                    </MenuItem>
                                    <MenuItem
                                        value="take_away"
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'primary.dark',
                                            },
                                        }}
                                    >
                                        {t('Take Away')}
                                    </MenuItem>
                                </Select>
                            </FormControl>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            container
<<<<<<< HEAD
                            spacing={{xs:1,sm:2,md:4}}
                            marginTop={{xs:"0rem",md:".1rem"}}
=======
                            spacing={1}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        >
                            {data?.data?.restaurants?.map((restaurantData) => {
                                if (restaurantData) {
                                    return (
                                        <Grid
                                            item
<<<<<<< HEAD
                                            xs={ 12}
=======
                                            xs={matchesToSmall ? 6 : 12}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                            sm={4}
                                            md={3}
                                        >
                                            <RestaurantBoxCard
                                                slug={restaurantData?.slug}
                                                image={
                                                    restaurantData?.cover_photo
                                                }
                                                name={restaurantData?.name}
                                                rating={
                                                    restaurantData?.avg_rating
                                                }
                                                restaurantImageUrl={
                                                    global?.base_urls
                                                        ?.restaurant_cover_photo_url
                                                }
                                                id={restaurantData?.id}
                                                active={restaurantData.active}
                                                open={restaurantData.open}
                                                restaurantDiscount={
                                                    restaurantData.discount &&
                                                    restaurantData.discount
                                                }
                                                freeDelivery={
                                                    restaurantData.free_delivery
                                                }
                                                delivery_time={
                                                    restaurantData?.delivery_time
                                                }
                                                cuisines={
                                                    restaurantData?.cuisine
                                                }
<<<<<<< HEAD
                                                rating_count={restaurantData?.rating_count}
                                                coupons={restaurantData?.coupons}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                            />
                                        </Grid>
                                    )
                                }
                            })}
<<<<<<< HEAD
                            {isLoading && <CustomShimmerRestaurant />}
                            {data?.data?.restaurants?.length === 0 && (
                                <CustomEmptyResult
                                    label="No Restaurants found"
                                    image={noRestaurantsImage}
                                />
                            )}
                        </Grid>
                        {data?.data?.restaurants?.length > 0 &&
                            <Grid item xs={12} sm={12} md={12}>
                                <CustomePagination
                                    total_size={data?.data?.total_size}
                                    page_limit={page_limit}
                                    offset={offset}
                                    setOffset={setOffset}
                                />
                            </Grid>}

                    </Grid>
                    <Popover
                        onClose={() => handleDropClose()}
                        id="fade-button"
                        open={open}
                        anchorEl={anchorEl}
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
                            top: '5px',
                        }}
                        disableScrollLock={true}
                        disableRestoreFocus
                    >
                        <RestaurantFilterCard
                            mockData={mockData}
                            rowWise
                            checkboxData={checkedFilterKey}
                            handleDropClose={handleDropClose}
                            anchorEl={anchorEl}
                            // setFilterByData={setFilterByData}
                            //handleFilter={handleFilter}
                            setCheckedFilterKey={setCheckedFilterKey}
                            handleChangeRatings={handleChangeRatings}
                            priceAndRating={priceAndRating}

                        />
                    </Popover>
=======
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <CustomePagination
                                total_size={data?.data?.total_size}
                                page_limit={page_limit}
                                offset={offset}
                                setOffset={setOffset}
                            />
                        </Grid>
                    </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Box>
            )}
        </>
    )
}

<<<<<<< HEAD
export default RestaurantList
=======
export default RestaurantList
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
