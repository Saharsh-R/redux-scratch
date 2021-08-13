import { useState } from "react";
import connect from "../../appStore/connect";

let Form = function ({submit}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let handleFormSubmit  = (e) => {
        e.preventDefault()
        submit({name, email})
        setName('')
        setEmail('')

    }
	return (
		<div>
			<form onSubmit = {handleFormSubmit}>
				<div>
					<label >Name: </label>
					<input value  = {name} type="text" name="name" id="name"  onChange = {e => setName(e.target.value)}/>
				</div>
				<div>
					<label >Email: </label>
					<input value = {email }  name="email" id="email"  onChange = {e => setEmail(e.target.value)}/>
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

Form = connect(
    state => ({}),
    dispatch => ({
    submit: (data) => dispatch({
        type: 'SUBMIT', 
        payload: data
    })
}))(Form)
export default Form

