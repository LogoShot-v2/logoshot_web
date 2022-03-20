import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";


const InspiringSearch = () =>{
    return (
      <Background>
        <CenterDiv>
            <p style={{color: COLORS.secondary, ...FONTS.largeTitle }}>InspiringSearch</p>
        </CenterDiv>
      </Background>      
    );
}

export default InspiringSearch;