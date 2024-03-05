import React from 'react';
import {Paper, Stack, Typography} from "@mui/material";
import {CustomStackFullWidth} from "../../../styled-components/CustomStyles.style";
import {CustomTypography} from "../../custom-tables/Tables.style";
import Skeleton from "@mui/material/Skeleton";
import {FormatedDateWithTimeAnotherType, getDateFormatAnotherWay} from "../../../utils/customFunctions";
import CustomePagination from "../../pagination/Pagination";
import CustomEmptyResult from "../../empty-view/CustomEmptyResult";
<<<<<<< HEAD
import nodata from "../../../../public/static/7466140.png";
=======
import nodata from "../../../../public/static/nodata.png";
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import CustomFormatedTime from "../../date/CustomFormatedTime";

const Logs = props => {
    const {t, title, logs, offset,setOffset, isRefetching} = props
    const deliveryLogs = () => {
        return <CustomStackFullWidth spacing={2}>
            {logs?.data?.map((log,index) => {
                return <CustomStackFullWidth direction='row' key={log?.id} alignItems='center'
                                             justifyContent='space-between'>
                    <Stack>
                        <Typography><span>{`#${index+1}`}</span></Typography>
                        <Typography fontSize='12px'>{FormatedDateWithTimeAnotherType(log?.created_at)}</Typography>

                    </Stack>
                    <Typography textTransform='capitalize' sx={{
                        padding: '8px 15px',
                        backgroundColor: theme => theme.palette.primary.main,
                        color: theme => theme.palette.whiteContainer.main,
                        borderRadius: '8px'
                    }}>{log?.order_status}</Typography>
                </CustomStackFullWidth>
            })}
        </CustomStackFullWidth>
    }
    const pauseLogs = () => {
        return <CustomStackFullWidth spacing={2}>
            {logs?.data?.map(log => {
                return <CustomStackFullWidth direction='row' key={log?.id} alignItems='center'
                                             justifyContent='space-between'>
                    <Typography>{t('Log id:-')} <span>{`#${log?.id}`}</span></Typography>
                    <Typography fontSize='14px'
                                color='gray'>{getDateFormatAnotherWay(log?.from)} - {getDateFormatAnotherWay(log?.to)}</Typography>


                </CustomStackFullWidth>
            })}
        </CustomStackFullWidth>

    }
    return (
<<<<<<< HEAD
        <Paper sx={{ padding: '1rem', minHeight: '200px'}}>
=======
        <Paper sx={{width: {xs: '300px', sm: '350px'}, padding: '1rem', minHeight: '400px'}}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <CustomStackFullWidth alignItems='center' justifyContent='center' spacing={3}>
                <CustomTypography variant="h4">
                    {t(title)}
                </CustomTypography>
<<<<<<< HEAD
                <CustomStackFullWidth alignItems='center' justifyContent='space-between' >
                    {!isRefetching ? logs?.data?.length > 0 ? title?.includes('Delivery') ? deliveryLogs() : pauseLogs() :
                        <CustomEmptyResult width="200px" height="100px" image={nodata} label="No logs found"/> : <Skeleton variant='text' width='100%'/>}
=======
                <CustomStackFullWidth alignItems='center' justifyContent='space-between' sx={{minHeight:'400px'}}>
                    {!isRefetching ? logs?.data?.length > 0 ? title?.includes('Delivery') ? deliveryLogs() : pauseLogs() :
                        <CustomEmptyResult image={nodata} label="No logs found"/> : <Skeleton variant='text' width='100%'/>}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {
                        logs?.total_size>10&& <CustomePagination
                            total_size={logs?.total_size}
                            page_limit={logs?.limit}
                            offset={offset}
                            setOffset={setOffset}
                        />
                    }
                </CustomStackFullWidth>
            </CustomStackFullWidth>
        </Paper>
    )
        ;
};

Logs.propTypes = {};

export default Logs;