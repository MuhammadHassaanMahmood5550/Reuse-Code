import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
const FirePage = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState("");


    useEffect(() => {
      console.log("i run once in useEffects");
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    },[]);

    const register = async () => {
     try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        console.log(user);
     }catch(error){
        console.log(error.message);
        alert(error.message);
     }

    }

    const login = async () => {
      try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(user);
     }catch(error){
        console.log(error.message);
        alert(error.message);
     }
    }

    const logout = async () => {
      await signOut(auth);
    }

    return ( 
        <div id="Main_firepage">
            <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
           
          
              <div className="form-group">


                <h3>register user</h3>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>

              <button onClick={() => register()} className="btn btn-success">
                create user
              </button>


              <h3>Login</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              
              <button onClick={() => login()} className="btn btn-success">
                create user
              </button>

              <h4>User logged in: {user?.email}</h4>
              <button onClick={() => logout()}>Sign out</button>


          </div>
        </div>
      </div>
      </div>

     );
}
 
export default FirePage;