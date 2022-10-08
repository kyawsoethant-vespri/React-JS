import React, { Fragment } from "react";

import './App.css';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';

import Hello from './components/function_component/Hello';
import HelloWorld from './components/HelloWorld';
import Post from './components/Post';
import Greeting from './components/function_component/Greeting';
import ListDemo from './components/ListDemo';
import FormDemo from './components/FormDemo';
import BasicForm from './components/formik/BasicForm';
import YupForm from './components/formik/YupForm';
import ToDoList from './components/ToDoList';
import WelcomeDialog from './components/WelcomeDialog';
import FocusDemo from './components/FocusDemo';
import OuterClickExample from './components/function_component/OuterClickExample';
import ContextDemo from './components/context/ContextDemo';
import ThemeContext from "./components/context/ThemeContext";
import FragmentDemo from "./components/fragment/FragmentDemo";
import logProps from "./components/hoc/logProps";
import RunTimeTypeDemo from "./components/runtime_type/RunTimeTypeDemo";
import RepeatDemo from "./components/function_as_child/RepeatDemo";
import { Modal } from "bootstrap";
import RenderProperty from "./components/render-property/RenderProperty";
import PortalDemo from "./components/portal/PortalDemo";
import FunctionCounter from "./components/function_component/FunctionCounter";
import ToDoListHook from "./components/function_component/hook/ToDoListHook";
import EffectHookDemo from "./components/function_component/hook/EffectHookDemo";
import UseReducerDemo from "./components/function_component/hook/ReducerHookDemo";
import ReducerHookDemo from "./components/function_component/hook/ReducerHookDemo";
import ToDoListWithReducer from "./components/function_component/hook/ToDoListWithReducer";
import MemoHookDemo from "./components/function_component/hook/MemoHookDemo";
import RenderingExample from "./components/function_component/hook/RenderingExample";
import UseRefDemo from "./components/function_component/hook/UseRefDemo";
import UseTransitionDemo from "./components/function_component/hook/UseTransitionDemo";
import UseIdDemo from "./components/function_component/hook/UseIdDemo";

// import("./OurMath").then(math => {
//   console.log("Add ",math.add);
//   console.log(math.add(16, 26));
// });

let LogComponent = logProps(WelcomeDialog);

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
         
         {/* <FormDemo /> */}
         
         {/* <BasicForm/> */}

         {/* <YupForm/> */}

         {/* <ToDoList/> */}

         {/* <WelcomeDialog/> */}

         {/* <FocusDemo/> */}

         {/* <OuterClickExample/> */}

        {/* <ThemeContext.Provider value="dark">
              <ContextDemo/>
        </ThemeContext.Provider> */}

         {/* <FragmentDemo/> */}

         {/* <LogComponent loading={false}/> */}

         {/* <RunTimeTypeDemo/> */}

         {/* <RepeatDemo/> */}
        
        {/* <RenderProperty/> */}

        {/* <PortalDemo/> */}

        {/* <FunctionCounter/> */}

        {/* <ToDoListHook/> */}

        {/* <EffectHookDemo/> */}

        {/* <ReducerHookDemo/> */}

        {/*<ToDoListWithReducer/>*/}

        {/*<MemoHookDemo/>*/}

        {/*<RenderingExample/>*/}

        {/*<UseRefDemo/>*/}

        {/*<UseTransitionDemo/>*/}

        <UseIdDemo/>

      </header>

    </div>
  );
}

export default App;
