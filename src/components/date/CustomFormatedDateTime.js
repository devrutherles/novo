import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'

const CustomFormatedDateTime = ({ date }) => {
    const { global } = useSelector((state) => state.globalSettings)
    let timeFormat = global?.timeformat

<<<<<<< HEAD


=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    if (timeFormat === '12') {
        return moment(date).format('ll hh:mm a')
    } else {
        return moment(date).format('ll HH:mm')
    }
}

export default CustomFormatedDateTime
