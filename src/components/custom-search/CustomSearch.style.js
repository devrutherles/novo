import { alpha, InputBase, styled } from '@mui/material'

<<<<<<< HEAD
export const Search = styled('div')(({ theme, borderRadius, backgroundColor}) => ({
=======
export const Search = styled('div')(({ theme, borderRadius }) => ({
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: borderRadius ? borderRadius : '24px',
    background:
<<<<<<< HEAD
    backgroundColor ?backgroundColor:  theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.main, 0.05)
            : alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.neutral[600],
    //border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
=======
        theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.main, 0.05)
            : alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.neutral[600],
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    width: '100%',
    //margin: 'auto',
    [theme.breakpoints.up('sm')]: {},
}))
export const SearchIconWrapper = styled('div')(
<<<<<<< HEAD
    ({ theme, languageDirection ,nav}) => ({
=======
    ({ theme, languageDirection }) => ({
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
         top:!nav && 0,
         right:!nav && 0,
        left:!nav && 'unset',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, .5),
        },
=======
        top: 0,
        right: 0,
        left: 'unset',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    })
)

export const StyledInputBase = styled(InputBase)(
    ({ theme, languageDirection, backgroundColor, forMobile }) => ({
        color: 'inherit',
<<<<<<< HEAD
         borderRadius:"8px",
        width: '100%',
        backgroundColor: backgroundColor ? backgroundColor : '',
        '& .MuiInputBase-input': {
            fontSize:"12px",
            padding:
                forMobile === 'true'
                    ? theme.spacing(0.7, 0.7, 0.7, 0.7)
                    : theme.spacing(1.5, 1, 1.5, 1),
            // vertical padding + font size from searchIcon

         // paddingLeft: `calc(1em + ${theme.spacing(0)})`,
          paddingRight:
            languageDirection === "rtl" && `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.down('sm')]: {
               fontSize:"13px",height:"1em"
            },
=======
        width: '100%',
        backgroundColor: backgroundColor ? backgroundColor : '',
        '& .MuiInputBase-input': {
            padding:
                forMobile === 'true'
                    ? theme.spacing(0.7, 0.7, 0.7, 0.7)
                    : theme.spacing(1, 1, 1.5, 2),
            // vertical padding + font size from searchIcon

            paddingRight:
                languageDirection === 'rtl' &&
                `calc(1em + ${theme.spacing(4)}) `,
            transition: theme.transitions.create('width'),
            width: '100%',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            // [theme.breakpoints.up('md')]: {
            //     width: '20ch',
            // },
        },
    })
)
