import "./Aside.css";

const dummyAsideImageURL = "https://dummyimage.com/90x160/000000/fff";

const Aside = () => {
  return (
    <aside className="main-aside">
      <ul className="aside-ad-list">
        {Array.from(new Array(6)).map((_, index) => (
          <li key={index}>
            <a href="#App">
              <img src={dummyAsideImageURL} alt="aside dummy" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
