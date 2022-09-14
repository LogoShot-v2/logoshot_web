import * as React from "react";
import { COLORS, FONTS } from "../constant";
import { Background, CenterDiv, MainDiv, RightDiv} from "../constant/pages";
import FacebookLogin from 'react-facebook-login';


const Login = () =>{

    const responseFacebook = (response) => {
        console.log(response);
    }
    
    return (
      
      <Background>
        <CenterDiv>
        <FacebookLogin
            appId="468687045187327"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
        </CenterDiv>
      </Background>
        // 

      
    );
}

export default Login;