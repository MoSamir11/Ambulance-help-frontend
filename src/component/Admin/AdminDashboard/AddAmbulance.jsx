import { Card,CardContent,Box,Typography,TextField,Button,Container,Grid,makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Styles.styles.js';
const style = makeStyles((theme) => ({
    container1: {
      width:'60%',
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },
    },
    division:{
        paddingTop: theme.spacing(2)
    }
}))
export const AddAmbulance = () =>{
      const [ambulance,setAmbulance] = useState([]);
      const classes = styles();
      const myClass = style();
      const {container1,card1,form_control,label,division1,button,box} = classes;
      useEffect(()=>{
        axios.get('http://localhost:5000/all-hospital')
      .then((res)=>{
          setAmbulance(res.data.data)
      })
      },[])
    const [inputField,setInputField] = useState({
        hospitalName:'',
        driverName:'',
        contact:'',
        ambulanceNumber:''
    })
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setInputField((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }
    console.log("40-->",ambulance)
    console.log("41-->",inputField)
    const submit = () =>{
        if(inputField.name==''|| inputField.email==''|| inputField.phone==''|| inputField.otp=='')
        {
            alert("All the fields need to be filled")
            return;
        }
        const userData={
            hospitalName:inputField.hospitalName,
            driverName:inputField.driverName,
            ambulanceNumber:inputField.ambulanceNumber,
            driverContact:inputField.contact    
          }
          console.log("57-->",userData);
        axios.post('http://localhost:5000/add-ambulance',userData)
        .then((res)=>{
            if(res.data.isSuccess){
                console.log("57-->",res.data)
                alert(res.data.message)
            }else{
                  alert(res.data.message)
            }
        })
    }
    return(
        <>
        <Container className={myClass.container1}>
            <Card className={classes.card1}>
                <CardContent className={classes.content1}>
                    <p style={{color:'#3f414d',fontSize:'3rem'}}>Sign Up</p>   
                                                
                    <label htmlFor="name" className={classes.label}>Hospital Name</label>
                    <select type="text" name="hospitalName" className={classes.form_control} placeholder="Enter hospital name" 
                        onChange={inputHandler} value={inputField.hospitalName}>
                            <option selected disabled>Select your hospital</option>
                            {
                                ambulance.map((e,index)=>{
                                    return(
                                        <option key={index}>{e.hospitalName}</option>
                                    )
                                 })
                             }
                        </select>
                            <div className={classes.division1}>
                                <label htmlFor="drivername" className={classes.label}>Driver Name</label>
                                <input type="text" name="driverName" className={classes.form_control} onChange={inputHandler} value={inputField.driverName}/>
                            </div>
                       
                            <div className={classes.division1}>
                                <label htmlFor="contact" className={classes.label}>Driver Contact</label>
                                <input type="number" name="contact" className={classes.form_control} onChange={inputHandler} value={inputField.contact}/>
                            </div>
                       
                            <div className={classes.division1}>
                                <label htmlFor="ambulanceNumber" className={classes.label}>Ambulance Number</label>
                                <input type="text" name="ambulanceNumber" className={classes.form_control} onChange={inputHandler} value={inputField.ambulanceNumber}/>
                            </div>
                        
                           
                    <div className={classes.division1}>
                        <button className={classes.button} onClick={submit}>Add</button>
                    </div>
                    
                </CardContent>
            </Card>
        </Container>
        </>
    )
}