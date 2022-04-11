import * as React from "react";
import { useState, useEffect } from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import {Chip, requirePropFactory, Stack, Button} from '@mui/material';
import { GET_IMAGE3 } from "../api/api";
import { typography } from "@mui/system";
import "../constant/other.css";

const labels = ['Circles', 'Animals', 'Plants', 'Others']
const InspiringSearch = () =>{
    const [labelChosen, setLabelChosen] = useState(0);
    const [imageList, setImageList] = useState([]);
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    const clickChip = async (index) =>{
        if(index !== labelChosen){
            setImageList([]);
            setLabelChosen(index);
            setStart(false);
            console.log('click chip', labelChosen);
            console.log('hi');
            // const fetchData = async () => {
            //     try{
            //         console.log('click chip', labelChosen);
            //         var images = await GET_IMAGE3(labelChosen);
            //         setImageList(images);
            //     }catch(e){
            //         console.log(e);
            //     }
            // }
            // fetchData();
        }
    }

    useEffect(()=>{
        const fetchData = async () => {
            try{
                console.log('click chip', labelChosen);
                var images = await GET_IMAGE3(labelChosen);
                setImageList(images);
            }catch(e){
                console.log(e);
            }
        }
        fetchData();

    },[labelChosen])

    useEffect(()=>{
        if(start && imageList !== []){
            const interval = setInterval(()=>{
                setCount((count)=> (count+1) % imageList.length);
                console.log(count);
                console.log(imageList.length);
                // console.log(newCount);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [imageList, start])

    

    const onStartOrStop = ()=>{
        if(!start){
            setCount(0);
        }
        setStart(!start);
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
                            variant={labelChosen === index? "": "outlined"}
                            onClick={()=>clickChip(index)}
                        />
                    )
                }
            </Stack>
            {
                imageList.length !== 0 ?
                <img src={ imageList[count]} style={{...FONTS.img, marginTop: '140px'}}/>
                :
                <img 
                    src={require("../assets/loading.png")} 
                    style={{...FONTS.loading, marginTop: '140px'}}
                    className="loading"
                />

            }
            <Button 
                variant='contained' 
                style={{marginTop: '140px'}}
                onClick={()=> onStartOrStop()}
            >{start? 'STOP': 'START'}</Button>
        </CenterDiv>
      </Background>      
    );
}

export default InspiringSearch;