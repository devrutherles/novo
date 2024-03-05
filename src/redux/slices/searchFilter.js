import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFilterDrawerOpen: false,
    bannerFood: null,
    deliveryManInfo: null,
    filterData: {
        sortBy: '',
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        filterBy: {},
        filterByCuisine: [],
        price: '',
        rating: '',
    },
<<<<<<< HEAD
    foodOrRestaurant:"products"
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}

export const searchFilterSlice = createSlice({
    name: 'search-filter',
    initialState,
    reducers: {
        setSortbyByDispatch: (state, action) => {
            state.filterData.sortBy = action.payload
        },
        setFilterbyByDispatch: (state, action) => {
            const filteredData = {
                veg:
                    action.payload.find((item) => item.value === 'veg') !==
                    undefined,
                nonVeg:
                    action.payload.find((item) => item.value === 'nonVeg') !==
                    undefined,
                currentlyAvailable:
                    action.payload.find(
                        (item) => item.value === 'currentlyAvailable'
                    ) !== undefined,
<<<<<<< HEAD
                rating:
                    action.payload.find(
                        (item) => item.value === 'rating'
                    ) !== undefined,
                new:
                    action.payload.find((item) => item.value === 'new_arrivals') !==
=======
                from_campaign:
                    action.payload.find(
                        (item) => item.value === 'from_campaign'
                    ) !== undefined,
                new:
                    action.payload.find((item) => item.value === 'new') !==
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    undefined,
                popular:
                    action.payload.find((item) => item.value === 'popular') !==
                    undefined,
<<<<<<< HEAD
                discounted:
                    action.payload.find(
                        (item) => item.value === 'discounted'
                    ) !== undefined,
                sort_by:
                    action.payload.find((item) => item.value === 'sort_by') !==
                    undefined,
=======
                most_reviewed:
                    action.payload.find(
                        (item) => item.value === 'most_reviewed'
                    ) !== undefined,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            }
            state.filterData.filterBy = filteredData
        },
        setFilterbyByCuisineDispatch: (state, action) => {
            state.filterData.filterByCuisine = action.payload
        },
        setPriceByDispatch: (state, action) => {
            state.filterData.price = action.payload
        },
        setRatingByDispatch: (state, action) => {
            state.filterData.rating = action.payload
        },
        setFilterDrawerOpenByDispatch: (state, action) => {
            state.isFilterDrawerOpen = action.payload
        },
        setBannerFoodByDispatch: (state, action) => {
            state.bannerFood = action.payload
        },
        setDeliveryManInfoByDispatch: (state, action) => {
            state.deliveryManInfo = action.payload
        },
<<<<<<< HEAD
        setFoodOrRestaurant:(state,action) => {
            state.foodOrRestaurant = action.payload
        }
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
})

// Action creators are generated for each case reducer function
export const {
    setSortbyByDispatch,
    setFilterbyByDispatch,
    setPriceByDispatch,
    setRatingByDispatch,
    setFilterDrawerOpenByDispatch,
    setBannerFoodByDispatch,
    setDeliveryManInfoByDispatch,
    setFilterbyByCuisineDispatch,
<<<<<<< HEAD
    setFoodOrRestaurant
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
} = searchFilterSlice.actions
export default searchFilterSlice.reducer
