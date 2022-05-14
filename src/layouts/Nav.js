import "./Nav.css";

const Nav = () => {
  const mainNavigators = [
    { name: "지역" },
    { name: "쇼핑" },
    { name: "문화" },
    { name: "여행" },
    { name: "레저" },
    { name: "추천" },
    { name: "전체보기" },
  ];

  const subNavigators = [
    { name: "스페셜" },
    { name: "의류" },
    { name: "패션잡화" },
    { name: "스포츠/레저" },
    { name: "식품" },
    { name: "뷰티" },
    { name: "생활/주방" },
    { name: "홈/데코/취미" },
    { name: "디지털/가전" },
    { name: "출산/유아동" },
  ];

  return (
    <>
      <nav className="main-navigation">
        <ul className="main-navigation-list">
          {mainNavigators.map((mainNavigator) => {
            return (
              <li className="main-navigation-list-item">
                {mainNavigator.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="sub-navigation">
        <ul className="sub-navigation-list">
          {subNavigators.map((subNavigator) => {
            return (
              <li className="sub-navigation-list-item">{subNavigator.name}</li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
