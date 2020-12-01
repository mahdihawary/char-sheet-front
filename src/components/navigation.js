import React from 'react'
import {NavLink} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import logoDesign from '../logo/logoDesign.png'
import { Box, Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { FullscreenExit } from '@material-ui/icons';

const drawerWidth = 200;

const muitheme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#2c3e50",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
})
const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
    drawer:{
        background: "#2c3e50"
    },
    root: {
        display: 'flex',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


function Navigation(){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <NavLink to="/"><ListItem button ><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Home" /></ListItem></NavLink>
                <NavLink to="/characters"><ListItem button ><ListItemIcon><PeopleIcon /></ListItemIcon><ListItemText primary="Characters" /></ListItem></NavLink>
                <NavLink to="/creator"><ListItem button ><ListItemIcon><PersonAddIcon /></ListItemIcon><ListItemText primary="Create" /></ListItem></NavLink>
            </List>
        </div>
    );


    return(
        <div className="navo">
        <ThemeProvider theme={muitheme}
           >
        <div 
        className={classes.root}>
         <AppBar
         color="primary"
         className="naver"
                position="fixed"
            >
                <Toolbar >
                    <Box noWrap className={classes.title}><img src={logoDesign} alt='' className="logo"/></Box>
                    {/* <Typography variant="h6" noWrap className={classes.title}>ap</Typography> */}
                    {/* <Container width={1/4}><img src={logoDesign} alt='' /></Container> */}
                    
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer("right", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
               
          <Drawer classes={classes.drawer} anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
      
    </div>
        </ThemeProvider>
        </div>
       
    )

}

export default Navigation