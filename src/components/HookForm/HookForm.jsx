import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Sohag')
    // const [email, handleEmailChange] = useInputState()
    // const [pass, handlePassChange] = useInputState()
        
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(name, email, pass)
    // }

    const nameState = useInputState()
    const emailState = useInputState()
    const passState = useInputState()


    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameState.value)
        console.log(emailState.value)
        console.log(passState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input value={pass} onChange={handlePassChange} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" /> */}
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState}  type="email" name="email" />
                <br />
                <input {...passState}  type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;