

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSucces] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        console.log('form submit');
        const email = e.target.Email.value;
        const password = e.target.Password.value;
        console.log(email, password);

        //   reset error
        setRegisterError('');
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }



        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSucces('User Created Successfully.');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="bg-red-200 mb-4 w-3/4 py-2 px-4" type="email" name="Email" placeholder="Email Address" id="" required />
                    <br />
                    <input className="bg-red-200 mb-4 w-3/4 py-2 px-4" type="password" name="Password" placeholder="Password" id="" required />
                    <br />
                    <input className=" mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;