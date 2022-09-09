import './App.css';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';

import Hello from './components/function_component/Hello';
import HelloWorld from './components/HelloWorld';
import Post from './components/Post';

function App() {

  let obj = {
    name : "Tra Long",
  }

  let post = {
    text : "How are you !",
    profile : obj
  }

  return (

    <div className="App">
      <header className="App-header">

        {/* <p>
          Hello World from React
        </p> */}

      <Counter initialValue = {10} incValue = {2} />
        
        
      </header>
    </div>
  );
}

export default App;
