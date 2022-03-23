import Paragraph from "./components/Paragraph/Paragraph.js";
import Image from "./components/Image/Image.js";
import koalaImage from "./assets/koala.jpg";

import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Alert primary> A simple primary alert—check it out!</Alert>
      <Alert seconda ry>
        {" "}
        A simple secondary alert—check it out!
      </Alert>
      <Alert success>A simple success alert—check it out!</Alert>
      <Alert danger>A simple danger alert—check it out!</Alert>
      <Alert warning>A simple warning alert—check it out!</Alert>
      <Alert info>A simple info alert—check it out!</Alert>
      <Alert light>A simple light alert—check it out!</Alert>
      <Alert dark>A simple dark alert—check it out!</Alert>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      <Button primary>Primary</Button>

      {/* <Paragraph size="14px" color="purple">This is sample paragraph</Paragraph>
      
      <Paragraph size=".5rem" color="red">This is small paragraph</Paragraph>


      <Image url={koalaImage} width="150px" height="100px"/> */}
    </div>
  );
}

export default App;
