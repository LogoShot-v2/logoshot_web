import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";


const ImageSearch = () =>{
    return (
      
      <Background>
        <CenterDiv>
          <p style={{color: COLORS.secondary, ...FONTS.largeTitle }}>ImageSearch</p>
        </CenterDiv>
      </Background>
        // 

      
    );
}

export default ImageSearch;