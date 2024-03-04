import { useRef } from "react";
import CollisionDetection from "./components/CollisionDetection";
import CoolSpotlightHeading from "./components/CoolSpotlihtHeadin/CoolSpotlightHeading";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const width = windowSize.current[0] - 5;
  const height = windowSize.current[1] - 5;

  return (
    <div>
      <div>
        <CollisionDetection />
        <div
          style={{
            position: "absolute",
            width: width,
            height: height,
            top: 0,
            zIndex: -10,
            display:'flex',
            alignItems:"center",
            justifyContent:'center'
          }}
        >
          {/* <h1 style={{fontSize:100}}>DCP</h1> */}
          <CoolSpotlightHeading/>
        </div>
      </div>
    </div>
  );
}

export default App;
