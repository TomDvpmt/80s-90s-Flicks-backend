import { INDIANA_JONES_PALETTE } from "./palettes";
import { LANGUAGE_FR } from "../languages/fr";
import { LANGUAGE_EN } from "../languages/en";

import { createTheme } from "@mui/material/styles";

const languages = {
    fr: LANGUAGE_FR,
    en: LANGUAGE_EN,
};

// Intermediate theme in order to use breakpoints and palette inside createTheme, see https://github.com/mui/material-ui/issues/28330
let theme = createTheme({ palette: INDIANA_JONES_PALETTE });

theme = createTheme(theme, {
    typography: {
        fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
        h1: {
            margin: "3rem 0",
            fontSize: "1.5rem",
            [theme.breakpoints.up("sm")]: {
                fontSize: "3rem",
            },
            textAlign: "center",
        },
        h2: {
            fontSize: "2rem",
            textTransform: "uppercase",
        },
        h3: {
            fontSize: "1.5rem",
        },
        body1: {
            [theme.breakpoints.up("xs")]: {
                fontSize: ".8rem",
                lineHeight: "1.2",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: ".9rem",
                lineHeight: "1.35",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "1rem",
                lineHeight: "1.5",
            },
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.light,
                },
            },
        },
    },

    // Custom properties

    maxWidth: {
        nav: "1200px",
        main: "1200px",
        filters: "700px",
        userForm: "400px",
        filmography: "500px",
    },
    margin: {
        buttonTop: {
            spaced: ".5rem",
            notSpaced: ".8rem",
        },
    },
    languages,
});

export default theme;
