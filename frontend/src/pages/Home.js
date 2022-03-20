import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";



const Home = () =>{
    return (
      
      <Background>
        <CenterDiv>
          {/* <p style={{color: COLORS.secondary, ...FONTS.largeTitle }}>LOGO SHOT</p> */}
          <p style = {{...FONTS.body2}}>{"LogoShot是台灣商標搜尋APP。使用者只要拿起手機拍攝身邊的商標，就可以找到該商標或其他類似商標的註冊資訊。我們同時也提供使用自然語言處理(NLP)技術優化的文字搜尋功能，並使用生成對抗網路(GAN)產生數以萬計的商標圖片，供使用者作為靈感的啟發。"}</p>
          <p style = {{...FONTS.body2}}></p>
          <p style = {{...FONTS.body2}}>{"指導教授: 台大資管系盧信銘老師"}</p>
          <p style = {{...FONTS.body2}}>{"APP開發: 林又昕、杜沛慈、莊莊、管晟宇、賴群龍"}</p>
          <p style = {{...FONTS.body2}}>{"圖片與文字搜尋: 李妍伶、高何銓、管晟宇、陳柏瑜、陳韋傑、石子仙"}</p>
          <p style = {{...FONTS.body2}}>{"商標生成: 黃佳文"}</p>
        </CenterDiv>
      </Background>
        // 

      
    );
}

export default Home;