import React, {Component} from 'react';

import styles from './signin.module.css'; 
import FormFields from '../Widgets/FormFields/formfields';


class SignIn extends Component { 

    state = { 
        registerError: '', 
        loading: false, 
        formdata: { 
            email:{
                element: 'input', 
                value: '', 
                config: { 
                    name: 'email_input', 
                    type: 'email', 
                    placeholder: 'enter your email'
                }, 
                validation: { 
                    required: true, 
                    email: true,
                }, 
                valid:false, 
                touched: false, 
                validationMessage: '',
            }, 
            
        },
        password: {
            element: 'input', 
            value: '', 
            config: { 
                name: 'password_input', 
                type: 'password', 
                placeholder: 'enter your password'
            }, 
            validation: { 
                required: true, 
                password: true,
            }, 
            valid:false, 
            touched: false, 
            validationMessage: '',
        },
    }


    updateForm =()=> { 
        
    }
    render (){ 
        return ( 
            <div className = {styles.logContainer}> 
                <form>
                    <FormFields
                        id = {'email'}
                        formdata = {this.state.formdata.email}
                        change = {(element)=>this.updateForm(element)}
                    />
                </form>
            </div>
        )
    }
}

export default SignIn;