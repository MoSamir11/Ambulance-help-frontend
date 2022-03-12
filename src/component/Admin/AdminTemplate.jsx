import { Card,CardContent,Container,Grid,makeStyles } from "@material-ui/core";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import { Slide } from 'react-slideshow-image';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {AdminSignup} from './AdminSignup';
import { AdminLogin } from "./AdminLogin";
export const AdminTemplate = () =>{
    const useStyles = makeStyles((theme) => ({
        container: {
            padding: 40,
            [theme.breakpoints.down("sm")]:{
                padding: 7
            }
        },
        card:{
            backgroundColor:'#089bab',
            borderRadius:'20px',
            [theme.breakpoints.down("sm")]:{
                width:'100% '
            }
        },
        content:{
            padding:'15% 0 0 2%',
            textAlign:'center'
        },
        img:{
            width:'30vw',
            height:'70vh',
            // borderRadius:'20px',
            borderRadius:'20px',
            [theme.breakpoints.down("sm")]:{
                width:'60vw',
                height:'30vh',
            }
        },
        form: {
            padding: theme.spacing(2)
        },
        item: {
            marginBottom: theme.spacing(2)
        },
        container1:{
            padding:'10% 3% 5% 10% ',
            [theme.breakpoints.down("sm")]:{
                padding:'0 3% 3% 5% ',
            }
        },
        card1:{
            borderRadius:'20px',
        },
        form_control :{
            height: '2.5rem',
            width:'100%',
            lineHeight: '45px',
            background: 'transparent',
            border: '1px solid #d7dbda',
            fontSize: '14px',
            color: '#a09e9e',
            borderRadius: '10px',
        },
        label:{
            color: '#3f414d',
            fontWeight:'normal',
            padding:'3%'
        },
        division:{
            paddingTop: theme.spacing(3),
        },
        button:{
            display:'block',
            width:'100%',
            height:'2rem',
            backgroundColor:'#089bab',
            border:'none',
            borderRadius:'10px',
            color:'#ffffff',
            fontSize:'1rem'
        }
      }));
      const classes = useStyles();
      const items= [
          {id: 1, src: 'https://webartinfo.com/themeforest/medicil/img/banner.png'},
          {id: 2, src: 'https://medservice.vercel.app/images/image-03.png'},
          {id: 3, src: 'https://avstechnolabs.com/Themeforest/Medicapps/assets/images/hero/slider-2.png'},
        ]
        const [otp,setOtp] = useState(false)
        const [text,setText] = useState("Submit")
        function otpVerification()
        {
            setOtp(true);
            setText("Validate OTP")
        }
    return(
        <>
        <Container className={classes.container}>
            <Card className={classes.card}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6} xs={12}>
                        <CardContent className={classes.content}>  
                            <Carousel>
                                {items.map(item=><img src={item.src} className={classes.img} alt="" />)}
                            </Carousel>
                        </CardContent>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Router>
                            <Switch>
                                <Route exact path="/admin-signup" component={AdminSignup} />
                                <Route exact path="/admin-login" component={AdminLogin} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Card>
        </Container>
        </>
    )
}