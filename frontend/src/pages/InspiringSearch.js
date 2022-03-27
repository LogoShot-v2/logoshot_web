import * as React from "react";
import { useState } from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import {Chip, requirePropFactory, Stack, Button} from '@mui/material';
import { GET_IMAGE3 } from "../api/api";
import { typography } from "@mui/system";

const labels = ['Circles', 'Animals', 'Plants', 'Others']
const InspiringSearch = () =>{
    const [lableChosen, setLableChosen] = useState('Circles');
    const [imageList, setImageList] = useState(null);

    

    const clickChip = async (index) =>{
        if(labels[index] !== lableChosen){
            setLableChosen(labels[index]);
            console.log('click chip');
            console.log('hi');
            try{
                var images = await GET_IMAGE3(index);
                setImageList(images);
                console.log('images', images);
            }catch(e){
                console.log(e);
            }
            
            
        }
    }

    
    return (
      <Background>
        <CenterDiv>
            <p style={{color: COLORS.black, ...FONTS.h1 }}>你適合哪個商標？</p>
            <p style={{color: COLORS.gray, ...FONTS.body2}}>我們使用生成對抗網路 (GAN) 自動生成了數以萬計的全新 Logo 圖案，並於此頁面中央隨機展示，供使用者作為靈感啟發。使用者可點擊下方 STOP / RESUME 按鈕切換觀看模式，以及點擊上方的標籤按鈕觀看特定的Logo類別。</p>
            <Stack direction="row" spacing={1}>
                {
                    labels.map((label, index)=>
                        <Chip 
                            label={label}
                            color="primary" 
                            variant={lableChosen === label? "": "outlined"}
                            onClick={()=>clickChip(index)}
                        />
                    )
                }
            </Stack>
            <img src={imageList? require(imageList[0]) : require("../assets/icon.png")} style={{...FONTS.img, marginTop: '140px'}}/>
            <Button variant="contained" style={{marginTop: '140px'}}>STOP</Button>
        </CenterDiv>
      </Background>      
    );
}

export default InspiringSearch;