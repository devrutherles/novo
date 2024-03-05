import React from 'react'
<<<<<<< HEAD
import phoneIcon from "../../../../../public/static/profile/phoneInput.png"
=======
import PropTypes from 'prop-types'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    CustomBoxFullWidth,
    CustomStackFullWidth,
} from '../../../../styled-components/CustomStyles.style'
<<<<<<< HEAD
import { Paper, Typography } from "@mui/material";
=======
import { Paper } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import CustomPhoneInput from '../../../CustomPhoneInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import CustomAlert from '../../../alert/CustomAlert'
import LoadingButton from '@mui/lab/LoadingButton'
import { usePostRegisterInfo } from '../../../../hooks/react-query/social-login/usePostRegisterInfo'
import { onErrorResponse, onSingleErrorResponse } from '../../../ErrorResponse'
<<<<<<< HEAD
import CustomImageContainer from "../../../CustomImageContainer";
import { CustomBoxForModal } from "../../auth.style";

const PhoneInputForm = (props) => {
    const { userInfo, jwtToken, medium, handleRegistrationOnSuccess, global } = props
=======

const PhoneInputForm = (props) => {
    const { userInfo, jwtToken, medium, handleRegistrationOnSuccess } = props
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { t } = useTranslation()
    const { mutate, isLoading } = usePostRegisterInfo()
    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .required(t('Please give a phone number'))
                .min(10, 'number must be 10 digits'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                handleOnSubmitFormik(values)
<<<<<<< HEAD
            } catch (err) { }
=======
            } catch (err) {}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
    })
    const handleOnSubmitFormik = (values) => {
        const info = {
            email: userInfo?.email,
            token: jwtToken?.credential,
            unique_id: jwtToken?.clientId,
            medium: medium,
            phone: values.phone,
        }
        mutate(info, {
            onSuccess: (response) => {
                handleRegistrationOnSuccess(response?.token)
            },
            onError: onErrorResponse,
        })
    }
    const handleOnChange = (value) => {
        formik.setFieldValue('phone', `+${value}`)
    }
    return (
<<<<<<< HEAD
        <CustomBoxForModal>
            <form onSubmit={formik.handleSubmit} noValidate>
                <CustomStackFullWidth spacing={3} justifyContent="center" alignItems='center'>
                    <CustomImageContainer
                     src={phoneIcon.src}
                     width="69px" height="69px"
                    />
                    <Typography fontSize="14px">
                        {t("Provide a valid phone number to complete your sign up")}
                    </Typography>
=======
        <Paper sx={{ padding: '1rem' }}>
            <form onSubmit={formik.handleSubmit} noValidate>
                <CustomStackFullWidth spacing={2}>
                    <CustomAlert
                        type="info"
                        text={t(
                            'Give a valid phone number to continue sign-in'
                        )}
                    />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <CustomPhoneInput
                        value={formik.values.phone}
                        onHandleChange={handleOnChange}
                        initCountry={global?.country}
                        touched={formik.touched.phone}
                        errors={formik.errors.phone}
                        rtlChange="true"
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        loading={isLoading}
                    >
                        {t('Continue')}
                    </LoadingButton>
                </CustomStackFullWidth>
            </form>
<<<<<<< HEAD
        </CustomBoxForModal>
=======
        </Paper>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

PhoneInputForm.propTypes = {}

export default PhoneInputForm
