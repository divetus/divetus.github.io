import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box"
import {BadgeGridList, EmoteGridList} from "./GalleryComponent";
import Unavailable from '../assets/Unavailable.png'

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
            color: 'var(--diviBlue)',
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
    transparentBar: {
        backgroundColor: 'transparent !important',
        boxShadow: 'none',
        color: 'inherit'
    },

    galleryContent: {
        marginLeft: '27rem'
    },

    noSpace: {
        margin: '15px 30px 15px 5px',
        border: '1px solid var(--diviGrey)',
        opacity: '0.5'
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

export default function Gallery() {
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
                    <AntTab label="EMOTE COMMISSIONS" />
                    <hr className={classes.noSpace}/>
                    <AntTab label="BADGE COMMISSIONS" />
                    <hr className={classes.noSpace}/>
                    <AntTab label="OTHER COMMISSIONS" />
                </AntTabs>
                </AppBar>
                <TabPanel className={classes.galleryContent} value={value} index={0}>
                    <EmoteGridList/>
                </TabPanel>
                <TabPanel className={classes.galleryContent} value={value} index={2}>
                    <BadgeGridList/>
                </TabPanel>
                <TabPanel className={classes.galleryContent} value={value} index={4}>
                    <img className={'Unavailable'} style={{marginLeft: '25rem', marginTop: '5rem'}}src={Unavailable} alt={'unavailable'}/>
                </TabPanel>
            </div>
        </div>
    );
}