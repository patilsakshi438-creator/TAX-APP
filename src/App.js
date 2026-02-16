import logo from './logo.svg';
import './App.css';
import TextComponent from './component/TextComponet';
import List from './component/List';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <TextComponent name={"Username, Email-ID, Password, Age"}/>
      <List name={"Sakshi Patil, Komal Patil, Rutuja Patil"}/>
      <Button name={"Login"}/>
    </div>
  );
}     

export default App;
