import React from "react"
import { Form, Input, Button } from "./form-lib"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      email: '',
      password: ''
    }
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validateField = field => {
    console.log(field)
  }

  render() {
    const { username, email, password } = this.state
    return (
      <div className="App">
        <Form name="userForm" onSubmit={console.log} onValidationError={console.log}>
          <Input
            name="userName"
            type="text"
            placeholder="Name"
            onChange={this.onInputChange}
            value={username}
            required={true}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.onInputChange}
            value={email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onInputChange}
            value={password}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App
