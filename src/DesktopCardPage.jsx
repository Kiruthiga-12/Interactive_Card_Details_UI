import { Box } from "@mui/material";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";

const DesktopCardPage = ()=>{
    return (<>
    <Box sx={{width:'80%',margin:'4vw auto',display:"flex",position:"relative"}}>
        <Box  sx={{flex:3}}>
        <LeftSide/>
        </Box>
        <Box  sx={{flex:9,backgroundColor:"hsl(0, 100%, 100%)"}}>
        <RightSide/>
        </Box>
    </Box>
    
    </>)
}

export default DesktopCardPage;