import { Box } from "@mui/material";
import LeftSide from "./Mobile_Components/LeftSide";
import RightSide from "./Mobile_Components/RightSide";

const MobileCardPage = ()=>{
    return (<>
    <Box sx={{width:'80%',margin:'4vw auto',display:"flex",position:"relative",flexDirection:"column"}}>
        <Box  sx={{flex:3}}>
        <LeftSide/>
        </Box>
        <Box  sx={{flex:9,backgroundColor:"hsl(0, 100%, 100%)"}}>
        <RightSide/>
        </Box>
    </Box>
    
    </>)
}

export default MobileCardPage;