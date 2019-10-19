import React, { Component } from 'react';
import FormField from '../ui/formField';
import { validate } from '../ui/misc';
import { firebase } from '../../firebase';
class SignIn extends Component {

    state = {
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true,
                },
                valid: false,
                validationMessage:''
            }
        }
    }


    submitForm = (event) =>{
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
      //  console.log(this.props);
        if(formIsValid){
            firebase.auth()
            .signInWithEmailAndPassword(
                dataToSubmit.email,
                dataToSubmit.password
            ).then(()=>{
                this.props.history.push('/dashboard')
            }).catch(error =>{
                this.setState({
                    formError: true
                })
            })
           
        } else {
            this.setState({
                formError: true
            })
        }
    }

    resetFormSuccess = (type) =>{
        const newFormdata = {...this.state.formdata}

        for(let key in newFormdata){
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }

        this.setState({
            formError:false,
            formdata: newFormdata,
            formSuccess: ''
        });
    
    }

    updateForm = (element) =>{
        const newFormData = {...this.state.formdata}
        const newElement = {...newFormData[element.id]};
      //  newFormData[element.id].value = element.event.target.value;
      //   ro rang code
      newElement.value = element.event.target.value;

        const validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
      
        newFormData[element.id] = newElement;
        this.setState({
            formError: false,
            formdata:newFormData
        })
    
    }

    render() {
        return ( 
            <div className="container">
                <div className="signin_wrapper" style={{margin:'100px'}}>
                <form onSubmit={(event)=> this.submitForm(event)}>

                    <h2>Please Login</h2>

                    <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=> this.updateForm(element)}
                    />
                    {/* user: fancis@gmail.com pass: pass123 */}
                    <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element)=> this.updateForm(element)}
                    />
                        { this.state.formError ? 
                            <div className="error_label">Something is wrong, try again.</div>
                            :null
                        }
                    <button onClick={(event)=> this.submitForm(event)}>Log in</button>
                </form>
                    
                </div>
            </div>
        )
    }
}

export default SignIn