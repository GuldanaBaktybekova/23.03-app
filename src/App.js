import Paragraph from './components/Paragraph/Paragraph.js';
import Image from './components/Image/Image.js';
import koalaImage from './assets/koala.jpg';

import Alert from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      
      <Alert success>This is a sample alert</Alert>
      <Alert danger>This is a sample alert</Alert>

      <Paragraph size="14px" color="purple">This is sample paragraph</Paragraph>
      
      <Paragraph size=".5rem" color="red">This is small paragraph</Paragraph>


      <Image url={koalaImage} width="150px" height="100px"/>
    </div>
  );
}

export default App;
