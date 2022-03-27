import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Logo({result}) {
  return (
    <>
    <ListItem alignItems="flex-start">
        <ListItemAvatar style={{width: "40%"}}>
          {/* <Avatar alt="Remy Sharp" src='../assets/images/random1.jpg'/> */}
          <img src={result.uri} width="100%"></img>
        </ListItemAvatar>
        <ListItemText
          primary={result.trademark_name}
          secondary={
            <React.Fragment>
              <p>申請案號：{result.caseno}</p>
              <p>商標名稱：{result.trademark_name}</p>
              <p>圖樣中文：{result.chinese}</p>
              <p>圖樣英文：{result.english}</p>
              <p>圖樣日文：{result.japanese}</p>
              <p>權利期間：{result.sdate}至{result.edate}</p>
              <p>代理人-中文名字：{result.bchinese}</p>
              <p>商標權人-中文名字：{result.achinese}</p>
              <p>商標權人-英文名字：{result.aenglish}</p>
              <p>商標權人-地址：{result.address}</p>
            </React.Fragment>
          }
        />
        {/* <img src={result.uri}></img>
        <p>{result.caseno}</p>
        <p>{result.caseno}</p>
        <p>{result.trademark_name}</p>
        <p>{result.chinese}</p>
        <p>{result.english}</p>
        <p>{result.japanese}</p>
        <p>{result.sdate}</p>
        <p>{result.edate}</p>
        <p>{result.bchinese}</p>
        <p>{result.achinese}</p>
        <p>{result.aenglish}</p>
        <p>{result.address}</p> */}
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  );
}
