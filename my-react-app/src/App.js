
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel'
import { FormControlLabel, MenuItem, Select,Button,Radio,RadioGroup,Checkbox,Container, FormControl,Card,CardContent } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import React from 'react';
import Cards from './card'


function App() {

  const arr = ['abhilash','darshan']


  const [name,setName] = useState('')
  const handleinputs = (event) =>{
    const val = event.target.value;
    setName(val)
    if(arr.includes(val)){
      return alert('already exists');
    }
   
    

   }
  
  return (

    <Container>
      <Typography 
      varient='h1'
      component='h2'
      color='grey' noWrap>
        Material U-i
      </Typography>
      <form noValidate autoComplete='off'>
        <br></br>
       <TextField value = {name} label='textbox' varient='outlined' onChange={handleinputs 
        } />
       <br></br>
       <br></br>
       <TextField varient='outlined' label='select'/>
       <br></br>
       <br></br>
       <InputLabel></InputLabel>
       <Select label="age" style={{width:'300px',color:'pink'}}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
       </Select>
       <br></br>
       <br></br>
       <RadioGroup row>
        <FormControlLabel  control = {<Radio/> }label='hi'/>
        <FormControlLabel value="ae"  control = {<Radio/>} label='hello'/>
        <FormControlLabel value="aep" control = {<Radio/>} label='morning'/>  
       </RadioGroup>
      <br></br>
      <div>
          <Checkbox   />
          <Checkbox  />
          <Checkbox   />
          <Checkbox  defaultChecked />
          <Checkbox  defaultChecked />
      
      </div>
      <br></br>
      <TextField varient='outlined' label='description' multiline
        rows={4}  style={{ width: '400px' }}/>

      <br></br>
      <br></br>

      <Button type="submit" variant='contained'  color="secondary"
      startIcon={<KeyboardDoubleArrowRightIcon/>} onClick={() => {alert('clicked')} }>Submit</Button>

      <IconButton aria-label="delete"><DeleteIcon /></IconButton>


       <DownloadIcon color='secondary' fontSize='large'/>

       
      <Card /> 

      </form>
      <div >
          <Cards/>
      </div>
      
    </Container>
  
  
  )
}

export default App;
