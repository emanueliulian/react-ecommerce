import React, {Component} from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import './sign-in.scss';
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmitHandler = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''})
        } catch  (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmitHandler}>
                    <FormInput
                        name='email'
                        type='text'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;