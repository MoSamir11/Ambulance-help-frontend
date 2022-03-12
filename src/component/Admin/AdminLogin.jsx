import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export const AdminLogin = () =>{
    const useStyles = makeStyles((theme) => ({
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
        container1:{
            padding:'15% 15% 5% 15% ',
            [theme.breakpoints.down("sm")]:{
                padding:'0 3% 3% 5% ',
            }
        },
        card1:{
            borderRadius:'20px',
        },
        form_control :{
            height: '2.5rem',
            width:'95%',
            lineHeight: '45px',
            background: 'transparent',
            border: '1px solid #d7dbda',
            fontSize: '17px',
            color: '#a09e9e',
            borderRadius: '10px',
            paddingLeft:'20px'
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
    return(
        <>
            <Container className={classes.container1}>
                <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                                <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign In</p>                                
                                    <label htmlFor="name" className={classes.label}>Email</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                <div className={classes.division}>
                                    <label htmlFor="name" className={classes.label}>Password</label>
                                    <input type="text" name="name" className={classes.form_control} />
                                </div>
                                <div className={classes.division}>
                                    <button className={classes.button}>Sign Up</button>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <p>Don't have an account ? <Link exact to="/admin-signup"><span style={{color:'#089bab'}}>Sign Up</span></Link></p>
                                </div>
                            </CardContent>
                </Card>
            </Container>
        </>
    )
}