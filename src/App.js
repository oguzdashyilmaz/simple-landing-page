import './App.css';
import Text from './components/Text';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <div className="row flex-row">
        <Image />
        <Text />
      </div>
      <div className="row flex-row">
        <Text />
        <Image />
      </div>
      <div className="row flex-row">
        <Image />
        <Text />
      </div>
      <div className="row flex-row">
        <Text />
        <Image />
      </div>
      <div className="row flex-row">
        <Image />
        <Text />
      </div>
    </div>
  );
}

export default App;