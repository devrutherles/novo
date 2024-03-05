import React, { useEffect, useRef, useState } from 'react'
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
import CustomSearchInput from './CustomSearchInput'
import { useRouter } from 'next/router'
import { alpha } from '@mui/material'
import SearchSuggestionsBottom from '../../search/SearchSuggestionsBottom'
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { Stack } from "@mui/system";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const SearchBox = ({ query }) => {
    const [focused, setFocused] = React.useState(false)
    const [openSearchSuggestions, setOpenSearchSuggestions] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
    const [onSearchDiv, setOnSearchDiv] = useState(false)
    const { token } = useSelector((state) => state.userToken)
    const [inputValue, setInputValue] = useState('')
    const router = useRouter()
    const searchRef = useRef(null)
    const onFocus = () => setFocused(true)
    const onBlur = () => {
<<<<<<< HEAD
        setFocused(false)
=======
        //setFocused(false)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    }

    const handleSearchedValues = (value) => {
        const searchedValues = JSON.parse(
            localStorage.getItem('searchedValues')
        )
        if (searchedValues && searchedValues.length > 0) {
            if (value !== '') {
                searchedValues.push(value)
            }
            localStorage.setItem(
                'searchedValues',
                JSON.stringify([...new Set(searchedValues)])
            )
        } else {
            if (value !== '') {
                let newData = []
                newData.push(value)
                localStorage.setItem('searchedValues', JSON.stringify(newData))
            }
        }
    }
    const routeHandler = (value) => {
        setFocused(false)
        setInputValue('')

        if (value !== '') {
            router.push(
                {
<<<<<<< HEAD
                    pathname: '/home',
=======
                    pathname:
                        router.pathname === '/home'
                            ? window.location.pathname
                            : '/search',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    query: {
                        query: value,
                    },
                },
                undefined,
                { shallow: router.pathname === '/home' ? true : false }
            )
            onBlur()
        }
    }
    const handleKeyPress = (value) => {
        // Trim the input value to remove leading and trailing spaces
        const trimmedValue = value.trim()

        if (trimmedValue === '') {
            // Handle empty or whitespace-only input here (e.g., show an error message)
            // You can also choose to return early and not perform any action.

            return
        }

<<<<<<< HEAD
=======
        console.log({ trimmedValue })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        handleSearchedValues(trimmedValue)
        routeHandler(trimmedValue)
    }
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setFocused(false)
        }
    }
    useEffect(() => {
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside, {
            passive: true,
        })
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [searchRef])
<<<<<<< HEAD
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleSearchSuggestionsBottom = () => {
        if (token) {
            if (focused || inputValue.trim().length >= 1) {
                return (
<<<<<<< HEAD

                        <SearchSuggestionsBottom
                            setOnSearchDiv={setOnSearchDiv}
                            setOpenSearchSuggestions={setOpenSearchSuggestions}
                            setSelectedValue={setSelectedValue}
                            routeHandler={routeHandler}
                            handleFocus={onFocus}
                            inputValue={inputValue}
                            searchRef={searchRef}
                        />

=======
                    <SearchSuggestionsBottom
                        setOnSearchDiv={setOnSearchDiv}
                        setOpenSearchSuggestions={setOpenSearchSuggestions}
                        setSelectedValue={setSelectedValue}
                        routeHandler={routeHandler}
                        handleFocus={onFocus}
                        inputValue={inputValue}
                    />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                )
            }
        } else {
            if (inputValue.trim().length >= 1) {
                return (
<<<<<<< HEAD

                        <SearchSuggestionsBottom
                            setOnSearchDiv={setOnSearchDiv}
                            setOpenSearchSuggestions={setOpenSearchSuggestions}
                            setSelectedValue={setSelectedValue}
                            routeHandler={routeHandler}
                            handleFocus={onFocus}
                            inputValue={inputValue}
                            searchRef={searchRef}
                        />

=======
                    <SearchSuggestionsBottom
                        setOnSearchDiv={setOnSearchDiv}
                        setOpenSearchSuggestions={setOpenSearchSuggestions}
                        setSelectedValue={setSelectedValue}
                        routeHandler={routeHandler}
                        handleFocus={onFocus}
                        inputValue={inputValue}
                    />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                )
            }
        }
    }

    return (
<<<<<<< HEAD
      <Stack>
          <CustomSearchInput
            setInputValue={setInputValue}
            handleSearchResult={handleKeyPress}
            handleFocus={onFocus}
            handleBlur={onBlur}
            query={query}
            setFocused={setFocused}
          />
          {handleSearchSuggestionsBottom()}
      </Stack>

=======
        <CustomStackFullWidth
            ref={searchRef}
            sx={{
                background: (theme) => theme.palette.searchBoxBg,
                padding: '20px',
                borderRadius: '2px',
                maxWidth: '640px',
                position: 'relative',
            }}
        >
            <CustomSearchInput
                setInputValue={setInputValue}
                handleSearchResult={handleKeyPress}
                handleFocus={onFocus}
                handleBlur={onBlur}
                query={query}
                setFocused={setFocused}
            />
            {handleSearchSuggestionsBottom()}
        </CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default SearchBox
