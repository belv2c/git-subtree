import './App.css';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export function App() {
  return (
    <div className="App">
      <p>Git subtree</p>
      <Button ariaLabel="Click me" name="button-1">
        Click me
      </Button>
      <Checkbox aria-label="Check me" name="checkbox-1" />
    </div>
  );
}
