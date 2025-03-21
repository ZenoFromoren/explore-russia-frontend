import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { LoginUI } from '../ui/login/login';
import { useDispatch, useSelector } from '../../services/store';
import { loginUser, loginYandex } from '../../services/thunks/userThunks';
import { userSelectors } from '../../services/slices/userSlice';

export const Login: FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js";
    script.async = true;
  
    document.head.appendChild(script);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordShowed, setIsPasswordShowed] = useState<boolean>(false);

  const dispatch = useDispatch();

  const loginFormError = useSelector(userSelectors.selectLoginError);

  const showHidePassword = () => setIsPasswordShowed((prevState) => !prevState);

  const handleLoginYandex = () => dispatch(loginYandex());

  // window.YaAuthSuggest.init(
  //   {
  //     client_id: import.meta.env.VITE_YANDEX_CLIENT_ID,
  //     response_type: 'token',
  //     redirect_uri: import.meta.env.VITE_YANDEX_REDIRECT_URI
  //  },
  //   tokenPageOrigin,
  //   {
  //     view: "button",
  //     parentId: "buttonContainerId",
  //     buttonSize: 'm',
  //     buttonView: 'main',
  //     buttonTheme: 'light',
  //     buttonBorderRadius: "0",
  //     buttonIcon: 'ya',
  //   }
  // )
  // .then(({handler}) => handler())
  // .then(data => console.log('Сообщение с токеном', data))
  // .catch(error => console.log('Обработка ошибки', error))


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <LoginUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isPasswordShowed={isPasswordShowed}
      showHidePassword={showHidePassword}
      loginFormError={loginFormError}
      handleLoginYandex={handleLoginYandex}
      handleSubmit={handleSubmit}
    />
  );
};
