import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/counter'
import layoutReducer from '../redux/slices/layout'
import multiStepFormReducer from './slices/multiStepForm'
import globalSettingsReducer from './slices/global'
import cartReducer from './slices/cart'
import wishListSlice from './slices/wishList'
import searchFilterSlice from './slices/searchFilter'
import restaurantFoodFilterSlice from './slices/restaurantFoodFilter'
import fbCredentialSlice from './slices/fbCredentials'
import storedDataSliceReducer from './slices/storedData'
import landingPageSliceReducer from './slices/landingpagedata'
import languageChangeReducer from './slices/languageChange'
<<<<<<< HEAD
import scrollPosition from "./slices/scrollPosition"
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
    persistReducer,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from 'redux-persist'
import userSlice from './slices/customer'
import orderTypeSlice from './slices/orderType'
import userTokenReducer from './slices/userToken'
<<<<<<< HEAD
import offlinePaymentInfoReducer from './slices/OfflinePayment'
import guestUserReducer from "./slices/guestUserInfo"
import searchTagsReducer from "./slices/searchTagSlice"
import addressDataReducer from "./slices/addressData"
import editProfileReducer from "./slices/editProfile"
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const persistConfig = {
    key: 'stack-food',
    storage: storage,
<<<<<<< HEAD
    blacklist: ['searchFilterStore', 'storedData',"scrollPosition"],
=======
    blacklist: ['searchFilterStore', 'storedData'],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}
const reducers = combineReducers({
    counter: counterReducer,
    layout: layoutReducer,
    globalSettings: globalSettingsReducer,
    cart: cartReducer,
    wishList: wishListSlice,
    restaurantFoodFilterStore: restaurantFoodFilterSlice,
    searchFilterStore: searchFilterSlice,
    user: userSlice,
    orderType: orderTypeSlice,
    fbCredentialsStore: fbCredentialSlice,
    storedData: storedDataSliceReducer,
    landingPage: landingPageSliceReducer,
    userToken: userTokenReducer,
    languageChange: languageChangeReducer,
<<<<<<< HEAD
    offlinePayment: offlinePaymentInfoReducer,
    guestUserInfo: guestUserReducer,
    scrollPosition:scrollPosition,
    searchTags:searchTagsReducer,
    addressData:addressDataReducer,
    isEditProfile:editProfileReducer,

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
})
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [
            //         FLUSH,
            //         REHYDRATE,
            //         PAUSE,
            //         PERSIST,
            //         PURGE,
            //         REGISTER,
            //     ],
            // },
        }),
})
