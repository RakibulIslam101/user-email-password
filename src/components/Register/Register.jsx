// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.config";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
      console.log('form submit');
      const email = e.target.Email.value; 
      const password = e.target.Password.value;
      console.log(email,password);
      
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
    }
    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
            <h2 className="text-3xl mb-8">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="bg-red-200 mb-4 w-3/4 py-2 px-4" type="email" name="Email"placeholder="Email Address" id="" />
                <br/>
                <input className="bg-red-200 mb-4 w-3/4 py-2 px-4" type="password" name="Password" placeholder="Password" id="" />
                <br/>
                <input className=" mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;