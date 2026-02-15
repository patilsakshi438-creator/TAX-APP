import logo from './logo.svg';
import './App.css';
import TextComponent from './component/TextComponet';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <TextComponent name={"Sakshi"}/>
      <List name={"Sakshi, Komal, Rutuja"}/>
    </div>
  );
}

export default App;
