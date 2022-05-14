import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="logo">CONGROO</h1>
      <ul className="login-menu">
        <li>
          <a href="#App">로그인</a>
        </li>
        <li>
          <a href="#App">회원가입</a>
        </li>
        <li>
          <a href="#App">고객센터</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
