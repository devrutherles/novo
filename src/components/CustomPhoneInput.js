import TextField from '@material-ui/core/TextField'
import PhoneInput from 'react-phone-input-2'
import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Typography, Box, styled, alpha } from '@mui/material'
=======
import { Typography, Box } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { CustomTypography } from './custom-tables/Tables.style'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { CustomStackFullWidth } from '../styled-components/CustomStyles.style'
import { RTL } from './RTL/RTL'

const useStyles = makeStyles((theme) => ({
    borderClass: ({ theme, focus, languageDirection, rtlChange }) => ({
        '&.react-tel-input .special-label': {
<<<<<<< HEAD
            fontSize: "14px",
            fontWeight: 400,
            color: focus
                ? theme.palette.primary.main
                : theme.palette.neutral[900],
            left: languageDirection === 'rtl' ? '80%' : '10px',
            background: theme.palette.background.paper,
        },
        '&.react-tel-input .form-control': {
            border: `1px solid ${theme.palette.divider}`,
            background: theme.palette.background.paper,
=======
            color: focus
                ? theme.palette.primary.main
                : theme.palette.neutral[1000],
            left: languageDirection === 'rtl' ? '80%' : '10px',
            background: theme.palette.neutral[100],
        },
        '&.react-tel-input .form-control': {
            background: theme.palette.neutral[100],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            color: theme.palette.neutral[1000],
            padding:
                languageDirection === 'rtl'
                    ? '18.5px 58px 18.5px 10px'
                    : '18.5px 14px 18.5px 52px',
<<<<<<< HEAD
            ...(languageDirection === "rtl" && {
                textAlign: "right",
                direction: "rtl",
                unicodeBidi: "plaintext",
            }),
        },
        '&.react-tel-input .form-control:focus': {
            border: `1px solid ${theme.palette.primary.main}`,
=======
        },
        '&.react-tel-input .form-control:focus': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            zIndex: 999,
            boxShadow: 'none',
        },
        '&.react-tel-input .country-list .country-name': {
<<<<<<< HEAD
            color: theme.palette.neutral[400],
        },
        '&.react-tel-input .selected-flag': {
            backgroundColor: theme.palette.background.paper,
            border: focus ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.divider}`,
            borderRight: "none",
            padding:
                languageDirection === 'rtl' ? '0 25px 0 11px' : ' 0 0px 0 11px',
        },

        '&.react-tel-input .selected-flag .arrow': {
            left: languageDirection === 'rtl' ? '13px' : '29px',
        },
        '&.react-tel-input .flag-dropdown.open .selected-flag': {
            backgroundColor: 'unset'
        },
        '&.react-tel-input .country-list': {
            backgroundColor: theme.palette.background.paper,
        },
        "&.react-tel-input .country-list .search-box": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.neutral[600]
        },
        "&.react-tel-input .country-list .search": {
            backgroundColor: theme.palette.background.paper,
        },
    }),
}))

=======
            color: '#000000',
        },
        '&.react-tel-input .selected-flag': {
            padding:
                languageDirection === 'rtl' ? '0 25px 0 11px' : ' 0 0px 0 11px',
        },
        '&.react-tel-input .selected-flag .arrow': {
            left: languageDirection === 'rtl' ? '13px' : '29px',
        },
    }),
}))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const CustomPhoneInput = ({
    value,
    onHandleChange,
    initCountry,
    touched,
    errors,
    rtlChange,
    width,
}) => {
    const changeHandler = (e) => {
        onHandleChange(e)
    }
    const { t } = useTranslation()
    const theme = useTheme()
    const [languageDirection, setLanguageDirection] = useState('ltr')
    const [focus, setFocus] = useState(false)
    // const themeVariable = theme.palette.primary.main
    const classes = useStyles({ theme, focus, languageDirection, rtlChange })
    const defaultCountry = initCountry?.toLowerCase()
    useEffect(() => {
        if (localStorage.getItem('direction')) {
            setLanguageDirection(localStorage.getItem('direction'))
        }
    }, [])
    return (
        <CustomStackFullWidth alignItems="flex-start" spacing={0.8}>
            <PhoneInput
                autoFormat={false}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={t('Enter phone number')}
                value={value}
                enableSearchField
                enableSearch
                onChange={changeHandler}
                inputProps={{
                    required: true,
                    autoFocus: false,
                }}
                specialLabel={t('Phone')}
                country={defaultCountry}
                searchStyle={{ margin: '0', width: '95%', height: '50px' }}
                inputStyle={{
                    width: '100%',
<<<<<<< HEAD
                    height: '45px',
=======
                    height: '56px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

                    // borderRadius: '8px',
                }}
                containerClass={classes.borderClass}
                dropdownStyle={{ height: '300px', width: '267px' }}
                onlyCountries={[]}
<<<<<<< HEAD
            //  disableDropdown="false"
=======
                //  disableDropdown="false"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            />
            {touched && errors && (
                <CustomTypography
                    variant="caption"
                    sx={{
                        ml: '10px',
                        fontWeight: 'inherit',
                        color: (theme) => theme.palette.error.main,
                    }}
                >
                    {errors}
                </CustomTypography>
            )}
        </CustomStackFullWidth>
    )
}
export default CustomPhoneInput
