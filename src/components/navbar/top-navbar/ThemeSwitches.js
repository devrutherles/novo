<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";

import { useSettings } from "../../../contexts/use-settings";
import i18n from "i18next";
import { CustomSwitch } from "./TopNav.style";
const getValues = (settings) => ({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
});

const ThemeSwitches = ({noText,themeMode,handleThemeChangeMode}) => {
    const { settings, saveSettings } = useSettings();
    const [values, setValues] = useState(getValues(settings));
    const [value, setvalue] = useState("");
    const { t } = useTranslation();
    const theme = useTheme();
    const handleChange = (event) => {
        setvalue(event.target.checked);
        if (event.target.checked) {
            saveSettings({
                ...values,
                theme: "light",
            });
        } else {
            saveSettings({
                ...values,
                theme: "dark",
            });
        }
    };
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.8}
      >
          <CustomSwitch
            checked={themeMode === "light"}
            onChange={handleThemeChangeMode}
          />
          {
              !noText ?   <Typography fontSize="14px" color={theme.palette.neutral[1000]}>
                  {themeMode === "light" ? t("Light Mode") : t("Dark Mode")}
              </Typography> : null
          }

      </Stack>
    );
};

// ThemeSwitches.propTypes = {};

export default ThemeSwitches;
=======
import React from 'react'
import PropTypes from 'prop-types'
import { Stack } from '@mui/material'
import { CustomColouredTypography } from '../../../styled-components/CustomStyles.style'
import { useTranslation } from 'react-i18next'
import { CustomStack, CustomSwitch } from '../Navbar.style'
import { useTheme } from '@mui/material/styles'
import { MoonIcon, SunIcon } from '../customSvgIcon'

const ThemeSwitches = ({ checked, handleThemeChangeMode, themeMode }) => {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            onClick={() => handleThemeChangeMode()}
        >
            {/*<CustomColouredTypography color={theme.palette.neutral[600]}>*/}
            {/*    {t('Dark Mode')}*/}
            {/*</CustomColouredTypography>*/}
            <CustomStack>
                {themeMode === 'light' ? (
                    <MoonIcon color={theme.palette.primary.main} />
                ) : (
                    <SunIcon color={theme.palette.primary.main} />
                )}
            </CustomStack>
        </Stack>
    )
}

ThemeSwitches.propTypes = {}

export default ThemeSwitches
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
