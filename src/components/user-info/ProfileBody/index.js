import React from 'react'
<<<<<<< HEAD
import ProfilePage from '../profile/ProfilePage'
=======
import Profile from '../profile/Profile'
import ProfilePage from '../profile/ProfilePage'
import WalletsPage from '../wallets/WalletsPage'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import Wallet from '../wallets/WalletList'
import CouponList from '../coupon/CouponList'
import LoyalityList from '../loyality/LoyalityList'
import ReferCodePage from '../refer-code/ReferCodePage'
<<<<<<< HEAD
import SettingPage from '../settings/SettingPage'
import OrderHistoryPage from '../../order-history/OrderHistoryPage'
import Chat from '../../chat/Chat'
import WishlistPage from '../../wishlist-page/WishlistPage'
import { RTL } from '../../RTL/RTL'
import OrderDetail from '../../order-details/OrderDetail'

const ProfileBody = ({ page, orderId }) => {
=======
import Settings from '../settings/Settings'
import SettingPage from '../settings/SettingPage'
import OrderHistoryPage from '../../order-history/OrderHistoryPage'
import { Scrollbar } from '../../Scrollbar'
import Chat from '../../chat/Chat'
import WishlistPage from '../../wishlist-page/WishlistPage'
import { Stack } from '@mui/system'
import { RTL } from '../../RTL/RTL'
import { useSelector } from 'react-redux'

const ProfileBody = ({ page }) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }

    const activeComponent = () => {
        if (page === 'profile') {
            return <ProfilePage />
        }
<<<<<<< HEAD
        if ((page === "order" || page === "order?flag=success" || page === "order?flag=cancel") && orderId) {

            return (<OrderDetail orderId={orderId} />)
        }
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        if (
            page === 'wallets' ||
            page === 'wallets?flag=success' ||
            page === 'wallets?flag=cancel'
        ) {
            return <Wallet page={page} />
        }
        if (page === 'coupons') {
            return <CouponList />
        }
        if (page === 'loyalty') {
            return <LoyalityList />
        }
        if (page === 'referral') {
            return <ReferCodePage />
        }
        if (page === 'settings') {
            return <SettingPage />
        }
<<<<<<< HEAD
        if (page === 'order' && !orderId) {
=======
        if (page === 'order') {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            return <OrderHistoryPage />
        }
        if (page === 'inbox') {
            return <Chat />
        }
        if (page === 'wishlist') {
            return <WishlistPage />
        }
    }

    return <RTL direction={languageDirection}>{activeComponent()}</RTL>
}

export default ProfileBody
