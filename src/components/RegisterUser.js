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
          <ul className="form-style-1">
              <li>
                <label>Full Name <span className="required">*</span></label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="field-divided" placeholder="First" />
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} className="field-divided" placeholder="Last" />
              </li>
              <li>
                  <label>Cedula <span className="required">*</span></label>
                  <input type="text" name="idNumber" value={this.state.idNumber} onChange={this.handleChange} className="field-long" />
              </li>
              <li>
                  <label>Fecha nacimiento <span className="required">*</span></label>
                  <input type="text" name="birthDate" value={this.state.birthDate} onChange={this.handleChange} className="field-long" />
              </li>
              <li>
                  <label>Email <span className="required">*</span></label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="field-long" />
              </li>
              <li>
                  <label>Github username <span className="required">*</span></label>
                  <input type="text" name="gitUser" value={this.state.gitUser} onChange={this.handleChange} className="field-long" />
              </li>
              <li>
                  <input type="submit" value="Submit" />
              </li>
          </ul>
        </form>
      </>
    );
  }
}

export default RegisterUser;
