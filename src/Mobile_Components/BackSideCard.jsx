import {Box,Typography} from '@mui/material';

const BackSideCard = ()=>{
    return(<>
       <Box sx={{position:"relative",height:'19vw',width:"35vw",zIndex:"1",left:"24vw",top:"-10vw",color:"hsl(0, 100%, 100%)",padding:"0.2vw",
         }} >
                <img src ='/Images/bg-card-back.png' style={{width:'100%',height:"100%",backgroundPosition:"center"}} alt='no backend card '/>
                <Typography variant='h6' sx={{position:"absolute",left:"27vw" ,top:"8vw",fontFamily: "Space Grotesk",
      fontOpticalSizing: 'auto',
      fontWeight: '500',fontSize:"2vw",letterSpacing:"1px",
      fontStyle: 'normal'}}>000</Typography>
       </Box>
    </>)
}

export default BackSideCard;