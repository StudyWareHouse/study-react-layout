import "./Aside.css";
import { createDummyImage } from "../utils";

const dummyAsideImageURL = createDummyImage({
  width: 90,
  height: 160,
});

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
