import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

export const Dots = styled(Box)(({ theme }) => ({
    "@keyframes dots": {
        "0%": {
            backgroundColor: theme.palette.primary.dark,
        },
        "50%, 100%": {
            backgroundColor: theme.palette.neutral[100],
        },
    },
    position: "relative",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    animation: "dots 1s infinite linear alternate",
    animationDelay: "0.5s",
    "&::after, &::before": {
        content: "''",
        display: "inline-block",
        position: "absolute",
        top: "0",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        animation: "dots 1s infinite alternate",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    },
    "&::before": {
        left: "-15px",
        animationDelay: "0s",
    },
    "&::after": {
        left: "15px",
        animationDelay: "1s",
    },
}));

<<<<<<< HEAD
export const AnimationDots = ({ align,size }) => {
=======
export const AnimationDots = ({ align }) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const theme = useTheme();

    return (
        <>
            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                    justifyContent:
                        align == "top"
                            ? align == "center"
                                ? "flex-end"
                                : "flex-start"
                            : "center",
                    alignItems: "center",
<<<<<<< HEAD

                }}
            >
                <Box marginTop={align ==="center" ? "80px" : size ?? "35px"}>
=======
                    background: theme.palette.background.default,
                }}
            >
                <Box marginTop={align ==="center" ? "80px" : "35px"}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    <Dots />
                </Box>
            </Stack>
        </>
    );
};