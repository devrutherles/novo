import React from 'react'
<<<<<<< HEAD
import { Box, Pagination, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPagination = styled(Pagination)(({ theme }) => ({

    '& .MuiPaginationItem-root': {
        fontWeight: '700',
        color: theme.palette.neutral[400],
    },
    '& .Mui-selected': {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: theme.palette.neutral[100],
        fontWeight: '700',
    },
}));
=======
import { Box, Pagination, Stack } from '@mui/material'

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
export default function CustomePagination({
    total_size,
    page_limit,
    offset,
    setOffset,
}) {
<<<<<<< HEAD
    const theme = useTheme();
    const isXsmall = useMediaQuery(theme.breakpoints.down("sm"))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
<<<<<<< HEAD
                paddingBlockStart: "25px"
            }}
        >
            <StyledPagination
                size={isXsmall ? "medium" : "large"}

                variant="outlined"
                count={Math.ceil(total_size / page_limit)}
                onChange={(e, value) => {
                    setOffset(value)
                }}
                page={offset}
            />
=======
                paddingBlockStart:"25px"
            }}
            //padding={{xs:"10px 0px 0px 0px",md:'30px 0px 20px 0px'}}
        >
                <Pagination
                    count={Math.ceil(total_size / page_limit)}
                    onChange={(e, value) => {
                        setOffset(value)
                    }}
                    page={offset}
                />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </Box>
    )
}
