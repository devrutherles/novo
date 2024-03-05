import { Modal, Box } from '@mui/material'
import React, { useState } from 'react'
import SignInPage from './sign-in'
import SignUpPage from './sign-up'
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/customer";
import { useQuery } from "react-query";
import { ProfileApi } from "../../hooks/react-query/config/profileApi";
import { onSingleErrorResponse } from "../ErrorResponse";
import { setWishList } from "../../redux/slices/wishList";
import { useWishListGet } from "../../hooks/react-query/config/wish-list/useWishListGet";
import { toast } from "react-hot-toast";
import { loginSuccessFull } from "../../utils/ToasterMessages";
import { setToken } from "../../redux/slices/userToken";
import { t } from "i18next";
import PhoneInputForm from "./sign-in/social-login/PhoneInputForm";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const AuthModal = ({
    open,
    handleClose,
    signInSuccess,
    modalFor,
<<<<<<< HEAD
    setModalFor, cartListRefetch
}) => {
    const { openMapDrawer } = useSelector((state) => state.globalSettings)
    const { userInfo:fbUserInfo, jwtToken:fbJwtToken } = useSelector(
        (state) => state.fbCredentialsStore
    )
    const [signInPage, setSignInPage] = useState(true)
    const [userInfo, setUserInfo] = useState(null)
    const [jwtToken, setJwtToken] = useState(null)
    const [medium,setMedium] = useState("")

    const user=medium==="google"?userInfo:fbUserInfo
    const jwt=medium==="google"?jwtToken:fbJwtToken

    const dispatch = useDispatch()
    const userOnSuccessHandler = (res) => {
        dispatch(setUser(res?.data))
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
        handleClose?.()
    }
    const handleRegistrationOnSuccess = (token) => {
        //registration on success func remaining
        // setOpenModal(false)
        handleSuccess(token)
        handleClose()
    }
=======
    setModalFor,
}) => {
    const [signInPage, setSignInPage] = useState(true)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleModal = () => {
        if (modalFor === 'sign-in') {
            return (
                <SignInPage
                    signInSuccess={signInSuccess}
                    handleClose={handleClose}
                    setModalFor={setModalFor}
                    setSignInPage={setSignInPage}
<<<<<<< HEAD
                    cartListRefetch={cartListRefetch}
                    setJwtToken={setJwtToken}
                    setUserInfo={setUserInfo}
                    handleSuccess={handleSuccess}
                    setMedium={setMedium}

                />
            )
        } else if(modalFor==="phone_modal"){
            return (
                <>
                {user && jwt && (
                    <PhoneInputForm
                        userInfo={user}
                        jwtToken={jwt}
                        global={global}
                        medium={medium}
                        handleRegistrationOnSuccess={
                            handleRegistrationOnSuccess
                        }
                    />
                )}
                </>
            )
        }else {
=======
                />
            )
        } else {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            return (
                <SignUpPage
                    handleClose={handleClose}
                    setSignInPage={setSignInPage}
                    setModalFor={setModalFor}
<<<<<<< HEAD
                    setJwtToken={setJwtToken}
                    setUserInfo={setUserInfo}
                    handleSuccess={handleSuccess}
                    setMedium={setMedium}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                />
            )
        }
    }
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                maxWidth="400px"
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            >
                {handleModal()}
            </Modal>
        </Box>
    )
}

export default AuthModal
