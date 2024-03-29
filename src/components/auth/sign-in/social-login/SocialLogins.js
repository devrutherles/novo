import React, { memo } from 'react'
import { Stack } from '@mui/material'
import GoogleLoginComp from './GoogleLoginComp'
import FbLoginComp from './FbLoginComp'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { loginSuccessFull } from '../../../../utils/ToasterMessages'
import { useTranslation } from 'react-i18next'

import ProfileAndWishlistSet from '../../../profile-and-wishlist-set/ProfileAndWishlistSet'
import { setWishList } from '../../../../redux/slices/wishList'
import { useWishListGet } from '../../../../hooks/react-query/config/wish-list/useWishListGet'
import { setUser } from '../../../../redux/slices/customer'
import { useQuery } from 'react-query'
import { ProfileApi } from '../../../../hooks/react-query/config/profileApi'
import { onSingleErrorResponse } from '../../../ErrorResponse'
import AppleLoginComp from './AppleLoginComp'
import { setToken } from '../../../../redux/slices/userToken'

const SocialLogins = (props) => {
<<<<<<< HEAD
    const { socialLogins, handleParentModalClose,  setJwtToken,setUserInfo ,handleSuccess,setModalFor,setMedium} = props
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()

    return (
        <Stack alignItems="center" justifyContent="center" columnGap=".4rem" direction={{xs:"column",md:"row"}} rowGap={{xs:".4rem",md:"0rem"}}>
            {socialLogins.map((item, index) => {
                if (item?.login_medium === 'facebook' &&
                    item.status === true) {
                    return (
                    <FbLoginComp
                        key={index}
                        handleSuccess={handleSuccess}
                        handleParentModalClose={handleParentModalClose}
                        global={global}
                        setJwtToken={setJwtToken}
                        setUserInfo={setUserInfo}
                        setModalFor={setModalFor}
                        setMedium={setMedium}
                    />
                    )
                } else if (
                    item?.login_medium === 'google' && item.status === true
                ) {
=======
    const { socialLogins, handleParentModalClose } = props
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const userOnSuccessHandler = (res) => {
        dispatch(setUser(res.data))
    }
    const { refetch: profileRefatch } = useQuery(
        ['profile-info'],
        ProfileApi.profileInfo,
        {
            enabled: false,
            onSuccess: userOnSuccessHandler,
            onError: onSingleErrorResponse,
        }
    )
    const onSuccessHandler = (res) => {
        dispatch(setWishList(res))
    }
    const { refetch } = useWishListGet(onSuccessHandler)
    const handleSuccess = async (value) => {
        localStorage.setItem('token', value)
        toast.success(t(loginSuccessFull))
        await refetch()
        await profileRefatch()
        dispatch(setToken(value))
        handleParentModalClose?.()
    }
    return (
        <Stack alignItems="center" justifyContent="center" spacing={0.5}>
            {socialLogins.map((item, index) => {
                if (item?.login_medium === 'google' && item.status === true) {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    return (
                        <GoogleLoginComp
                            key={index}
                            handleSuccess={handleSuccess}
                            handleParentModalClose={handleParentModalClose}
                            global={global}
<<<<<<< HEAD
                            setJwtToken={setJwtToken}
                            setUserInfo={setUserInfo}
                            setModalFor={setModalFor}
                            setMedium={setMedium}
=======
                        />
                    )
                } else if (
                    item?.login_medium === 'facebook' &&
                    item.status === true
                ) {
                    return (
                        <FbLoginComp
                            key={index}
                            handleSuccess={handleSuccess}
                            handleParentModalClose={handleParentModalClose}
                            global={global}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        />
                    )
                }
            })}
            {/*<AppleLoginComp/>*/}
        </Stack>
    )
}

SocialLogins.propTypes = {}

export default memo(SocialLogins)
