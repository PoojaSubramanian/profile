import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectFirstName from '../actions/index';
import selectLastName from '../actions/index';
import selectEmail from '../actions/index';
import bindActionCreators from 'redux';
import { Field, reduxForm } from 'redux-form';
import { createProfile } from '../actions';
import Button from '@material-ui/core/Button';
import '../styles/style.css';

class UserInfo extends Component {
  constructor (props) {
    super(props);
  }

  renderField (field) {
    return (
      <div>
        <div className="label">
          <label>{field.label}</label>
        </div>
        <input
        type="text"  
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit (values) {
    this.props.createProfile(values);
  }

  render () {
    const { classes } = this.props;
    const { handleSubmit } = this.props;
    return (
      <div className="main">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
          <Field
            label="First Name"
            name="firstName"
            component={this.renderField}
          />
          <Field
            label="Last Name"
            name="lastName"
            component={this.renderField}
          />
          <Field
            label="Email"
            name="email"
            component={this.renderField}
          />
          <Field
            label="Street"
            name="street"
            component={this.renderField}
          />
          <Field
            label="City"
            name="city"
            component={this.renderField}
          />
          <Field
            label="State"
            name="state"
            component={this.renderField}
          />
          <Field
            label="Zipcode"
            name="zipcode"
            component={this.renderField}
          />
          <button className="button" type="submit">Submit </button>
        </form>
      </div>
    )
  }
}

function validate (values)  {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name'
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name'
  }

  if (!values.email) {
    errors.email = 'Please enter your email'
  }

  if (!values.street) {
    errors.street = 'Please enter your street address'
  }

  if (!values.city) {
    errors.city = 'Please enter your city'
  }

  if (!values.state) {
    errors.state = 'Please enter your state'
  }

  if (!values.zipcode) {
    errors.zipcode = 'Please enter your zipcode'
  }

  return errors;
}

// function mapStateToProps (state) {
//   //whatever is returned will show up as props inside of UserInfo
//   return {
//     firstName: state.firstName,
//     lastName: state.lastName,
//     email: state.email
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators ({createProfile: createProfile}, dispatch);
// }


// export default connect (mapStateToProps, mapDispatchToProps) (UserInfo);
export default reduxForm({
  validate: validate,
  form: 'profileForm'
})(
  connect(null, {createProfile})(UserInfo)
);



