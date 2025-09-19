import { useEffect } from "react";
import DesktopCardPage from "./DesktopCardPage";
import './App.css';
import ReducerComp from './State_Components/ReducerComp';
import { useMediaQuery } from "@mui/material";
import MobileCardPage from "./MobileCardpage";
function App() {

  useEffect(()=>{
document.title = 'Interactive Card Details'
  },[])

  const isBig = useMediaQuery('(min-width:900px)');
  return (
<ReducerComp>
   {isBig ? <DesktopCardPage/>: <MobileCardPage/>}
 </ReducerComp>
  )
}

export default App;
