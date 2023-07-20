import { useEffect } from 'react';
import { useLocation } from 'react-router';
import axiosConfig from '../utils/api/axiosConfig';

const OauthRedirect = () => {
    const location = useLocation();
    let authCode = location.search.slice(6);
    let url = "";

    console.log('2', authCode);
    if (location.pathname === "/oauth/naver/callback") {
        url = `/oauth/naver/callback?code=${authCode}`;
        console.log('1', url);
    }

    const authLogin = async () => {
        axiosConfig.get(url)
            .then((res) => {
                console.log(res.data); //jwt 토큰 
            })
            .catch((error) => {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            });
    };

    useEffect(() => {
        if (url !== "") {
            authLogin();
            console.log(url);
        }
    }, []);
};

export default OauthRedirect;