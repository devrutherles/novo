import React from 'react';
import order from "../../../public/static/profile/order.svg";
import profile from "../../../public/static/profile/profileIcon.svg";
import cupons from "../../../public/static/profile/cupons.png";
import wallet from "../../../public/static/profile/wallet.svg";
import loyalty from "../../../public/static/profile/loyalty.svg";
import refer from "../../../public/static/refer_code.png";
import address from "../../../public/static/profile/address.png";
import settings from "../../../public/static/profile/settings.svg";
import wish from "../../../public/static/profile/wish.svg"
import inboxIcon from "../../../public/static/profile/inbox-icon.png"
<<<<<<< HEAD
import { CustomPaperBigCard, CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import CustomerInfo from "./CustomerInfo";
import MenuBar from "./MenuBar";
import { RTL } from "../RTL/RTL";
=======
import {CustomPaperBigCard, CustomStackFullWidth} from "../../styled-components/CustomStyles.style";
import CustomerInfo from "./CustomerInfo";
import MenuBar from "./MenuBar";
import {RTL} from "../RTL/RTL";
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
export const tabData = [
    {
        id: 1,
        label: 'My Profile',
<<<<<<< HEAD
        value: "profile",
=======
        value:"profile",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        img: profile,
    },
    {
        id: 2,
        label: 'Orders',
<<<<<<< HEAD
        value: "order",
=======
        value:"order",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        img: order,
    },
    {
        id: 3,
        label: 'Coupons',
<<<<<<< HEAD
        value: "coupons",
=======
        value:"coupons",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        img: cupons,
    },
    {
        id: 4,
        label: 'Wish List',
        value: 'wishlist',
<<<<<<< HEAD
        img: wish,
=======
        img:wish,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
    {
        id: 5,
        label: 'Wallets',
<<<<<<< HEAD
        value: "wallets",
=======
        value:"wallets",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        img: wallet,
    },
    {
        id: 6,
        label: 'Loyalty Points',
<<<<<<< HEAD
        value: "loyalty",
=======
        value:"loyalty",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        img: loyalty,
    },
    {
        id: 7,
        label: 'Referral Code',
        value: 'referral',
<<<<<<< HEAD
        img: refer,
=======
        img:refer,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    },
    {
        id: 8,
        label: 'Inbox',
        value: 'inbox',
<<<<<<< HEAD
        img: inboxIcon,

    },

=======
        img:inboxIcon,

    },
   
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    {
        id: 9,
        label: 'Settings',
        value: 'settings',
        img: settings,
    },
]
<<<<<<< HEAD
const ProfileSideMenu = ({ onClose, sidedrawer, page,setAttributeId }) => {
    let languageDirection = undefined
=======
const ProfileSideMenu = ({onClose,sidedrawer,page}) => {let languageDirection = undefined
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }

    return (
        <RTL direction={languageDirection} >
<<<<<<< HEAD
            <CustomStackFullWidth
                sx={{ position: "sticky",
                    top: { xs: "90px", md: "130px" },
                    zIndex: 9,}}
            >
            <CustomPaperBigCard
                padding="1rem"
                sx={{
                    borderRadius: "5px",
                   // height: "100vh",
                    paddingTop: "15px",
                    marginTop: "2px",
                    paddingBottom:"25px"

                }}
            >
                <CustomStackFullWidth gap="20px" >
                    <CustomerInfo />
                    <MenuBar setAttributeId={setAttributeId} tabData={tabData} onClose={onClose} sidedrawer={sidedrawer} page={page} />
                </CustomStackFullWidth>
            </CustomPaperBigCard>
            </CustomStackFullWidth>
=======
        <CustomPaperBigCard padding="1rem" sx={{borderRadius:"5px",height:"100%"}}>
           <CustomStackFullWidth spacing={3}>
               <CustomerInfo/>
               <MenuBar  tabData={tabData} onClose={onClose} sidedrawer={sidedrawer} page={page}/>
           </CustomStackFullWidth>
        </CustomPaperBigCard>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </RTL>
    );
};

export default ProfileSideMenu;
