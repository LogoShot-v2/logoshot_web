import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import SearchBar from "../components/SearchBar";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Stack, Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

const labels = ["商標名/商標上文字", "人名/公司名/地址...", "商品描述", "其他"]

const TextSearch = () =>{
  
    const navigate = useNavigate();
    const onClickUpload = (e) =>{
      navigate('/result');
    }

    return (
      
      <Background>
        <CenterDiv>
          <p style={{color: COLORS.black, ...FONTS.h1 }}>文字搜尋</p>
          <p style={{color: COLORS.gray, ...FONTS.body2}}>將與商標相關的文字輸入至下方文字框，完成後按下最下方的「送出」按鈕，等待一段時間後，即會回傳在臺灣商標資料庫中與該文字最相關的前50張商標。</p>
          <p style={{color: COLORS.gray, ...FONTS.body2}}>Tips：不同詞語可用空白隔開，並勾選該文字對應的欄位（預設為全選，包含商標名稱、圖樣文字、公司相關資訊等等）</p>          
          <FormGroup onSubmit={onClickUpload}>
            <SearchBar/> 
              <Stack direction="row" spacing={1}>
              {
                  labels.map((label)=>
                    <FormControlLabel control={<Checkbox />} label={label} />
                  )
              }
              </Stack>
          </FormGroup>
        </CenterDiv>
      </Background>
      
    );
}

export default TextSearch;