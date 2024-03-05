import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import OrderDetails from './OrderDetails';
import PushNotificationLayout from "../PushNotificationLayout";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import CustomContainer from '../container';

const OrderDetail = ({orderId}) => {
    const { guestUserInfo } = useSelector((state) => state.guestUserInfo);

    return (
        <PushNotificationLayout>
            <OrderDetails phone={guestUserInfo?.contact_person_number} OrderIdDigital={orderId}/>
        </PushNotificationLayout>
=======

const OrderDetail = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: { xs: '72px', md: '0' } }}>
                <PushNotificationLayout>
                    <OrderDetails />
                </PushNotificationLayout>
            </Container>
        </>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    );
};

export default OrderDetail;