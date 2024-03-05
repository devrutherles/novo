import React from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Autocomplete, Paper, styled, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
<<<<<<< HEAD
import SearchIcon from '@mui/icons-material/Search';
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const CssTextField = styled(TextField)(({ theme, border }) => ({
    '& label.Mui-focused': {
        color: '#EF7822',
        background: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#EF7822',
        background: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
<<<<<<< HEAD
    '& .MuiFormLabel-root':{
        lineHeight:"1em !important",
        fontSize:"14px",
    },
    '& .MuiOutlinedInput-input':{
        fontWeight:"400",
    },
    '& .MuiOutlinedInput-root': {
        height: '45px',
        padding: '4px 4px 4px 16px',
        fontSize:"14px",
        fontWeight:"400 !important",
=======
    '& .MuiOutlinedInput-root': {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        border: border ? border : '',
        '& fieldset': {
            borderColor: '#EF7822',
        },
        '&:hover fieldset': {
            borderColor: '#EF7822',
            border: `1px solid ${border}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: '#EF7822',
        },
    },
}))
<<<<<<< HEAD
=======
// const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//         color: '#EF7822',
//         background: '#fff',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: '#EF7822',
//         background: '#fff',
//     },
//     '& .MuiOutlinedInput-notchedOutline': {
//         border: 'none',
//     },
//     '& .MuiOutlinedInput-root': {
//         border: '2px solid #EF7822 ',
//         '& fieldset': {
//             borderColor: '#EF7822',
//         },
//         '&:hover fieldset': {
//             borderColor: '#EF7822',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: '#EF7822',
//         },
//     },
// })
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
const CustomMapSearch = ({
    border,
    setSearchKey,
    setEnabled,
    predictions,
    setPlaceId,
    setPlaceDescription,
    setPlaceDetailsEnabled,
    searchKey,
    placeDescription,
<<<<<<< HEAD
    isLoadingPlacesApi, currentLocationValue
}) => {
    const { t } = useTranslation()


=======
    isLoadingPlacesApi,
}) => {
    const { t } = useTranslation()

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            <CustomStackFullWidth mb="1rem">
                <Paper
                    variant="outlined"
                    sx={{
                        width: '100%',
                    }}
                >
                    <Autocomplete
                        fullWidth
                        freeSolo
                        id="combo-box-demo"
                        getOptionLabel={(option) => option.description}
                        options={predictions}
<<<<<<< HEAD
                        value={currentLocationValue}
                        loading={isLoadingPlacesApi}
                        loadingText={t('Loading...')}
=======
                        value={searchKey}
                        loading={isLoadingPlacesApi}
                        loadingText={t('Loading...')}
                        // noOptionsText={t('No location found.')}
                        //defaultValue={predictions[0]}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        onChange={(event, value) => {
                            if (value) {
                                if (value.place_id) {
                                    setPlaceId(value?.place_id)
                                    setPlaceDescription(value?.description)
                                }
                            }
<<<<<<< HEAD
                            setPlaceDescription(value?.description)
                            setPlaceDetailsEnabled(true)
                        }}
                        clearOnBlur={true}
                        renderInput={(params) => (
                            <CssTextField

                                border={border}

=======
                            setPlaceDetailsEnabled(true)
                        }}
                        // onSelect={(event) => handleTag(event, 'tags')}
                        clearOnBlur={true}
                        //value={searchKey}
                        // sx={{ width: 300 }}
                        // inputValue={searchKey}
                        // onInputChange={(event, newInputValue) => {
                        //     setSearchKey(newInputValue)
                        // }}
                        renderInput={(params) => (
                            <CssTextField
                                border={border}
                                label={t('Search location')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                {...params}
                                placeholder={t('Search location here...')}
                                onChange={(event) => {
                                    setSearchKey({
                                        description: event.target.value,
                                    })
                                    if (event.target.value) {
                                        setEnabled(true)
                                    } else {
                                        setEnabled(false)
                                    }
                                }}
<<<<<<< HEAD
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <>
                                            <SearchIcon color="disabled" sx={{fontSize:"1.7rem"}}/>
                                            {params.InputProps.startAdornment}
                                        </>
                                    ),
                                }}
=======
                                // onSubmit={() => {
                                //     if (predictions.length > 0) {
                                //         setSearchKey({
                                //             description:
                                //                 predictions[0].description,
                                //         })
                                //     }
                                // }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            />
                        )}
                    />
                </Paper>
            </CustomStackFullWidth>
        </>
    )
}
export default CustomMapSearch
