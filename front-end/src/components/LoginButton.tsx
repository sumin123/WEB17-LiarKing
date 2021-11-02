import '../styles/LoginButton.css';

const loginModal = () => {
  const hiddenModal = document.querySelector('.main-login-modal-hidden');
  if (hiddenModal !== null) hiddenModal.className = 'main-login-modal';
};

const LoginButton = () => {
  return (
    <>
      <button className="main-common-button main-login-button" onClick={loginModal}>
        {'로그인 하고 플레이!'}
      </button>
      <form className="main-login-modal-hidden" action="/users/id-check" method="GET">
        <div className="main-login-header">Account Login</div>
        <input className="main-login-id-password" type="text" name="id" placeholder="아이디를 입력하세요."></input>
        <input className="main-login-id-password" type="password" name="password" placeholder="비밀번호를 입력하세요."></input>
        <input className="main-login-submit" type="submit" value="Let's start lying...!"></input>
      </form>
    </>
  );
};

export default LoginButton;
