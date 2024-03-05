import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'
import { usePostEmail } from '../../../../hooks/react-query/social-login/usePostEmail'
import CustomModal from '../../../custom-modal/CustomModal'
import PhoneInputForm from './PhoneInputForm'
import OtpForm from '../../forgot-password/OtpForm'
import { toast } from 'react-hot-toast'
import { useVerifyPhone } from '../../../../hooks/react-query/otp/useVerifyPhone'
import { onErrorResponse } from '../../../ErrorResponse'
import { googleClientId } from '../../../../utils/staticCredentials'
<<<<<<< HEAD
import { alpha, styled, Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack } from "@mui/system";
import { t } from "i18next";
import CustomImageContainer from "../../../CustomImageContainer";
import googleLatest from "../../../../../public/static/Google Logo.png";
// import { gapi } from 'gapi-scrip
// import { gapi } from 'gapi-script'
export const CustomGoogleButton = styled(Stack)(({ theme ,width}) => ({
    width:"165px",
    backgroundColor:theme.palette.neutral[100],
    height: '45px',

    borderRadius: '10px',
    padding: '10px 20px',
    color: theme.palette.neutral[600],
    boxShadow:`0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)`
    //maxWidth: '355px',

}))
const GoogleLoginComp = (props) => {
    const { handleSuccess, global, handleParentModalClose,  setJwtToken,setUserInfo,setModalFor,setMedium } = props

=======
// import { gapi } from 'gapi-scrip
// import { gapi } from 'gapi-script'
const GoogleLoginComp = (props) => {
    const { handleSuccess, global, handleParentModalClose } = props
    const [userInfo, setUserInfo] = useState(null)
    const [jwtToken, setJwtToken] = useState(null)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [openModal, setOpenModal] = useState(false)
    const [openOtpModal, setOpenOtpModal] = useState(false)
    const [otpData, setOtpData] = useState({ phone: '' })
    const [mainToken, setMainToken] = useState(null)
    const router = useRouter()

    const { mutate } = usePostEmail()

    const clientId = googleClientId
<<<<<<< HEAD
    const handleToken =  (response) => {
        if (response?.token) {
            handleSuccess(response.token)
        } else {
            setMedium("google")
            setModalFor("phone_modal")
            setOpenModal(true)
        }
    }

=======
    const handleToken = (response) => {
        if (response?.token) {
            handleSuccess(response.token)
        } else {
            setOpenModal(true)
        }
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    useEffect(() => {
        if (otpData?.phone !== '') {
            setOpenOtpModal(true)
        }
    }, [otpData])

    const handlePostRequestOnSuccess = (response) => {
        if (global?.customer_verification) {
            if (Number.parseInt(response?.is_phone_verified) === 1) {
                handleToken(response)
            } else {
                if (response?.phone) {
                    setOtpData({ phone: response?.phone })
                }
                if (response?.token) {
                    setMainToken(response)
                }
            }
        } else {
            handleToken(response)
        }
    }
    const handleCallBackResponse = (res) => {
        const userObj = jwt_decode(res.credential)

        setJwtToken(res)
        setUserInfo(userObj)
        mutate(
            {
                email: userObj.email,
                token: res.credential,
                unique_id: res?.clientId,
                medium: 'google',
            },
            {
                onSuccess: handlePostRequestOnSuccess,
                onError: (error) => {
                    error?.response?.data?.errors?.forEach((item) =>
                        item.code === 'email'
                            ? handleToken()
                            : toast.error(item.message)
                    )
                },
            }
        )
    }
<<<<<<< HEAD

=======
    const handleTokenCallBackResponse = (res) => {
        //const userObj = jwt_decode(res.credential)
        // setJwtToken(res)
        // setUserInfo(userObj)
        // mutate(
        //     { email: userObj.email },
        //     {
        //         onSuccess: handlePostRequestOnSuccess,
        //     }
        // )
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        /* global google */
        if (typeof window !== undefined) {
            window?.google?.accounts?.id?.initialize({
                client_id: clientId,
                callback: handleCallBackResponse,
            })
            window?.google?.accounts?.id?.renderButton(
                document.getElementById('signInDiv'),
                {
                    theme: 'outline',
                    size: 'large',
<<<<<<< HEAD
                    shape: 'rounded',
                    width: '134px',
=======
                    shape: 'rectangular',
                    width: '220px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    logo_alignment: 'left',
                }
            )
        }
    }, [])

    // const handleOnError = (res) => {
    //
    // }
    const handleRegistrationOnSuccess = (token) => {
        //registration on success func remaining
        setOpenModal(false)
        handleSuccess(token)
        handleParentModalClose()
    }
    const onSuccessHandler = (res) => {
        toast.success(res?.message)
        setOpenOtpModal(false)
        handleToken(mainToken)
        handleParentModalClose()
    }
    const { mutate: signInMutate, isLoading } = useVerifyPhone()
    const formSubmitHandler = (values) => {
        signInMutate(values, {
            onSuccess: onSuccessHandler,
            onError: onErrorResponse,
        })
    }
    return (
        <>
<<<<<<< HEAD
            <div style={{position:"relative"}}>
                <div style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    filter:"opacity(0)",

                }}>
                    <div id="signInDiv"></div>
                </div>

                <CustomGoogleButton direction="row" spacing={1}>
                    <Typography>
                        {t("Sign up with")}
                    </Typography>
                    <CustomImageContainer
                        src={googleLatest.src}
                        alt="facebook"
                        height="24px"
                        width="24px"
                        objectFit="cover"
                        borderRadius="50%"
                    />
                </CustomGoogleButton>
            </div>

=======
            <div id="signInDiv"></div>
            <CustomModal openModal={openModal} setModalOpen={setOpenModal}>
                {userInfo && jwtToken && (
                    <PhoneInputForm
                        userInfo={userInfo}
                        jwtToken={jwtToken}
                        medium="google"
                        handleRegistrationOnSuccess={
                            handleRegistrationOnSuccess
                        }
                    />
                )}
            </CustomModal>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <CustomModal
                openModal={openOtpModal}
                setModalOpen={setOpenOtpModal}
            >
                <OtpForm
                    data={otpData}
                    formSubmitHandler={formSubmitHandler}
                    isLoading={isLoading}
                />
            </CustomModal>
        </>
    )
}

GoogleLoginComp.propTypes = {}

export default GoogleLoginComp
