import React from 'react'
import { useTranslation } from 'react-i18next'
import Dialog from '@mui/material/Dialog'
import { Button, Stack } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import DialogActions from '@mui/material/DialogActions'
<<<<<<< HEAD

=======
// import {
//     CustomButtonCancel,
//     CustomButtonSuccess,
// } from '../styled-components/CustomButtons.style'
// import { WrapperForCustomDialogConfirm } from '../components/custom-dialog/confirm/CustomDialogConfirm.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { WrapperForCustomDialogConfirm } from '../custom-dialog/confirm/CustomDialogConfirm.style'
import CustomSelectWithFormik from '../custom-select/CustomSelectWithFormik'
import DialogContent from '@mui/material/DialogContent'
import { useFormik } from 'formik'
import ValidationSchemaForRestaurant from '../join-restaurant/ValidationSchemaForRestaurant'
import MultiFileUploader from '../multi-file-uploader/MultiFileUploader'
import CustomTextFieldWithFormik from '../form-fields/CustomTextFieldWithFormik'
import LoadingButton from '@mui/lab/LoadingButton'
import * as Yup from 'yup'
import CloseIcon from '@mui/icons-material/Close'
<<<<<<< HEAD
import RefundSvg from "./RefundSvg";
import { useTheme } from "@mui/styles";

=======
// import CustomImageContainer from "./CustomImageContainer";
// import StarIcon from "@mui/icons-material/Star";
// import {CustomTypographyGray} from "../styled-components/CustomTypographies.style";
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const acceptedFileInputFormat =
    'application/pdf,image/*,text/plain,.doc, .docx,.txt'
