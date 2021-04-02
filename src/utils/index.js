import Cookies from 'js-cookie';

export function saveUserCookie(state) {
  // console.log('Form submitted: ', state.firstName, state.lastName, state.idNumber, state.birthDate, state.email, state.gitUser);
  const allValues = Object.values(state).join('#');
  console.log(allValues);
  Cookies.set('USER_REGISTER', allValues, { path: '/' });
}

export function readUserCookie() {
  const userInfo = Cookies.get('USER_REGISTER') || undefined;
  const userArray = userInfo?.split('#');
  console.log('userArray', userArray);
  return userArray;
}
