import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useUserStore } from '../stores';
import axiosConfig from '../utils/api/axiosConfig';
import { useNavigate } from 'react-router';
import { setCookie } from '../utils/auth/cookies';
import { useParams } from 'react-router-dom';

const OauthRedirect = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const state = params.get("state");
    const [go, setGo] = useState(false);

    const {user, setUser} = useUserStore();
    const navigate = useNavigate();

    const authLogin = async () => {
        axiosConfig.post("/oauth/naver/callback", {
          code: code,
          state: state,
        })
            .then((res) => {
              const data = res.data;
                console.log(data.memberId, data.name, data.email); 
                setUser({
                  id: data.memberId,
                  name: data.name,
                  email: data.email,
                  token: data.token,
                })
                // setCookie("userStore", user, 1);
                setGo(true);
            })
            .catch((error) => {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            });
         
    };

    useEffect(() => {
      console.log(code, state);
      if (code !== undefined && state!== undefined ) {
            authLogin();
      }
    }, []);
    useEffect(() => {
      console.log(user);
      if (go) {
        setCookie("userStore", user, 1);
        navigate("/main");
      }
    }, [go]);
};

export default OauthRedirect;