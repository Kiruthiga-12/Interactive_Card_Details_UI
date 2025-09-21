import { Box, Button, TextField, Typography } from "@mui/material";
import {useState,useContext} from 'react';
import { Controller,useForm } from "react-hook-form";
import {DateField,LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import context from "../State_Components/context";

const RightSide=()=>{
   const[compl_status,setStatus] = useState(false);
   const content = useContext(context);
   const {control,handleSubmit,reset} = useForm({defaultValues:{name:"",number:"",month: null,year: null,cvc:""}});
   const onSubmit=()=>{
      setStatus(true);
      reset();
      content.setDetails({type:'ENTER_NAME',value:'Jane Appleseed'});
      content.setDetails({type:'ENTER_NUMBER',value:'0000 0000 0000 0000'});
      content.setDetails({type:'ENTER_MONTH',value:'00'});
      content.setDetails({type:'ENTER_YEAR',value:'00'});
   }
    return(<>
    <Box sx={{margin:'7vw auto',padding:'1vw',width:"70%"}}>
      {compl_status === false && <>
   <form onSubmit={handleSubmit(onSubmit)} >
     <label htmlFor="name" style={{fontSize:"1.5vw"}}>cardholder name</label>
     <Controller control={control} rules={{required:"CardHolder name is required", pattern: {
            value: /^[a-zA-Z]{3,}(?:\s+[a-zA-Z]+)*$/gi, 
            message: 'Please enter a valid cardholder name',
          },}} render={({field,fieldState})=>(  <TextField value={field.value} onChange={(e)=>{
            content.setDetails({type:'ENTER_NAME',value:e.target.value});
            field.onChange(e);
          }} variant='outlined'  placeholder='e.g.Jane Appleseed' autoComplete='off' id='name' size='small' type='text' fullWidth sx={{'& .MuiInputBase-root':{fontSize:"2.3vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'},'& .MuiInputBase-input':{'&:hover':{cursor:"pointer"}},'& .MuiOutlinedInput-root.Mui-focused': { '& fieldset':{border:"1px solid  hsl(278, 94%, 30%) "}},
  '& .MuiOutlinedInput-root:hover': { '& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}}
}} error={!!fieldState.error} helperText={fieldState.error?.message} FormHelperTextProps={{style:{fontSize:"0.6rem",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}}/>)} name="name"/>

     <label htmlFor="number" style={{fontSize:"1.5vw"}}>card number</label>
     <Controller control={control} rules={{required:"Card Number is required",pattern:{value:/[0-9]{4}\s[0-9]{4} [0-9]{4} [0-9]{4}/,message:"Wrong format ,numbers only"}}} 
     render={({field,fieldState})=>( <TextField value={field.value} onChange={(e)=>{
      content.setDetails({type:"ENTER_NUMBER",value:e.target.value});
      field.onChange(e)
     }} variant='outlined' placeholder="e.g. 1234 5678 9123 0000" autoComplete="off" id='number'
       size='small' type='text' fullWidth sx={{'& .MuiInputBase-root':{fontSize:"2.3vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'},'& .MuiInputBase-input':{'&:hover':{cursor:"pointer"}},'& .MuiOutlinedInput-root.Mui-focused': { '& fieldset':{border:"1px solid  hsl(278, 94%, 30%) "}},
  '& .MuiOutlinedInput-root:hover': { '& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}}
}} error={!!fieldState.error} helperText={fieldState.error?.message} FormHelperTextProps={{style:{fontSize:"0.6rem",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}}/>)} name='number'/>
    
     <label htmlFor='date' style={{fontSize:"1.5vw"}}>exp.  Date(MM/YY) &nbsp; &nbsp;&nbsp;CVC</label>
<Box sx={{display:"flex",alignItems:"center",marginTop:"0.5vw"}}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller control={control}   rules={{required:"Can't be blank"}} name='month' render={({field,fieldState})=>(  
       <DateField format='MM' views={['month']} {...field} onChange={(e)=>{
        content.setDetails({type:"ENTER_MONTH",value:(e?e?.get('month')+1 : '')});
        field.onChange(e);
       }}  error={!!fieldState.error} helperText={fieldState.error?.message} FormHelperTextProps={{style:{fontSize:"0.6rem",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}}
        sx={{width:"12vw", '& .MuiPickersInputBase-sectionContent':{fontSize:"2.3vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'},'& .MuiPickersInputBase-root.Mui-focused:not(.Mui-error)':{'& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}},'& .MuiPickersInputBase-root:hover':{'& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}},'& .MuiPickersSectionList-root':{padding:"5px 0px",'&:hover':{cursor:"pointer"}}}}/>)}/>
   <Controller control={control}   rules={{required:"Can't be blank"}} name='year' render={({field,fieldState})=>(  
       <DateField format='YY'  views={['year']} {...field} onChange={(e)=>{
        content.setDetails({type:"ENTER_YEAR",value:(e?e?.get('year') : '')});
        field.onChange(e);
       }}  error={!!fieldState.error} helperText={fieldState.error?.message} FormHelperTextProps={{style:{fontSize:"0.6rem",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}}
        sx={{marginLeft:"1vw",width:"12vw", '& .MuiPickersInputBase-sectionContent':{fontSize:"2.3vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'},'& .MuiPickersInputBase-root.Mui-focused:not(.Mui-error)':{'& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}},'& .MuiPickersInputBase-root:hover':{'& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}},'& .MuiPickersSectionList-root':{padding:"5px 0px",'&:hover':{cursor:"pointer"}}}}/>)}/>
</LocalizationProvider>
<Controller name='cvc' control={control} rules={{required:"Can't be blank",pattern:{value:/^[0-9]{3}$/,message:'Enter valid cvc'}}}
render={({field,fieldState})=>(<TextField type='text'{...field} size='small' placeholder="e.g.123" sx={{marginLeft:"1vw",'& .MuiInputBase-root':{fontSize:"2.3vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'},'& .MuiInputBase-input':{'&:hover':{cursor:"pointer"}},'& .MuiOutlinedInput-root.Mui-focused': { '& fieldset':{border:"1px solid  hsl(278, 94%, 30%) "}},
  '& .MuiOutlinedInput-root:hover': { '& fieldset':{border:"1px solid hsl(278, 94%, 30%)"}}
}} error={!!fieldState.error} helperText={fieldState.error?.message} FormHelperTextProps={{style:{fontSize:"0.6rem",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}}/>)} />
</Box>

     <Button type='submit' disableRipple fullWidth sx={{textTransform:"none",color:"hsl(0, 100%, 100%)",backgroundColor:"hsl(278, 68%, 11%)",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal',marginTop:"12px",fontSize:"2.3vw"}}>Confirm</Button>
  </form>
     </> }
     {compl_status === true && <>
     <Box sx={{textAlign:"center",padding:"2vw"}}>
      <img src="Images/icon-complete.svg" alt='no complete' style={{width:"22%",height:"22%"}}/>
      <Typography sx={{fontSize:"2.8vw",fontFamily: "Space Grotesk",fontWeight:"normal",letterSpacing:"2px",
  fontStyle: 'normal',marginTop:"1.5vw"}}>THANK YOU!</Typography>
      <Typography sx={{color:"hsl(212, 12%, 71%)",fontSize:"2.3vw",marginTop:"0.4vw",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal'}}>We've added your card details</Typography>
           <Button type='submit' disableRipple fullWidth sx={{marginTop:"3vw",textTransform:"none",color:"hsl(0, 100%, 100%)",backgroundColor:"hsl(278, 68%, 11%)",fontFamily: "Space Grotesk",fontWeight:"normal",
  fontStyle: 'normal',fontSize:"2.3vw"}}>Continue</Button>
     </Box> 
     </>}
     </Box>
    </>)
}

export default RightSide;
