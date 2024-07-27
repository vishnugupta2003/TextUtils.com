import './App.css';
import Navbar from './Navbar';
import Practice from './practice';
import About from './user/about.jsx';
import React, { useState } from 'react';
import Alert from './alert.jsx';
import TextForm from './TextForm.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040858';
      showAlert('dark mode has been enabled.', 'success');
      document.title = 'TextUtiles - dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode.';
      // }, 2000);                                            // use title blinking
      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled.', 'success');
      document.title = 'TextUtiles - light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title='TextConverter'
          aboutTest='About TextConverter'
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        {/* <Navbar title = "Techsimplus"   /> */}
        {/* <Navbar title ={6564}   />    /*give error type string but you are giving number. */}
        {/* <Navbar  /> */}

        {/* <div className="container my-3">
      <Practice title="Techsimplus" about="about techsimplus" heading="Enter the text to Analyze" />
      </div> */}

        {/* <About/> */}
        <div className='container my-3'>
          <Switch>
            {/* react always do partial matching that means this always show component 1 if you go exact component so use exact keyword before path */}
            {/* '/user'--> component 1
            '/user/home' --> component 2 */}
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/'>
              <TextForm
                showAlert={showAlert}
                heading=' Enter the text to Analyze'
                mode={mode}
              />
            </Route>
          </Switch>
          {/* my-3 is use for give spacing on y-axis like margin top */}
        </div>
      </Router>
    </>
  );
};
export default App;
