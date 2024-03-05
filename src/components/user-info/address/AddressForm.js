<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
=======
import React, { useEffect } from 'react'
import { Button, Grid, Stack } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { useFormik } from 'formik'
import CustomTextFieldWithFormik from '../../form-fields/CustomTextFieldWithFormik'
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
import { useTranslation } from 'react-i18next'
import CustomSelectWithFormik from '../../custom-select/CustomSelectWithFormik'
import ValidationSchemaForAddAddress from './ValidationSchemaForAddAddress'
import CustomPhoneInput from '../../CustomPhoneInput'
import LoadingButton from '@mui/lab/LoadingButton'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
<<<<<<< HEAD
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import { LabelButton } from './Address.style';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { t } from 'i18next'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const AddressForm = ({
    deliveryAddress,
    personName,
    phone,
    lat,
    lng,
    formSubmit,
    isLoading,
<<<<<<< HEAD
    editAddress = false,
    address
}) => {
    const theme = useTheme();
    const { global } = useSelector((state) => state.globalSettings)
    const { t } = useTranslation()
    const isXs = useMediaQuery(theme.breakpoints.down("sm"))
    const [label, setLabel] = useState('Home');
    useEffect(() => {
        if (editAddress) {
            if (address?.address_type === 'Home') {
                setLabel('Home')
            } else if (address?.address_type === 'Office') {
                setLabel('Office')
            } else {
                setLabel('Others')
            }
        } else {
            setLabel('Home')
        }
    }, [])
    const typeData = [
        {
            label: t('Home'),
            value: 'Home',
            icon: <HomeRoundedIcon />
=======
}) => {
    const { t } = useTranslation()
    const typeData = [
        {
            label: t('Home'),
            value: 'home',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
        {
            label: t('Office'),
            value: 'Office',
<<<<<<< HEAD
            icon: <ApartmentIcon />
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
        {
            label: t('Others'),
            value: 'Others',
<<<<<<< HEAD
            icon: <FmdGoodIcon />
        },
    ]
    const { guestUserInfo } = useSelector((state) => state.guestUserInfo);
    const addAddressFormik = useFormik({
        initialValues: {
            address: editAddress ? address?.address : '',
            address_type: editAddress ? address?.address_type : '',
            address_label: editAddress ? address.address_type : '',
            contact_person_name: editAddress ? address?.contact_person_name : guestUserInfo ? guestUserInfo?.contact_person_name : personName ? personName : '',
            contact_person_number: editAddress ? address?.contact_person_number : guestUserInfo ? guestUserInfo?.contact_person_number : phone ? phone : '',
            latitude: lat,
            longitude: lng,
            road: editAddress ? address?.road : '',
            house: editAddress ? address?.house : '',
            floor: editAddress ? address?.floor : '',
        },
        validationSchema: ValidationSchemaForAddAddress(),
        onSubmit: async (values) => {

=======
        },
    ]

    const addAddressFormik = useFormik({
        initialValues: {
            address: '',
            address_type: '',
            address_label: '',
            contact_person_name: personName ? personName : '',
            contact_person_number: phone ? phone : '',
            latitude: lat,
            longitude: lng,
            road: '',
            house: '',
            floor: '',
        },
        validationSchema: ValidationSchemaForAddAddress(),
        onSubmit: async (values, helpers) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            try {
                let newData = {
                    ...values,
                    address_type:
<<<<<<< HEAD
                        editAddress ? handleEditAddressLabel(addAddressFormik.values.address_label) :
                            values.address_label !== ''
                                ? values?.address_label
                                : label,
                }
                formSubmitOnSuccess(newData)
            } catch (err) { console.log(err) }
=======
                        values.address_label !== ''
                            ? values.address_label
                            : values.address_type,
                }
                formSubmitOnSuccess(newData)
            } catch (err) {}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
    })
    const formSubmitOnSuccess = (values) => {
        formSubmit(values)
    }

    const nameHandler = (value) => {
        addAddressFormik.setFieldValue('contact_person_name', value)
    }
    const numberHandler = (value) => {
        addAddressFormik.setFieldValue('contact_person_number', value)
    }
<<<<<<< HEAD
=======
    const addressTypeHandler = (value) => {
        addAddressFormik.setFieldValue('address_type', value)
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const addressLabelHandler = (value) => {
        addAddressFormik.setFieldValue('address_label', value)
    }
    const roadHandler = (value) => {
        addAddressFormik.setFieldValue('road', value)
    }
    const houseHandler = (value) => {
        addAddressFormik.setFieldValue('house', value)
    }
    const floorHandler = (value) => {
        addAddressFormik.setFieldValue('floor', value)
    }
    useEffect(() => {
        addAddressFormik.setFieldValue('address', deliveryAddress)
    }, [deliveryAddress])
<<<<<<< HEAD
    useEffect(() => {

    }, [])

    const handleLabel = (item) => {
        if (label !== item.value) {
            setLabel(item.value);
        }
    }
    const handleEditAddressLabel = (value) => {

        if (label === "Home" || label === "Office") {

            return label
        }
        return value
    }

    return (
        <Stack width={{ xs: "100%", md: "58%" }}>
            <form noValidate onSubmit={addAddressFormik.handleSubmit}>
                <SimpleBar style={{ height: isXs ? '280px' : '475px' }}>
                    <Grid
                        container
                        spacing={0}
                        gap={{ xs: "15px", md: "25px" }}
                        sx={{
=======

    return (
        <Stack>
            <form noValidate onSubmit={addAddressFormik.handleSubmit}>
                <SimpleBar style={{ maxHeight: '35vh' }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            paddingBlockStart: '10px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            paddingInlineEnd: '10px',
                        }}
                    >
                        <Grid item xs={12} md={12}>
<<<<<<< HEAD
                            <Stack>
                                <Typography fontSize="12px" color={theme.palette.neutral[500]} pb="5px">
                                    {t("Label As")}
                                </Typography>
                                <CustomStackFullWidth flexDirection="row" gap="5px">
                                    {typeData?.map((item, index) => (
                                        <LabelButton
                                            key={index}
                                            fullWidth
                                            variant="outlined"
                                            value={item?.label}
                                            selected={label}
                                            onClick={() => handleLabel(item)}
                                            startIcon={
                                                item.icon
                                            }
                                        >
                                            {`${t(item.label)}`}
                                        </LabelButton>
                                    )

                                    )}
                                </CustomStackFullWidth>
                            </Stack>
                        </Grid>
                        {label === 'Others' && (
=======
                            <CustomTextFieldWithFormik
                                required="true"
                                type="text"
                                label={t('Address')}
                                touched={addAddressFormik.touched.address}
                                errors={addAddressFormik.errors.address}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'address'
                                )}
                                value={addAddressFormik.values.address}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <CustomSelectWithFormik
                                value={addAddressFormik.values.address_type}
                                selectFieldData={typeData}
                                inputLabel={t('Address Type')}
                                passSelectedValue={addressTypeHandler}
                                touched={addAddressFormik.touched.address_type}
                                errors={addAddressFormik.errors.address_type}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'address_type'
                                )}
                            />
                        </Grid>
                        {addAddressFormik.values.address_type === 'Others' && (
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <Grid item xs={12} md={12}>
                                {' '}
                                <CustomTextFieldWithFormik
                                    type="text"
                                    label={t('Label Name(Optional)')}
                                    touched={
                                        addAddressFormik.touched.address_label
                                    }
                                    errors={
                                        addAddressFormik.errors.address_label
                                    }
                                    fieldProps={addAddressFormik.getFieldProps(
                                        'address_label'
                                    )}
                                    onChangeHandler={addressLabelHandler}
                                    value={
                                        addAddressFormik.values.address_label
                                    }
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} md={12}>
                            <CustomTextFieldWithFormik
                                required="true"
                                type="text"
<<<<<<< HEAD
                                label={t('Address')}
                                touched={addAddressFormik.touched.address}
                                errors={addAddressFormik.errors.address}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'address'
                                )}
                                value={addAddressFormik.values.address}
                            />
                        </Grid>
                        {/* <Grid item xs={12} md={12}>
                            <CustomSelectWithFormik
                                value={addAddressFormik.values.address_type}
                                selectFieldData={typeData}
                                inputLabel={t('Address Type')}
                                passSelectedValue={addressTypeHandler}
                                touched={addAddressFormik.touched.address_type}
                                errors={addAddressFormik.errors.address_type}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'address_type'
                                )}
                            />
                        </Grid> */}
                        <Grid item xs={12} md={12}>
                            <CustomTextFieldWithFormik
                                required="true"
                                type="text"
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                label={t('Contact Person Name')}
                                touched={
                                    addAddressFormik.touched.contact_person_name
                                }
                                errors={
                                    addAddressFormik.errors.contact_person_name
                                }
                                fieldProps={addAddressFormik.getFieldProps(
                                    'contact_person_name'
                                )}
                                onChangeHandler={nameHandler}
                                value={
                                    addAddressFormik.values.contact_person_name
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <CustomPhoneInput
                                value={
                                    addAddressFormik.values
                                        .contact_person_number
                                }
                                onHandleChange={numberHandler}
                                initCountry={global?.country}
                                touched={
                                    addAddressFormik.touched
                                        .contact_person_number
                                }
                                errors={
                                    addAddressFormik.errors
                                        .contact_person_number
                                }
                                rtlChange="true"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <CustomTextFieldWithFormik
                                type="text"
                                label={t('Street Number')}
                                touched={addAddressFormik.touched.road}
                                errors={addAddressFormik.errors.road}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'road'
                                )}
                                onChangeHandler={roadHandler}
                                value={addAddressFormik.values.road}
                            />
                        </Grid>
<<<<<<< HEAD
                        <Grid container item spacing={2}>
                            <Grid item xs={12} md={6} >
                                <CustomTextFieldWithFormik
                                    type="text"
                                    label={t('House')}
                                    touched={addAddressFormik.touched.house}
                                    errors={addAddressFormik.errors.house}
                                    fieldProps={addAddressFormik.getFieldProps(
                                        'house'
                                    )}
                                    onChangeHandler={houseHandler}
                                    value={addAddressFormik.values.house}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextFieldWithFormik
                                    type="text"
                                    label={t('Floor')}
                                    touched={addAddressFormik.touched.floor}
                                    errors={addAddressFormik.errors.floor}
                                    fieldProps={addAddressFormik.getFieldProps(
                                        'floor'
                                    )}
                                    onChangeHandler={floorHandler}
                                    value={addAddressFormik.values.floor}
                                />
                            </Grid>
=======
                        <Grid item xs={12} md={6}>
                            <CustomTextFieldWithFormik
                                type="text"
                                label={t('House')}
                                touched={addAddressFormik.touched.house}
                                errors={addAddressFormik.errors.house}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'house'
                                )}
                                onChangeHandler={houseHandler}
                                value={addAddressFormik.values.house}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomTextFieldWithFormik
                                type="text"
                                label={t('Floor')}
                                touched={addAddressFormik.touched.floor}
                                errors={addAddressFormik.errors.floor}
                                fieldProps={addAddressFormik.getFieldProps(
                                    'floor'
                                )}
                                onChangeHandler={floorHandler}
                                value={addAddressFormik.values.floor}
                            />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        </Grid>
                    </Grid>
                </SimpleBar>
                <LoadingButton
                    type="submit"
                    fullWidth
                    loading={isLoading}
                    variant="contained"
                >
<<<<<<< HEAD
                    {editAddress ? t('Update Address') : t('Save Address')}
=======
                    {t('Add')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </LoadingButton>
            </form>
        </Stack>
    )
}
export default AddressForm
