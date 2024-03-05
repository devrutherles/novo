import React, { useState } from 'react'
import { WrapperForCustomDialogConfirm } from '../custom-dialog/confirm/CustomDialogConfirm.style'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import { t } from 'i18next'
import DialogContent from '@mui/material/DialogContent'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import DialogActions from '@mui/material/DialogActions'
import { Button, Stack } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { CustomButtonCancel } from '../../styled-components/CustomButtons.style'
import { RTL } from '../RTL/RTL'
<<<<<<< HEAD
import CloseIcon from "@mui/icons-material/Close";
import RefundSvg from "../order-history/RefundSvg";
import { useTheme } from "@mui/styles";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const CancelOrder = ({
    cancelReason,
    orderLoading,
    setCancelReason,
    cancelReasonsData,
    setModalOpen,
    handleOnSuccess,
}) => {
<<<<<<< HEAD
    const theme=useTheme()
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [value, setValue] = useState()
    const handleChange = (event) => {
        setCancelReason(event.target.value)
    }
    const onClose = () => {
        setModalOpen(false)
    }

    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }

    return (
<<<<<<< HEAD
        <WrapperForCustomDialogConfirm sx={{position:"relative"}}>
            <button className="closebtn" onClick={onClose}>
                <CloseIcon sx={{ fontSize: '16px' }} />
            </button>
            <CustomStackFullWidth spacing={1}>
                <Stack alignItems="center" justifyContent="center">
                    <RefundSvg/>
                    <Typography fontSize="16px" fontWeight="700" paddingTop="24px" >
                        {t('Want to cancel the order ?')}
                    </Typography>
                    <Typography fontSize="14px" fontWeight="400" color={theme.palette.neutral[500]} paddingTop="8px" >
                        {t('Please select a reason to cancel')}
                    </Typography>
                </Stack>
                <DialogContent sx={{padding:"15px 14px"}}>
                    <CustomStackFullWidth justifyContent="center">
                        <FormControl  >
=======
        <WrapperForCustomDialogConfirm>
            <CustomStackFullWidth spacing={1}>
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{ padding: '10px 24px' }}
                >
                    <Typography textAlign="center" variant="h3">
                        {t('What’s Wrong With This Order?')}
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{ padding: '10px 24px' }}>
                    <CustomStackFullWidth>
                        <FormControl component="fieldset">
                            <Typography
                                fontWeight="600"
                                variant="h4"
                                paddingY=".5rem"
                            >
                                {t('Cancel Reason')}
                            </Typography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <RadioGroup
                                aria-label="gender"
                                name="gender1"
                                value={cancelReason}
                                onChange={handleChange}
<<<<<<< HEAD
                                component="fieldset"
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            >
                                {cancelReasonsData &&
                                    cancelReasonsData?.reasons?.length > 0 &&
                                    cancelReasonsData?.reasons?.map(
                                        (reason) => {
                                            return (
                                                <FormControlLabel
<<<<<<< HEAD
                                                    sx={{color:theme=>theme.palette.neutral[500],
                                                        border:"1px solid",
                                                        borderColor:theme=>theme.palette.neutral[300],
                                                        marginBottom:"10px",
                                                        borderRadius:"10px",
                                                        width:"100%",
                                                        marginLeft:"0px"

                                                }}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                    key={reason?.id}
                                                    value={reason.reason}
                                                    checked={
                                                        reason.reason ==
                                                        cancelReason
                                                            ? cancelReason
                                                            : false
                                                    }
                                                    editable={true}
                                                    control={<Radio />}
                                                    label={reason.reason}
                                                />
                                            )
                                        }
                                    )}
                            </RadioGroup>
                        </FormControl>
                    </CustomStackFullWidth>
                </DialogContent>

<<<<<<< HEAD
                <DialogActions sx={{padding:"0px 10px 0px 10px",marginTop:"0px !important"}}>
                    <RTL direction={languageDirection}>
                        <Stack
                            direction="row"
                            alignItems="flex-end"
                            justifyContent="flex-end"
                            width="100%"

                        >
                            <Button
                                loading={orderLoading}
                                onClick={handleOnSuccess}
                                variant="contained"
                                sx={{fontWeight:"400"}}

=======
                <DialogActions sx={{ paddingX: '20px' }}>
                    <RTL direction={languageDirection}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                onClick={onClose}
                                sx={{
                                    width: '100%',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark'
                                            ? theme.palette.neutral[700]
                                            : theme.palette.neutral[300],
                                    color: (theme) =>
                                        theme.palette.neutral[1000],

                                    '&:hover': {
                                        backgroundColor: (theme) =>
                                            theme.palette.neutral[400],
                                    },
                                }}
                            >
                                {t('Back')}
                            </Button>
                            <Button
                                loading={orderLoading}
                                onClick={handleOnSuccess}
                                variant="contained"
                                sx={{ width: '100%' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            >
                                {t('Submit')}
                            </Button>
                        </Stack>
                    </RTL>
                </DialogActions>
            </CustomStackFullWidth>
        </WrapperForCustomDialogConfirm>
    )
}

export default CancelOrder
