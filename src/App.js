import Paragraph from './components/Paragraph/Paragraph.js';
import Image from './components/Image/Image.js';
import koalaImage from './assets/koala.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Paragraph size="14px" color="purple">This is sample paragraph</Paragraph>
      
      <Paragraph size=".5rem" color="red">This is small paragraph</Paragraph>


      <Image url={koalaImage} width="150px" height="100px"/>
    </div>
  );
}

export default App;
