import './App.css';
import Text from './components/Text';
import Image from './components/Image';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Slogan from './components/Slogan';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="row flex-row align-center ">
          <Image />
          <Text />
        </div>
        <div className="row flex-row align-center">
          <Text />
          <Image />
        </div>
        <div className="row flex-row align-center">
          <Image />
          <Text />
        </div>
        <div className="row flex-row align-center">
          <Text />
          <Image />
        </div>
        <div className="row flex-row align-center">
          <Image />
          <Text />
        </div>
      </div>
      <Slogan/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;