const supportedFormatMultiImages = [
    'jpg',
    'jpeg',
    'gif',
    'png',
    'pdf',
    'doc',
    'docx',
    'deb',
]
const RefundModal = (props) => {
<<<<<<< HEAD
    const theme=useTheme()
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const {
        open,
        onClick,
        onClose,
        onSuccess,
        dialogTexts,
        reasons,
        formSubmit,
        refundIsLoading,
    } = props

    const { t } = useTranslation()
    const RefundRequestFormik = useFormik({
        initialValues: {
            customer_reason: '',
            customer_note: '',
            identity_image: '',
        },
        validationSchema: Yup.object({
            customer_reason: Yup.string().required(t('Please select a reason')),
        }),
        // validationSchema: ValidationSchemaForRestaurant(),
        onSubmit: async (values, helpers) => {
            try {
                formSubmitOnSuccess(values)
            } catch (err) {}
        },
    })

    let reasonsOption = []
    reasons?.forEach((reason) => {
        let obj = {
            label: reason.reason,
            value: reason.reason,
        }
        reasonsOption.push(obj)
    })
    const noteHandler = (value) => {
        RefundRequestFormik.setFieldValue('customer_note', value)
    }
    const reasonsHandler = (value) => {
        RefundRequestFormik.setFieldValue('customer_reason', value)
    }
    const fileImagesHandler = (files) => {
        RefundRequestFormik.setFieldValue('identity_image', files)
    }
    const formSubmitOnSuccess = (values) => {
        formSubmit(values)
    }
    // const imageUrl = `${productImageUrl}/${review.food_image}`
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <WrapperForCustomDialogConfirm sx={{ position: 'relative' }}>
                <button className="closebtn" onClick={onClose}>
                    <CloseIcon sx={{ fontSize: '16px' }} />
                </button>
                <CustomStackFullWidth spacing={1}>
<<<<<<< HEAD
                    <Stack alignItems="center" justifyContent="center" paddingX="50px">
                        <RefundSvg/>
                        <Typography fontSize="16px" fontWeight="700" paddingTop="24px" >
                            {t('Tell us what’s wrong with the order ?')}
                        </Typography>
                        <Typography fontSize="14px" fontWeight="400" color={theme.palette.neutral[500]} paddingTop="12px" paddingBottom=".5rem" textAlign="center">
                            {t('Please describe your problem to make you future experience more better')}
                        </Typography>
=======
                    <Stack alignItems="start" justifyContent="center">
                        <DialogTitle
                            id="alert-dialog-title"
                            sx={{ padding: '10px 24px' }}
                        >
                            <Typography>
                                {t('What’s Wrong With This Order?')}
                            </Typography>
                        </DialogTitle>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    </Stack>
                    <DialogContent sx={{ padding: '10px 24px' }}>
                        <CustomStackFullWidth>
                            <form
                                noValidate
                                onSubmit={RefundRequestFormik.handleSubmit}
                            >
                                <Stack spacing={2}>
                                    <CustomStackFullWidth>
                                        <CustomSelectWithFormik
                                            selectFieldData={reasonsOption}
                                            inputLabel={t('Select an option')}
                                            passSelectedValue={reasonsHandler}
                                            touched={
                                                RefundRequestFormik.touched
                                                    .customer_reason
                                            }
                                            errors={
                                                RefundRequestFormik.errors
                                                    .customer_reason
                                            }
                                            fieldProps={RefundRequestFormik.getFieldProps(
                                                'customer_reason'
                                            )}
                                        />
                                    </CustomStackFullWidth>
                                    <CustomStackFullWidth>
                                        <CustomTextFieldWithFormik
                                            type="text"
                                            label={t('Note')}
                                            touched={
                                                RefundRequestFormik.touched
                                                    .customer_note
                                            }
                                            errors={
                                                RefundRequestFormik.errors
                                                    .customer_note
                                            }
                                            fieldProps={RefundRequestFormik.getFieldProps(
                                                'customer_note'
                                            )}
                                            onChangeHandler={noteHandler}
                                            value={
                                                RefundRequestFormik.values
                                                    .customer_note
                                            }
                                            multiline="true"
                                            rows="2"
<<<<<<< HEAD
                                            placeholder="Enter note"
                                        />
                                    </CustomStackFullWidth>
                                    <CustomStackFullWidth >
=======
                                        />
                                    </CustomStackFullWidth>
                                    <CustomStackFullWidth paddingTop="20px">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        <MultiFileUploader
                                            fileImagesHandler={
                                                fileImagesHandler
                                            }
                                            totalFiles={
                                                RefundRequestFormik.values
                                                    .identity_image
                                            }
                                            maxFileSize={20000000}
                                            supportedFileFormats={
                                                supportedFormatMultiImages
                                            }
                                            acceptedFileInputFormat={
                                                acceptedFileInputFormat
                                            }
<<<<<<< HEAD
                                            labelText={t('Upload photo')}
                                            width="6rem"
                                            gridControl="true"
                                        />
                                    </CustomStackFullWidth>
                                    <CustomStackFullWidth justifyContent="flex-end" alignItems="flex-end">
=======
                                            labelText={t('file Upload')}
                                            width="8rem"
                                            gridControl="true"
                                        />
                                    </CustomStackFullWidth>
                                    <CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        <DialogActions sx={{ padding: '0px' }}>
                                            <Stack
                                                alignItems="center"
                                                justifyContent="center"
                                                width="100%"
                                            >
                                                <LoadingButton
                                                    type="submit"
                                                    variant="contained"
<<<<<<< HEAD

                                                    loading={refundIsLoading}
                                                >
                                                    {t('Submit Request')}
=======
                                                    sx={{ width: '100%' }}
                                                    loading={refundIsLoading}
                                                >
                                                    {t('Submit Refund Request')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                </LoadingButton>
                                            </Stack>
                                        </DialogActions>
                                    </CustomStackFullWidth>
                                </Stack>
                            </form>
                        </CustomStackFullWidth>
                    </DialogContent>
                </CustomStackFullWidth>
            </WrapperForCustomDialogConfirm>
        </Dialog>
    )
}

RefundModal.propTypes = {}

export default RefundModal
