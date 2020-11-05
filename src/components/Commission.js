import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box"
import CommissionsComponent from "./CommissionsComponent";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div {...other}>
            {value === index && <Box p={3}>{children}</Box> }
        </div>
    );
}

const AntTabs = withStyles({
    root: {
        marginLeft: '30.875rem'
    },
    indicator: {
        backgroundColor: 'transparent',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            'Lato',
        ].join(','),
        '&:hover': {
            color: 'var(--diviDark)',
            opacity: 1,
        },
        '&$selected': {
            color: 'var(--diviBlue)',
            fontWeight: theme.typography.fontWeightBold,
        },
        letterSpacing: '1px',
        fontSize: '1rem'
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    diviHeadingOther: {
        font: 'normal normal 800 2.025rem/2.75625rem Open Sans',
        color: 'var(--diviGrey)',
        letterSpacing: '5.4px',
        marginLeft: '58.625rem'
    },

    diviSubOther: {
        font: 'normal normal 500 1.6875rem/2.025rem Lato',
        color: 'var(--diviGrey)',
        letterSpacing: '1.5px',
        marginLeft: '64.5rem'
    },

    transparentBar: {
        backgroundColor: 'transparent !important',
        boxShadow: 'none',
        color: 'inherit'
    },

    noSpace: {
        margin: '15px 30px 15px 5px',
        border: '1px solid var(--diviGrey)',
        opacity: '0.5'
    },

    commissionsContentReg: {
        marginTop: '12rem'
    },

    commissionsContent: {

    },

    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    gallery: {
        backgroundColor: 'transparent'
    },
}));

export default function Commissions() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={'galleryOverride'}>
            <div className={classes.gallery}>
                <AppBar className={classes.transparentBar} position={"static"}>
                    <AntTabs value={value} onChange={handleChange} aria-label="gallery-tabs">
                        <AntTab label="TWITCH COMMISSIONS" />
                        <hr className={classes.noSpace}/>
                        <AntTab label="OTHER COMMISSIONS" />
                    </AntTabs>
                </AppBar>
                <TabPanel className={classes.commissionsContent} value={value} index={0}>
                    <CommissionsComponent/>
                </TabPanel>
                <TabPanel className={classes.commissionsContentReg} value={value} index={2}>
                    <h1 className={classes.diviHeadingOther}>REGULAR COMMISSIONS</h1>
                    <h2 className={classes.diviSubOther}>STATUS: <span style={{color: "var(--diviRed)", fontWeight: 800}}>UNAVAILABLE</span></h2>
                </TabPanel>
            </div>
        </div>
    );
}
