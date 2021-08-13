import connect from "../../appStore/connect";

let FormResult = function ({name, email}) {
	return (
		<div style ={{padding:'10px'}}>
            <p>Name submitted - <strong style={{textDecoration: 'underline'}}>{name}</strong></p>
            <p>Email submitted - <strong style={{textDecoration: 'underline'}}>{email}</strong></p>
			
		</div>
	);
};


FormResult = connect(
    state => ({
        name: state.form.name,
        email: state.form.email
    }), 
    dispatch => ({})
)(FormResult)

export default FormResult