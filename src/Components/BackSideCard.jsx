import {Box,Typography} from '@mui/material';

const BackSideCard = ()=>{
    return(<>
       <Box sx={{position:"relative",height:'12.5vw',width:"24vw",zIndex:"1",left:"12vw",top:"6.2vw",color:"hsl(0, 100%, 100%)",padding:"0.2vw",
         }} >
                <img src ='/Images/bg-card-back.png' style={{width:'100%',height:"100%",backgroundPosition:"center"}} alt='no backend card '/>
                <Typography variant='body1' sx={{position:"absolute",left:"19.2vw" ,top:"5.5vw",fontFamily: "Space Grotesk",
      fontOpticalSizing: 'auto',
      fontWeight: '500',fontSize:"1vw",letterSpacing:"3px",
      fontStyle: 'normal'}}>000</Typography>
       </Box>
    </>)
}

export default BackSideCard;