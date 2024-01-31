import propTypes from 'prop-types'
import {Card,CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Box,Grid,Button,Paper} from '@mui/material';
import CardActions from '@mui/material/CardActions';
// import HandleLearn from './dialog'
import {useState} from 'react'
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';

const Cards = () => {
    const arrCard = [{name:'tony',age:'43'},
    {name:'sam',age:'63'},
    {name:'vinston',age:'13'}]
     const [open,setOpen] = useState(false)

    // const handleClose = () => {
    //   setOpen(false);
    // };

    const handleOpen = () =>{
     setOpen(true)
    }
const dilagPrint = () =>{
  return(
    <>
      <Dialog
          open={open}
          // onClose={handleClose}
  
        >
          <DialogTitle >
            {}
          </DialogTitle>
          <DialogContent>
            <DialogContentText >
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
         
             
          </DialogActions>
        </Dialog>
        </>
  )
}
  

    return(
        
        <Grid container spacing={3} >
        {arrCard.map((result) => (
          <Grid item xs={3} >
            <Card sx={{maxWidth:300}}>
    
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="Primary" gutterBottom>
              name:{result.name}
              <br></br>
              Age:{result.age}
            </Typography>
            <Typography variant="h5">
              Hi everyone 
            </Typography>
            <CardActions>
              <Button size='small' onClick={handleOpen}>Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      {dilagPrint()}
<dilagPrint></dilagPrint>
          </Grid>

))}
        </Grid>
       
      
        
        
      
    )  
}     

export default Cards  