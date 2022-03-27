import React from "react";
import styled from "styled-components";
// import food from '../hardData/food.png'

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    // width: 100%;
    // height: 65em;
    // background-size: cover;
    background-position: fixed;
    overflow: auto;
    justify-content: center;
    // background-color: white;
    // background-repeat: repeat-y;
    // background-size: 100vw;
    // background-size: cover;
    @media(max-width:1900px){ 
        height: 70em;
        // background-position: center;
        // background-position-y: 0;
        // background-attachment: fixed;
   }
    @media(max-width:1300px){ 
        height:  70em;
        // background-position: center;
        // background-position-y: 0;
        // background-attachment: fixed;
   }
   &::-webkit-scrollbar {
    height: inherit;
    width: 7px;
    border-radius: 6px;
  }
`
export const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    // flex-direction: row;
    width: 80%;
    max-width: 1200px;
    min-width: 500px;
    height: 800px;
    //background: red;
    align-items: center;
    // justify-content: center;
`

export const MainDiv = styled.div`
    display: flex;
    flex: 7;
    max-width: 900px;
    min-width: 312.5px;
    //height: 100px;
    //background: yellow;
    align-items: center;
    // justify-content: center;
    margin-top: 170px;
`

export const RightDiv = styled.div`
    flex: 3;
    //display: flex;
    //background-color: red;
    max-width: 500px;
    min-width: 187.5px;
`