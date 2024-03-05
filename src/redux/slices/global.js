import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    global: undefined,
    couponInfo: null,
    couponType: '',

    zoneData: null,
    handleHomePage: false,
<<<<<<< HEAD

    openMapDrawer: false,
    userLocationUpdate: false
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}

export const globalSettingSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGlobalSettings: (state, action) => {
<<<<<<< HEAD
            state.global = action.payload
=======
            state.global = action.payload.data
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
        setCustomerProfile: (state, action) => {
            state.customerProfile = action?.payload
        },
        setCouponInfo: (state, action) => {
            state.couponInfo = action?.payload
        },
        setCouponType: (state, action) => {
            state.couponType = action?.payload
        },
        setZoneData: (state, action) => {
            state.zoneData = action?.payload
        },
        setHandleHomePage: (state, action) => {
            state.handleHomePage = action.payload
        },
<<<<<<< HEAD
        setOpenMapDrawer: (state, action) => {
            state.openMapDrawer = action.payload
        },
        setUserLocationUpdate: (state, action) => {
            state.userLocationUpdate = action.payload
        },
        
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
})

// Action creators are generated for each case reducer function
export const {
    setGlobalSettings,

    setCustomerProfile,
    setCouponInfo,
    setCouponType,
    setZoneData,
    setHandleHomePage,
<<<<<<< HEAD
    setOpenMapDrawer,
    setUserLocationUpdate,
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
} = globalSettingSlice.actions
export default globalSettingSlice.reducer
