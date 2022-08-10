import { useState } from "react";

const SignIn = () => {

    const [userData, setUserData] = useState([
        {
            email: "one@gmail.com",
            pass: "111",
        },
     
      ]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [isSignIn, setIsSignIn] = useState(0);
  console.log("userdata ===== ", userData);

  const handleAdd = (e) => {
    e.preventDefault();
    
    if(isSignIn){
      const check = userData.filter((cur) => cur.pass === pass);
      if(check[0]){
        console.log("check ==", check[0]);
        console.log("you are successfully logged in");
      }else{
        console.log("yser does not exit");
      }
     
    }else{
        setUserData([...userData, { email: email, pass: pass}]);
    }

  };

  

 const handleSignup = () => {
    setIsSignIn(1);
    setEmail("");
    setPass("")
  }

  return (
    <div id="Main_signin my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2>{ isSignIn !== 0 ? "Please Sign Up" : "Please Sign In"}</h2>
            <form onSubmit={handleAdd}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </form>

           

           <a className="text-primary mr-3" 
           onClick={() => setIsSignIn(0)}>SigIn</a>

           <a className="text-primary"
           onClick={() => handleSignup()}>SignUp</a>





          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
