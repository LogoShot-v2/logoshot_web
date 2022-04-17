import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import {uploading2} from '../constant/images';
import {Chip, requirePropFactory, Stack, Button} from '@mui/material';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Searching } from "../api/api";


const ImageSearch = () =>{

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState();

    const onImageChange = (e)=>{

      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }

    useEffect(()=>{
      if(!image)
        setPreview(null);
      else{
        const reader = new FileReader();
        reader.onloadend = () =>{
          setPreview(reader.result);
        };
        reader.readAsDataURL(image);
      }
    }, [image])

    const onClickUpload = async () =>{
      let startTime = new Date();
      
      let returns = await Searching(image, "", [true, true, true, true]);
      let endTime = new Date();
      console.log((endTime - startTime)/1000+" seconds");
      console.log(returns);
      navigate('/result', {state: returns.photos1});
    }
    return (
      
      <Background>
        <CenterDiv>
          <p style={{color: COLORS.black, ...FONTS.h1 }}>圖片搜尋</p>
          <p style={{color: COLORS.gray, ...FONTS.body2}}>點擊「Upload Image」按鈕可以用相機拍攝/從圖庫選擇含有商標的照片，並可對其做裁切、旋轉等編輯，完成後按下最下方的「送出」按鈕，等待一段時間後，即會回傳在臺灣商標資料庫中與該照片最相似的50張商標。</p>
          <p style={{color: COLORS.gray, ...FONTS.body2}}>Tips：照片品質會影響搜尋結果，可以盡量正面拍攝照片，並裁切掉與 Logo 無關的背景，讓 Logo 圖案佔滿整張照片，搜尋結果會更為精確！</p>     
          <label>
            <input style={{display:'none'}} type="file" multiple accept="image/*" onChange={(e)=>onImageChange(e)} />
            {
              preview?<img src={preview} width="100%" ></img>:<img src={uploading2}></img>
            }
          </label>
          <Button 
            variant="contained" 
            style={{marginTop: '140px'}}
            onClick={onClickUpload}>送出</Button>
        </CenterDiv>
      </Background>

      
    );
}

export default ImageSearch;