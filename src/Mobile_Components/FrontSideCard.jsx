import { Box ,Typography} from "@mui/material";
import context from '../State_Components/context';
import { useContext } from "react";
const FrontSideCard = ()=>{
  const content = useContext(context);

    return(<>
   <Box sx={{position:"relative",height:'19vw',width:"35vw",zIndex:"3",left:"10vw",top:"25vw",color:"hsl(0, 100%, 100%)",padding:"0.2vw",
     }} >
            <img src ='/Images/bg-card-front.png' style={{width:'100%',height:"100%",backgroundPosition:"center"}} alt='no frontend card '/>
            <img src ='/Images/card-logo.svg' style={{position:"absolute",left:"2vw",top:"1.8vw",width:'18%',height:"18%",backgroundPosition:"center"}} alt='no card logo'/>
            <Typography variant='body1' sx={{position:"absolute",left:"2vw" , top:"6.8vw",fontFamily: "Space Grotesk",
  fontOpticalSizing: 'auto',
  fontWeight: '500',fontSize:"1.9vw",letterSpacing:"1px",
  fontStyle: 'normal'}}>{content.details.number}</Typography>
  <Box sx={{width:"80%",display:"flex",alignItems:"center",position:"absolute",left:"2vw" , top:"15vw"}}>
    <Typography sx={{fontFamily: "Space Grotesk",flex:6,
  fontOpticalSizing: 'auto',fontSize:"1.6vw",letterSpacing:"1px",
  fontWeight: '500',textTransform:"uppercase",
  fontStyle: 'normal'}}>{content.details.name}</Typography>
    <Typography sx={{fontFamily: "Space Grotesk",flex:3,
  fontOpticalSizing: 'auto',
  fontWeight: '500',fontSize:"1.6vw",letterSpacing:"1px",
  fontStyle: 'normal'}}>{content.details.month} / {content.details.year}</Typography>
  </Box>
   </Box>
    </>)
}

export default FrontSideCard;