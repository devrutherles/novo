import React from 'react'
import {
    Card,
    FormControlLabel,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import CustomImageContainer from '../CustomImageContainer'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { t } from 'i18next'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Stack } from '@mui/system'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
<<<<<<< HEAD
import { useDispatch } from 'react-redux'
import { setOfflineInfoStep } from '../../redux/slices/OfflinePayment'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const PaymentMethodCard = (props) => {
    const {
        image,
        description,
        type,
        paymenMethod,
        setPaymentMethod,
        paymentType,
        paidBy,
        parcel,
        digitalPaymentMethodActive,
        imageUrl,
        getPaymentMethod,
        selected,
    } = props
    const theme = useTheme()
<<<<<<< HEAD
    const dispatch = useDispatch();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const handleChange = () => {
        getPaymentMethod({ name: type, image: image })
        dispatch(setOfflineInfoStep(0))
=======
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const handleChange = () => {
        getPaymentMethod({ name: type, image: image })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    }

    const radioLabel = () => {
        return (
            <Stack
                width="100%"
                direction="row"
                gap="16px"
                alignItems="center"
                paddingLeft={{ xs: '5px', sm: '5px', md: '10px' }}
            >
                <CustomImageContainer
                    maxWidth="100%"
                    width="unset"
                    height="32px"
                    objectfit="contain"
                    src={`${imageUrl}/${image}`}
                />

                <Typography
                    fontWeight="500"
                    fontSize={{ xs: '12px', sm: '12px', md: '16px' }}
                    color={theme.palette.neutral[1000]}
                >
                    {paymentType}
                </Typography>
            </Stack>
        )
    }
    return (
        <Stack>
            <FormControl
<<<<<<< HEAD
                sx={{paddingInline: "27px"}}
=======
                sx={{ marginRight: { xs: '0px' }, marginLeft: { xs: '5px' } }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            >
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value={type}
                        control={
                            <Radio
                                sx={{ padding: { xs: '2px' } }}
                                checked={selected?.name === type}
                            />
                        }
                        label={radioLabel()}
                    />
                </RadioGroup>
            </FormControl>
        </Stack>
    )
}

export default PaymentMethodCard
