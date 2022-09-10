function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }


  export default function Greeting(props) {

    // const isLoggedIn = props.isLoggedIn; // Greeting first method
    // if (isLoggedIn) {
    //   return <UserGreeting />;
    // }
    // return <GuestGreeting />;

    const isLoggedIn = props.isLoggedIn; // Greeting sencond method

    const component = isLoggedIn ? <UserGreeting/> : <GuestGreeting/>;

    return component;
  }