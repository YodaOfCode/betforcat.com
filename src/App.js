import React, {useEffect, useState} from "react";
import './App.css';
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import logo from './images/logo.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts'

function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h4' align='center'>Зарабатывай на ставках вместе со мной!</Typography>
                <img className={classes.image} src={logo} alt="memories" height='100' width='100'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify-content='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
