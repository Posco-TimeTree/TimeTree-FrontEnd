export function setCookie(name, value, day) {
  var date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = name + '=' + JSON.stringify(value) + ';expires=' + date.toUTCString() + ';path=/';
}


// export function getCookie(name) {
//   var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//   let parseValue = JSON.parse(value[2]);
//   // return value? value[2] : null;
//   return parseValue;
// }
export function getCookie(name) {
  const cookieValue = document.cookie;
  if (cookieValue) {
    const cookie = cookieValue.split('; ')
      .find((row) => row.startsWith(name + '='));
    if (cookie) {
      const cookieData = cookie.split('=')[1];
      // 쿠키 값이 존재하는 경우, 객체로 다시 파싱합니다.
      return JSON.parse(cookieData);
    }
  }
  // 쿠키를 찾지 못하거나 쿠키 값이 없는 경우 null을 반환합니다.
  return null;
}

export function deleteCookie(name) {
  var date = new Date();
  document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
}