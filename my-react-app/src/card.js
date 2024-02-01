import propTypes from 'prop-types'
import {Card,CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Box,Grid,Button,Paper} from '@mui/material';
import CardActions from '@mui/material/CardActions';
// import HandleLearn from './dialog'
import {useState} from 'react'
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';
import DialogComponent  from './dialog';

const Cards = () => {
    const arrCard = [{name:'tony',age:'43'},
    {name:'sam',age:'63'},
    {name:'vinston',age:'13'}]
     const [open,setOpen] = useState(false)

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () =>{
     setOpen(true)
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
    
        
          </Grid>

))}
<DialogComponent open={open} handleClose={handleClose} />

        </Grid>
       
      
        
        
      
    )  
}     

export default Cards  