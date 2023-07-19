const google_params = {
  client_id : process.env.REACT_APP_GOOGLE_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile', // 구글에서 제공해주는 사용자의 정보 범위
}
export const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${google_params.client_id}&response_type=${google_params.response_type}&redirect_uri=${google_params.redirect_uri}&scope=${google_params.scope}`;