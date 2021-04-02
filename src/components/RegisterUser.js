import React from "react";
import ViewUserInfo from "./ViewUserInfo"
import { saveUserCookie, readUserCookie } from '../utils';

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      idNumber: '',
      birthDate: '',
      email: '',
      gitUser: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    saveUserCookie(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      idNumber: '',
      birthDate: '',
      email: '',
      gitUser: ''
    });
  }

  readUserInfo() {
    return readUserCookie();
  }

  render() {
    return (
      <>
        {
          <ViewUserInfo userInfoArr={readUserCookie()} />
        }
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Cedula:
            <input type="text" name="idNumber" value={this.state.idNumber} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Fecha nacimiento:
            <input type="text" name="birthDate" value={this.state.birthDate} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Correo electronico:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br /><label>
            Github username:
            <input type="text" name="gitUser" value={this.state.gitUser} onChange={this.handleChange} />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default RegisterUser;
