import VideoComponent from "../bts/btvd";
import Funfaa from "../homes/header";

const App = () => {
  return (
    <div  style={{ marginBottom: '20px' }}>
      <div className="funfaa-container" style={{ marginBottom: '20px' }}>
        <Funfaa />
      </div>

      <div >
        <VideoComponent  />
      </div>
    </div>
  );
};

export default App;
