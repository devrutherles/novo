import React, { useEffect, useRef, useState } from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import CustomSearch from '../custom-search/CustomSearch'
import SearchIcon from '@mui/icons-material/Search'
import { SearchIconWrapper } from '../../styled-components/CustomStyles.style'

import Router, { useRouter } from 'next/router'
import SearchSuggestionsBottom from '../search/SearchSuggestionsBottom'
import Notifications from '../navbar/Notifications'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite'
const HomeSearch = () => {
    const [openSearchSuggestions, setOpenSearchSuggestions] = useState(false)
    const [onSearchdiv, setOnSearchdiv] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
    const router = useRouter()

    const searchRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setOpenSearchSuggestions(false)
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [searchRef])
    const handleSearchResult = (value) => {
        localStorage.setItem('searchValue', value)
        router.push(
            {
                pathname: '/search',
                query: {
                    searchValue: value,
                },
            },
            '/search'
        )
    }
    const handleOnFocus = () => {
        setOpenSearchSuggestions(true)
        localStorage.setItem('bg', true)
    }
    const handleSearchPopoverOnClose = () => {
        if (onSearchdiv) {
            setOpenSearchSuggestions(true)
        } else {
            setOpenSearchSuggestions(false)
        }
    }
    const handleKeyPress = (value) => {
<<<<<<< HEAD
=======
        console.log({ value })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        // if (e.key === 'Enter') {
        setOpenSearchSuggestions(false)
        // Do code here
        // router.push('/search')
        let getItem = JSON.parse(localStorage.getItem('searchedValues'))
        if (getItem && getItem.length > 0) {
            if (value !== '') {
                getItem.push(value)
            }
            localStorage.setItem('searchedValues', JSON.stringify(getItem))
        } else {
            if (value !== '') {
                let newData = []
                newData.push(value)
                localStorage.setItem('searchedValues', JSON.stringify(newData))
            }
        }
        if (value !== '') {
            router.push(
                {
                    pathname: window.location.pathname,
                    query: {
                        query: value,
                    },
                },
                undefined,
                { shallow: true }
            )
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                position: 'relative',
                mb: '1rem',
            }}
            onFocus={() => handleOnFocus()}
            ref={searchRef}
        >
            {zoneid && router.pathname !== '/' && (
                <>
                    <CustomSearch
                        label="Search..."
                        handleSearchResult={handleKeyPress}
                        selectedValue={selectedValue}
                    />
                    {openSearchSuggestions && (
                        <SearchSuggestionsBottom
                            setOnSearchdiv={setOnSearchdiv}
                            setOpenSearchSuggestions={setOpenSearchSuggestions}
                            setSelectedValue={setSelectedValue}
                        />
                    )}
                </>
            )}
        </Box>
    )
}
export default HomeSearch
