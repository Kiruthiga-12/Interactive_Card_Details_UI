import { Box } from "@mui/material";
import FrontSideCard from "./FrontSideCard";
import BackSideCard from "./BackSideCard";

const LeftSide=()=>{
    return(<>
    <Box sx={{width:"100%",height:"100%",backgroundImage:'url(/Images/bg-main-desktop.png)',position:"relative",left:"0vw",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
          <FrontSideCard/>
          <BackSideCard/>
    </Box>
    </>)
}

export default LeftSide;