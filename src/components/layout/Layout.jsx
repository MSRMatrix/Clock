import Frame from "../frame/Frame";
import Screen from "../screen/Screen";
import Zone from "../zone/Zone";

const Layout = () => {
  return (
    <div className="layout">
      <Frame>
        <div className="clock-layout">
          <Screen />

          <Zone />
        </div>
      </Frame>
    </div>
  );
};

export default Layout;
