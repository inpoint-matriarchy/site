import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, Button, Container, IconButton, Toolbar, Typography, Box,} from '@material-ui/core';
import {useStyles} from './Constants';


export default class MenuBar extends Component {
    render() {
    const classes = useStyles();
  return ( <>
    <AppBar position="fixed">
    <Container fixed>
      <Toolbar>
        <IconButton onClick={console.log('ready')} edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>Главная</Typography>
        <Box mr={3}>
          <Button color="inherit" variant="outlined">Let's celebrate and</Button>
        </Box>
        <Button color="secondary" variant="contained">)))))))))</Button>
      </Toolbar>
    </Container>
  </AppBar>
  </>
  )
    }
}
