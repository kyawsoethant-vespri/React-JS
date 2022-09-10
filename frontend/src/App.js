import './App.css';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';

import Hello from './components/function_component/Hello';
import HelloWorld from './components/HelloWorld';
import Post from './components/Post';
import Greeting from './components/function_component/Greeting';
import ListDemo from './components/ListDemo';

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
        {/*  <HelloWorld obj={obj} />*/}

       {/* <HelloWorld  obj={obj}/>
          <Hello/>
       <Post post={post}></Post>*/}
          {/*<Counter initalValue={4} incValue={2}/>*/}
          {/*<Greeting isLoggedIn={false}/>*/}
         {/* <ListDemo/>*/}
         {/* <FormDemo/>*/}
          {/*<BasicForm/>*/}
         {/* <YupForm/>*/}
        {/*  <ToDoList/>*/}
          <WelcomeDialog/>
      </header>
    </div>
  );
}

export default App;;
