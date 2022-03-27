import * as React from "react";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import { results } from "../hardData/results";
import Logo from "../components/Logo";
import List from '@mui/material/List';

const Result = () =>{
    return (
        <Background>
          <CenterDiv>
            <List sx={{marginTop:'20px', width: '100%', bgcolor: 'background.paper' }}>
                {results.map((logo)=><Logo result={logo}/>)}
            </List>
          </CenterDiv>
        </Background>
    )
}

export default Result;