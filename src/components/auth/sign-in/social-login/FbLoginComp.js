import React, { useEffect, useState } from 'react'
import CustomModal from '../../../custom-modal/CustomModal'
import PhoneInputForm from './PhoneInputForm'
import CustomImageContainer from '../../../CustomImageContainer'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { usePostEmail } from '../../../../hooks/react-query/social-login/usePostEmail'
import { onErrorResponse } from '../../../ErrorResponse'
import OtpForm from '../../forgot-password/OtpForm'
import { useVerifyPhone } from '../../../../hooks/react-query/otp/useVerifyPhone'
import { toast } from 'react-hot-toast'
import facebookLatest from '../../../../../public/static/facebookLatest.png'
<<<<<<< HEAD
import { alpha, Stack } from "@mui/material";
=======
import { Stack } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    CustomColouredTypography,
    CustomStackFullWidth,
} from '../../../../styled-components/CustomStyles.style'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
    setJwtTokenByDispatch,
    setUserInfoByDispatch,
} from '../../../../redux/slices/fbCredentials'
import { facebookAppId } from '../../../../utils/staticCredentials'
<<<<<<< HEAD
import { useTheme } from "@mui/styles";

const FbLoginComp = (props) => {
    const { handleSuccess, global, handleParentModalClose,setModalFor,setMedium } = props
    const theme=useTheme()
=======

const FbLoginComp = (props) => {
    const { handleSuccess, global, handleParentModalClose } = props
    const { userInfo, jwtToken } = useSelector(
        (state) => state.fbCredentialsStore
    )

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [openModal, setOpenModal] = useState(false)
    const [openOtpModal, setOpenOtpModal] = useState(false)
    const [otpData, setOtpData] = useState({ phone: '' })
    const [mainToken, setMainToken] = useState(null)
    const dispatch = useDispatch()
    const appId = facebookAppId
    const { mutate } = usePostEmail()
    const handleToken = (response) => {
        if (response?.token) {
            handleSuccess(response.token)
        } else {
<<<<<<< HEAD
            setMedium("facebook")
            setModalFor("phone_modal")
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            setOpenModal(true)
        }
    }
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
    const responseFacebook = async (res) => {
        dispatch(setUserInfoByDispatch(res))
        dispatch(setJwtTokenByDispatch(res))
        await mutate(
            {
                email: res?.email,
                token: res?.accessToken,
                unique_id: res?.id,
                medium: 'facebook',
                phone: res?.phone,
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
    // const handleRegistrationOnSuccess = (token) => {
    //     //registration on success func remaining
    //     handleSuccess(token)
    //     handleParentModalClose()
    //     setOpenModal(false)
    // }
=======
    const handleRegistrationOnSuccess = (token) => {
        //registration on success func remaining
        handleSuccess(token)
        handleParentModalClose()
        setOpenModal(false)
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
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
    const { t } = useTranslation()
    return (
        <>
            <FacebookLogin
                appId={appId}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                    <div
                        style={{ cursor: 'pointer', width: '100%' }}
                        onClick={renderProps.onClick}
                    >
                        <Stack
                            alignItems="center"
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.newsletterBG,
<<<<<<< HEAD
                                height: '45px',
                                width: '100%',
                                borderRadius: '10px',
                                padding: '10px 25px',
                                textAlign: 'center',
                                boxShadow:`0px 2px 3px 0px rgba(0, 0, 0, 0.17), 0px 0px 3px 0px rgba(0, 0, 0, 0.08)`
=======
                                height: '40px',
                                width: '100%',
                                borderRadius: '4px',
                                padding: '5px',
                                textAlign: 'center',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            }}
                        >
                            <CustomStackFullWidth
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
<<<<<<< HEAD

                                <CustomColouredTypography

                                    sx={{
                                        color: (theme) =>
                                            theme.palette.whiteContainer.main,
                                        fontWeight:"400"
                                    }}
                                >
                                    {t('Sign up with')}
                                </CustomColouredTypography>
                                <CustomImageContainer
                                    src={facebookLatest.src}
                                    alt="facebook"
                                    height="24px"
                                    width="24px"
                                    objectFit="cover"
                                    borderRadius="50%"
                                />
=======
                                <CustomImageContainer
                                    src={facebookLatest.src}
                                    alt="facebook"
                                    height="30px"
                                    width="30px"
                                    objectFit="contained"
                                />
                                <CustomColouredTypography
                                    variant="h5"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.whiteContainer.main,
                                    }}
                                >
                                    {t('Continue with facebook')}
                                </CustomColouredTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            </CustomStackFullWidth>
                        </Stack>
                    </div>
                )}
            />
<<<<<<< HEAD
            {/*<CustomModal openModal={openModal} setModalOpen={setOpenModal}>*/}
            {/*    {userInfo && jwtToken && (*/}
            {/*        <PhoneInputForm*/}
            {/*            global={global}*/}
            {/*            userInfo={userInfo}*/}
            {/*            jwtToken={jwtToken}*/}
            {/*            medium="facebook"*/}
            {/*            handleRegistrationOnSuccess={*/}
            {/*                handleRegistrationOnSuccess*/}
            {/*            }*/}
            {/*        />*/}
            {/*    )}*/}
            {/*</CustomModal>*/}
=======
            <CustomModal openModal={openModal} setModalOpen={setOpenModal}>
                {userInfo && jwtToken && (
                    <PhoneInputForm
                        userInfo={userInfo}
                        jwtToken={jwtToken}
                        medium="facebook"
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

FbLoginComp.propTypes = {}

export default FbLoginComp
