import React, { useEffect, useState } from 'react'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from './CustomSearch.style'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import {
    CloseIconWrapper,
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
<<<<<<< HEAD
import { IconButton, InputAdornment, NoSsr, useTheme } from "@mui/material";
=======
import { IconButton, NoSsr, useTheme } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import CloseIcon from '@mui/icons-material/Close'
import LoadingButton from '@mui/lab/LoadingButton'
const CustomSearch = ({
    handleSearchResult,
    label,
    isLoading,
    selectedValue,
    borderRadius,
<<<<<<< HEAD
    forMobile, backgroundColor,nav
=======
    forMobile,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const theme = useTheme()

    const { t } = useTranslation()
    const [value, setValue] = useState('')
    const router = useRouter()
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }
    useEffect(() => {
        if (selectedValue === '') {
            setValue(selectedValue)
        }
    }, [selectedValue])

    const handleKeyPress = (e) => {
<<<<<<< HEAD
=======
        console.log('log', e.target.value)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        if (e.key === 'Enter') {
            handleSearchResult(e.target.value)
            e.preventDefault()
        }
    }
    const handleReset = () => {
        setValue('')
        handleSearchResult('')
    }
    const handleChange = (value) => {
        if (value === '') {
            handleSearchResult('')
        }
        setValue(value)
    }

    return (
        <CustomStackFullWidth>
            <form onSubmit={handleKeyPress}>
<<<<<<< HEAD
                <Search borderRadius={borderRadius} backgroundColor={backgroundColor}>
                    {/*{nav ?  <SearchIconWrapper*/}
                    {/*  languageDirection={languageDirection}*/}
                    {/*  nav={nav}*/}
                    {/*>*/}
                    {/*    <SearchIcon fontSize="medium" color={backgroundColor ? backgroundColor : "primary"} />*/}
                    {/*</SearchIconWrapper>:*/}
                    {/*  value === '' && (*/}
                    {/*    <SearchIconWrapper*/}
                    {/*      languageDirection={languageDirection}*/}
                    {/*    >*/}
                    {/*        <SearchIcon fontSize="medium" color={backgroundColor ? backgroundColor : "primary"} />*/}
                    {/*    </SearchIconWrapper>*/}
                    {/*  )*/}
                    {/*}*/}
=======
                <Search borderRadius={borderRadius}>
                    {value === '' && (
                        <SearchIconWrapper
                            languageDirection={languageDirection}
                        >
                            <SearchIcon fontSize="medium" color="primary" />
                        </SearchIconWrapper>
                    )}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <NoSsr>
                        <StyledInputBase
                            placeholder={t(label)}
                            value={value}
                            onChange={(e) => handleChange(e.target.value)}
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyPress={(e) => handleKeyPress(e)}
                            languageDirection={languageDirection}
                            forMobile={forMobile}
<<<<<<< HEAD
                            startAdornment={  // Add startAdornment here
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        marginInlineStart: '10px',
                                        cursor: 'pointer',
                                        marginInlineEnd:"0px"
                                    }}
                                    // Add your content for the startAdornment here
                                >
                                    <SearchIcon
                                        fontSize="medium"
                                    />
                                </InputAdornment>
                            }
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        />
                    </NoSsr>
                    {value !== '' && (
                        <>
                            {isLoading ? (
                                <CloseIconWrapper
                                    right={-1}
                                    languageDirection={languageDirection}
                                >
                                    <LoadingButton
                                        loading
                                        variant="text"
                                        sx={{ width: '10px' }}
                                    />
                                </CloseIconWrapper>
                            ) : (
                                <CloseIconWrapper
                                    onClick={() => handleReset()}
                                    languageDirection={languageDirection}
                                >
                                    <IconButton>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </CloseIconWrapper>
                            )}
                        </>
                    )}
                </Search>
            </form>
        </CustomStackFullWidth>
    )
}

CustomSearch.propTypes = {}

export default CustomSearch
