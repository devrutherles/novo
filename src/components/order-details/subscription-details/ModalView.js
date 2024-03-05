<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { CustomTypography } from "../../custom-tables/Tables.style";
import { CustomButtonPrimary } from "../../../styled-components/CustomButtons.style";
import { CustomStackFullWidth, CustomTextField } from "@/styled-components/CustomStyles.style";
import CustomMobileDateRangePicker from "../../custom-date-range-picker/CustomMobileDateRangePicker";
import moment from "moment/moment";
import CancelSubscriptionForm from "./CancelSubscriptionForm";
import CustomMobileDateRangePickers from "../../custom-date-range-picker/CustomMobileDateRangePicker";
import Calendar from "../../custom-date-range-picker/CustomMobileDateRangePicker";

const ModalView = props => {
    const { title, t, minDate, maxDate, handleCancel, handleSuccess } = props
=======
import React, {useState} from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import {CustomTypography} from "../../custom-tables/Tables.style";
import {CustomButtonPrimary} from "../../../styled-components/CustomButtons.style";
import {CustomStackFullWidth, CustomTextField} from "../../../styled-components/CustomStyles.style";
import CustomMobileDateRangePicker from "../../custom-date-range-picker/CustomMobileDateRangePicker";
import moment from "moment/moment";
import CancelSubscriptionForm from "./CancelSubscriptionForm";

const ModalView = props => {
    const {title, t, minDate,maxDate, handleCancel, handleSuccess} = props
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [textField, setTextField] = useState('')
    const [dateRange, setDateRange] = useState([])

    const isPauseSubscription = title.includes(t('pause'))
    const handleDateRange = (value) => {
<<<<<<< HEAD
        console.log({value});
        let val = [moment(value[0]?.startDate).format('yyyy/MM/DD HH:mm'), moment(value[0]?.endDate).format('yyyy/MM/DD HH:mm')]
        setDateRange(val)
    }
    const handlePauseClick = () => {
        return <CustomStackFullWidth alignItems='center' spacing={1.5} justifyContent="center">
            <Typography fontSize='13px' color='gray'>{t('Choose your preferable date range*')}</Typography>
            <Calendar handleValue={handleDateRange} minDate={minDate} maxDate={maxDate} />
        </CustomStackFullWidth>
    }
    const handleCancelClick = () => {
        return <CancelSubscriptionForm handleCancel={handleCancel} handleSuccess={handleSuccess} />
    }
    return (

        <Paper sx={{ padding:{xs:"1rem", md: '2rem' }}}>
            <Grid container spacing={3}>
                <Grid item align='center' xs={12}>
                    <ErrorOutlinedIcon sx={{ fontSize: '58px', color: 'primary.main' }} />
=======
        let val = [moment(value[0]).format('yyyy/MM/DD HH:mm'),moment(value[1]).format('yyyy/MM/DD HH:mm') ]
        setDateRange(val)
    }
    const handlePauseClick = () => {
        return <CustomStackFullWidth alignItems='flex-start' spacing={1.5}>
            <Typography fontSize='13px' color='gray'>{t('Choose your preferable date range*')}</Typography>
            <CustomMobileDateRangePicker handleValue={handleDateRange} minDate={minDate} maxDate={maxDate}/>
        </CustomStackFullWidth>
    }
    const handleCancelClick = () => {
        return <CancelSubscriptionForm handleCancel={handleCancel} handleSuccess={handleSuccess}/>
    }
    return (
        <Paper sx={{width: {xs: '300px', sm: '380px'}, padding: '1rem'}}>
            <Grid container spacing={3}>
                <Grid item align='center' xs={12}>
                    <ErrorOutlinedIcon sx={{fontSize: '58px', color: 'primary.main'}}/>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Grid>
                <Grid item align='center' xs={12}>
                    <CustomTypography variant="h4" textTransform='none'>
                        {t(title)}
                    </CustomTypography>
                </Grid>
                <Grid item align='center' xs={12}>
<<<<<<< HEAD
                    {isPauseSubscription ? handlePauseClick() : handleCancelClick()}
=======
                    { isPauseSubscription ? handlePauseClick() : handleCancelClick()}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </Grid>
                {
                    isPauseSubscription && <Grid item align='center' xs={12} container spacing={2}>
                        <Grid item xs={6}>
<<<<<<< HEAD
                            <Button fullWidth variant='outlined' sx={{ color: 'primary.main' }}
=======
                            <Button fullWidth variant='outlined' sx={{color: 'primary.main'}}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    onClick={() => handleCancel?.()}>
                                {t("No")}
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
<<<<<<< HEAD
                            <Button fullWidth variant='contained' onClick={() => handleSuccess?.(isPauseSubscription ? dateRange : textField)}>
                                {t("Yes")}
                            </Button>
=======
                            <CustomButtonPrimary onClick={() => handleSuccess?.(isPauseSubscription ? dateRange : textField)}>
                                {t("Yes")}
                            </CustomButtonPrimary>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        </Grid>
                    </Grid>
                }


            </Grid>
<<<<<<< HEAD
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </Paper>
    );
};

ModalView.propTypes = {};

export default ModalView;