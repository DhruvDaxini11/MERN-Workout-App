import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
const Signup = ()=>{
    const [email, SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    const handleSubmit = async (e)=> {
        e.preventDefault()
        console.log(email,password)

        await signup(email,password)
    } 

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Email:</label>
            <input type="email" onChange={(e)=> SetEmail(e.target.value)} value={email}/>
            <label>Password:</label>
            <input type="password" onChange={(e)=> SetPassword(e.target.value)} value={password}/>
            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup