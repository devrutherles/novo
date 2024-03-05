<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import  { useEffect, useState } from 'react'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    Button,
    InputBase,
    Box,
    CircularProgress,
    Typography,
} from '@mui/material'
<<<<<<< HEAD

import { DeliveryCaption, SaveAddressBox, InputField } from './CheckOut.style'
import { useQuery } from 'react-query'
import { AddressApi } from '../../hooks/react-query/config/addressApi'
import { useTranslation } from 'react-i18next'
=======
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import { DeliveryCaption, SaveAddressBox, InputField } from './CheckOut.style'
import { useQuery } from 'react-query'
import { AddressApi } from '../../hooks/react-query/config/addressApi'
import AddNewAddress from '../user-info/address/AddNewAddress'
import Link from 'next/link'
import CustomCheckOutShimmer from '../CustomShimmerForCheckout/CustomCheckOutShimmer'
import { useTranslation } from 'react-i18next'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { useTheme } from '@mui/material/styles'
import { onErrorResponse, onSingleErrorResponse } from '../ErrorResponse'
import { toast } from 'react-hot-toast'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import AddressSelectionField from './AddressSelectionField'
import AddressSelectionList from './order-summary/AddressSelectionList'



<<<<<<< HEAD
const getZoneWiseAddresses = (addresses, restaurantId) => {
    const newArray = []
    addresses.forEach(item => item.zone_ids.includes(restaurantId) && newArray.push(item))
=======
const getZoneWiseAddresses=(addresses, restaurantId)=>{
    const newArray = []
    addresses.forEach(item=> item.zone_ids.includes(restaurantId) &&  newArray.push(item))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return newArray

}
const DeliveryAddress = ({
<<<<<<< HEAD
    setAddress,
    address,
    hideAddressSelectionField,
    handleSize,
    renderOnNavbar,
    additionalInformationDispatch,
    restaurantId, token, handleAddressSetSuccess
}) => {
    const theme = useTheme()
    const { t } = useTranslation()
=======
                             setAddress,
                             address,
                             hideAddressSelectionField,
                             handleSize,
                             renderOnNavbar,
                             additionalInformationDispatch,
                             restaurantId
                         }) => {
    const theme = useTheme()
    const {t} = useTranslation()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [allAddress, setAllAddress] = useState()
    const [data, setData] = useState(null)

    const mainAddress = {
        ...address,
    }
    const handleSuccess = (response) => {
<<<<<<< HEAD
        if (restaurantId) {
            const newObj = {
                ...response.data,
                addresses: getZoneWiseAddresses(response.data.addresses, restaurantId)
            }
            setData(newObj)
        } else {
=======
        if(restaurantId){
            const newObj = {
                ...response.data,
                addresses:getZoneWiseAddresses(response.data.addresses, restaurantId)
            }
            setData(newObj)
        }else{
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            setData(response.data)
        }


    }
<<<<<<< HEAD
    const { refetch, isRefetching } = useQuery(
=======
    const {refetch, isRefetching} = useQuery(
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        ['address-list'],
        AddressApi.addressList,
        {
            enabled: false,
            onSuccess: handleSuccess,
            onError: onSingleErrorResponse,
        }
    )
    useEffect(async () => {
<<<<<<< HEAD
        if (token) {
            await refetch()
        }

    }, [restaurantId])
    useEffect(() => {
=======
        await refetch()
    }, [restaurantId])
    useEffect(() => {
        // handleSize(data.total_size)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        data && setAllAddress([mainAddress, ...data.addresses])
    }, [data])

    const handleLatLng = (values) => {
<<<<<<< HEAD
        setAddress({ ...values, lat: values.latitude, lng: values.longitude })

    }


    return (
        <>
            {!renderOnNavbar && <DeliveryCaption>{t('Delivery Addresses')}</DeliveryCaption>}
=======
        setAddress({...values, lat: values.latitude, lng: values.longitude})
    }

    return (
        <>
            <DeliveryCaption>{t('Delivery Addresses')}</DeliveryCaption>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            {hideAddressSelectionField !== 'true' && (
                <AddressSelectionField
                    theme={theme}
                    address={address}
                    refetch={refetch}
                    t={t}
                />
            )}
            {renderOnNavbar === 'true' ? (
                <AddressSelectionList
                    data={data}
<<<<<<< HEAD
                    allAddress={data?.addresses}
=======
                    allAddress={allAddress}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    handleLatLng={handleLatLng}
                    t={t}
                    address={address}
                />
            ) : (
<<<<<<< HEAD
                <SimpleBar style={{ maxHeight: 200 }}>
=======
                <SimpleBar style={{maxHeight: 200}}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <AddressSelectionList
                        data={data}
                        allAddress={allAddress}
                        handleLatLng={handleLatLng}
                        t={t}
                        address={address}
                        isRefetching={isRefetching}
                        additionalInformationDispatch={additionalInformationDispatch}
                    />
                </SimpleBar>
            )}
        </>
    )
}
export default DeliveryAddress
