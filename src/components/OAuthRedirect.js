import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useUserStore } from '../stores';
import axiosConfig from '../utils/api/axiosConfig';
import { useNavigate } from 'react-router';
import { setCookie } from '../utils/auth/cookies';

const OauthRedirect = () => {
    const location = useLocation();
    let authCode = location.search.slice(6);
    let url = "";
    const {setUser} = useUserStore();
    const navigate = useNavigate();

    // if (location.pathname === "/oauth/naver/callback") {
    //     url = `/oauth/naver/callback?code=${authCode}`;
    //     console.log('1', url);
    // }

    const authLogin = async () => {
        axiosConfig.post("/oauth/naver/callback", {
          code: authCode,
          state: "test",
        })
            .then((res) => {
              const data = res.data;
                console.log(data); 
                // setUser({
                //   userId: data.memberId,
                //   name: data.name,
                //   email: data.email,
                // })
                // setCookie("token", data.token, 1);
                // navigate("/main");
            })
            .catch((error) => {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            });
    };

    useEffect(() => {
      console.log("authcode: ", authCode);
        if (authCode !== "") {
            authLogin();
        }
    }, []);
};

export default OauthRedirect;