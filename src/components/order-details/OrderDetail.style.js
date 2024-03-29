import { styled } from '@mui/material/styles'
<<<<<<< HEAD
import { alpha, Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
=======
import { alpha, Box, Grid, Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

export const OrderDetailGrid = styled(Grid)(() => ({
    background: '#FFFFFF',
    boxShadow:
        '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.1)',
    borderRadius: '10px',
    padding: '10px 20px',
}))
export const OrderDetailBox = styled(Box)(() => ({
    paddingTop: '10px',
    paddingBottom: '70px',
}))
export const OrderNumberGrid = styled(Grid)(() => ({
    textAlign: 'center',
}))
export const OrderStatusGrid = styled(Grid)(({ theme }) => ({
    // background: '#FBFBFB',
    background: theme.palette.cardBackground1,
    borderRadius: '14px',
    padding: '20px',
    rowGap: '10px',
}))

export const OrderStatusBox = styled(Box)(({ theme }) => ({
    padding: '7px 0px 20px 0px',
    [theme.breakpoints.up('xs')]: {
        textAlign: 'center',
    },
}))
<<<<<<< HEAD
export const IformationGrid = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
=======
export const IformationGrid = styled(Grid)(({ theme }) => ({
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    background:
        theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.main, 0.05)
            : alpha(theme.palette.primary.main, 0.1),
<<<<<<< HEAD
    borderRadius: '10px',
    padding: '10px',
}))

export const IformationGridWithBorder = styled(Stack)(({ theme,isVerfired }) => ({
    borderRadius: '14px',
    padding:isVerfired?"0rem": '1rem',
    border: !isVerfired && `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    boxShadow:!isVerfired && "0px 5px 10px 0px rgba(51, 66, 87, 0.05)"
}))
export const OfflineWrapper = styled(Stack)(({ theme }) => ({
    borderRadius: '14px',
    position:"absolute",
    top:"8px",
    right:"8px"
}))

export const OrderSummaryGrid = styled(Grid)(() => ({
    padding: '0px 20px 20px 20px',
    //paddingTop: '25px',
=======
    borderRadius: '14px',
    padding: '1rem',
}))

export const OrderSummaryGrid = styled(Grid)(() => ({
    padding: '20px',
    paddingTop: '25px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}))
export const OrderSummary = styled(Typography)(() => ({
    textAlign: 'center',
    color: '#4B566B',
    fontSize: '18px',
    fontWeight: '700',
    paddingBottom: '30px',
}))
<<<<<<< HEAD
export const OrderFoodName = styled(Typography)(({ theme, color, textAlign, fontSize, fontWeight }) => ({
    fontSize: fontSize || '12px',
    fontWeight: fontWeight || 400,
    color: color || theme.palette.neutral[1000],
    textAlign: textAlign || 'start',
}))
export const OrderFoodAmount = styled(Typography)(({ theme }) => ({
    color: theme.palette.customColor.fifteen,
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'end'
}))
export const CalculationGrid = styled(Grid)(() => ({
    fontSize: '14px',
    fontWeight: 400
=======
export const OrderFoodName = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.neutral[1000],
}))
export const OrderFoodAmount = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '16px',
    fontWeight: '600',
}))
export const CalculationGrid = styled(Grid)(() => ({
    fontSize: '14px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}))
export const TotalGrid = styled(Grid)(() => ({
    fontSize: '16px',
    fontWeight: '600',
}))

<<<<<<< HEAD
export const TitleTypography = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '600',
    color: theme.palette.customColor.fifteen,
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
    },

=======
export const TitleTypography = styled(Typography)(({ theme, align }) => ({
    fontSize: '18px',
    fontWeight: '700',
    textAlign: align ? align : '',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}))

export const HeadingBox = styled(Box)(() => ({
    padding: '10px 0px 20px 0px',
}))

export const InfoTypography = styled(Typography)(({ theme }) => ({
<<<<<<< HEAD
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "28px",
    color: theme.palette.neutral[900],
    [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
        lineHeight: "20px",

    },
}))
export const SummaryTypography = styled(Typography)(({ theme }) => ({

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    [theme.breakpoints.up('xs')]: {
        fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    },
}))
<<<<<<< HEAD
export const RefundButton = styled(Button)(({ theme }) => ({

    width: "100%",
    fontSize: "14px",
    fontWeight: 400,
    marginBlock: "16px",
    border: `1px solid ${alpha(theme.palette.error.main, 0.6)}`,
    color: theme.palette.error.main,
}))
export const ProductDetailsWrapper = styled(Stack)(({ theme,isVerfired }) => ({
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: theme.shadows[26]
}))
export const CustomProductDivider = styled(Divider)(({ theme, style, height }) => ({
    height: height || "1px",
    margin: '0px',
    borderStyle: style || "groove"
}))
export const CustomOrderStatus = styled(Stack)(({ theme, color,isVerfired }) => ({
    paddingBlock: "3px",
    paddingInline:"8px",
    backgroundColor: alpha(color, 0.1),
    borderRadius: "2px",
    marginBottom: "0px !important",
}))
export const InstructionWrapper = styled(Stack)(({ theme }) => ({
    padding: "15px",
    backgroundColor: theme.palette.neutral[1800],
    borderRadius: "10px",
    [theme.breakpoints.down('md')]: {
        padding: "10px",
    },
}))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
