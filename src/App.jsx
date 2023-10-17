import { InlineButton } from './components/InlineButton';
import { SassButton } from './components/SassButton';
import { BootstrapButton } from './components/BootstrapButton';
import { ComponentButton } from './components/ComponentButton';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import './main.scss';

const buttonProperties = {
  text: 'Object Button',
  color: 'green',
  action: console.log(12341234),
};

function App() {
  return (
    <>
      <header>
        <h2>Hello There</h2>
      </header>
      <main>
        <ComponentButton
          text="Object Button"
          color="green"
          action={() => console.log(12341234)}
        />
        <Button variant="danger">
          Hello<Badge className="primary">There</Badge>
        </Button>
        <BootstrapButton />
        <InlineButton />
        <SassButton />
      </main>
    </>
  );
}

export default App;
