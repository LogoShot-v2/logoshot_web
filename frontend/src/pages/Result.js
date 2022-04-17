import * as React from "react";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
// import { results } from "../hardData/results";
import Logo from "../components/Logo";
import List from '@mui/material/List';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Result = () =>{

    const location = useLocation();
    const [results, setResults] = useState(null);

    useEffect(()=>{
      console.log(location.state);
      setResults(location.state);
    }, [])
    return (
        <Background>
          <CenterDiv>
            <List sx={{marginTop:'20px', width: '100%', bgcolor: 'background.paper' }}>
                {results? results.metadatas.map((logo, index)=><Logo result={logo[0]} photo = {results.base64Images[index][0]}/>): null}
            </List>
          </CenterDiv>
        </Background>
    )
}

export default Result;