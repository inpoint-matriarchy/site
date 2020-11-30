import './App.css';
import React from 'react';
import {AppBar, Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, Card, CardContent, CardActions, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles, cards} from './Constants';


class Menu extends React.Component{
    render(){
      let menuitems = ["Главная", "Не главная"]
    return <div>
        {menuitems.map((value, index, list)=>{
          return <div key={index}><Link>{value}</Link></div>
        })}
      </div>
    }
  }


function MainPage() {
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

    <main>
      <Paper className={classes.mainHeader} style={{ backgroundImage: 'url(https://sun9-3.userapi.com/impg/ANuZRv58rfSk2BbpdBSSQZ7MGo884mv2YZH-xQ/vqluxg6P9Lc.jpg?size=1280x1024&quality=96&proxy=1&sign=363c234377e3479dadf2db1188b55924)'}}>
        <Container fixed>
          <div className={classes.overlay}/>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainHeaderConent}> 
                <Typography variant="h2" color="inherit" gutterBottom className={classes.text_header}>
                  Welcome to the club, buddy!
                </Typography>
                <Typography variant="h5" color="inherit" paragraph className={classes.text_header}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Button variant="contained" color="secondary">
                  Flex
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.main_content}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Я черешня, ребята</Typography>
          <Typography variant="h5" align="center" color="textSecondary" gutterBottom paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        </Container>
      </div>
      <Container className={classes.main_grid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card)=>( 
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
               <img src={'https://pbs.twimg.com/media/EJgQOfiWwAA3O_h.jpg'} alt='meme'  className={classes.CardMedia} />
                <CardContent className={classes.CardContent}>
                  <Typography variant="h5" gutterBottom>Sample text</Typography>
                  <Typography >Sample text Sample text Sample text</Typography>
                </CardContent> 
                <CardActions>
                  <Button size="small" color="primary">Поймать аптечку</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>

    <footer className={classes.footer}>
     <Typography variant="subtitle1" align="center">(c)2020</Typography>
    </footer>
    </>
)   
};

export default MainPage;
