<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays, subDays } from "date-fns";
import moment from "moment";
const Calendar = ({ handleValue,minDate, maxDate,diffStartEnd }) => {

    const today = new Date();
    const [state, setState] = useState([
        {
            startDate: moment(minDate).toDate(),
            endDate: moment(maxDate).toDate(),
            key: "selection"
        }
    ]);

    const handleOnChange = (ranges) => {
        const { selection } = ranges;
        setState([selection]);
    };
    useEffect(() => {
        if (state[0]?.startDate && state[0]?.endDate) {
            const startDate = moment(state[0]?.startDate);
            const endDate = moment(state[0]?.endDate);
            if(diffStartEnd){
                if (!startDate.isSame(endDate)) {
                    handleValue?.(state);
                }
            }else{
                handleValue?.(state);
            }

        }
    }, [state]);

    return (
        <>
            {minDate && maxDate ?(
                <DateRangePicker
                    onChange={handleOnChange}
                    showSelectionPreview={false}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                    minDate={moment(minDate).toDate()}
                    maxDate={moment(maxDate).toDate()}
                />
            ):(<DateRangePicker
                onChange={handleOnChange}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={state}
                direction="horizontal"
                minDate={today}
            />)}
        </>

    );
};

Calendar.propTypes = {
    onChange: PropTypes.func,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date)
};

export default Calendar;
=======
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {CustomStackFullWidth} from "../../styled-components/CustomStyles.style";
import {Box, Grid, TextField} from "@mui/material";
import {MobileDateRangePicker} from "@mui/lab";
import moment from "moment";


const CustomMobileDateRangePicker = props => {
    const { handleValue, minDate, maxDate, diffStartEnd} = props
    const [value, setValue] = useState([null, null]);
    useEffect(()=>{
        if(value[0]!== null && value[1]!== null){
            handleValue?.(value)
        }

    },[value])

    const handleDateComponent = ()=>{
        if(minDate && maxDate){
            return <MobileDateRangePicker
                value={value}
                minDate={moment(minDate).toDate()}
                maxDate={moment(maxDate).toDate()}
                onChange={(newValue) => {
                    if(diffStartEnd){
                        if(value[0]!==value[1]){
                            setValue(newValue);
                        }
                    }
                    else{
                        setValue(newValue);
                    }

                }}
                renderInput={(startProps, endProps) => (
                    <Grid container spacing={3}>
                        <Grid item xs={6}><TextField fullWidth {...startProps} /></Grid>
                        <Grid item xs={6}> <TextField fullWidth {...endProps} /></Grid>
                    </Grid>
                )}
            />
        }
        else{
            return <MobileDateRangePicker
                disablePast
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <Grid container spacing={3}>
                        <Grid item xs={6}><TextField fullWidth {...startProps} /></Grid>
                        <Grid item xs={6}> <TextField fullWidth {...endProps} /></Grid>
                    </Grid>
                )}
            />
        }

    }
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                {handleDateComponent()}
            </LocalizationProvider>

        </div>
    );
};

CustomMobileDateRangePicker.propTypes = {

};

export default CustomMobileDateRangePicker;
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
