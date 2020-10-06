import React from 'react';
import logo1 from './img/ucp__logo.png';
import './App.css';
import applicationData from './applicantDataModel.react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="UCP-logo" alt="UCP logo"/>
        <p>
          UCP Clearing Online form
        </p>
      </header>
      <div className="Form">                  
            <Form className="FormBodyLogin">
              <h1 align="center">Login</h1>
              <Form.Group controlId="formBasicEmail">
                 <Form.Label>Username: </Form.Label>
                  <Form.Control type="username" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            <Button>
            Cancel
            </Button>
            <Button>
            Submit
            </Button>
          </Form>
      </div>
    </div>
  );
}

export default App;
function saved() {
  return (<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>);
}
