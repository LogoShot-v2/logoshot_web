import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";


const TextSearch = () =>{
    return (
      
      <Background>
        <CenterDiv>
          <p style={{color: COLORS.secondary, ...FONTS.largeTitle }}>Text search</p>
        </CenterDiv>
      </Background>
        // 

      
    );
}

export default TextSearch;