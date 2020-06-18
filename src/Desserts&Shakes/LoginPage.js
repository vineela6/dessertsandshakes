import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"



firebase.initializeApp({
  apiKey: "AIzaSyBRcSVK9BiUOlbP2T_7j6bEkvGy7BWP18U",
  authDomain: "desserts-shakes.firebaseapp.com"
})

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
        
        <div className="container-fluid">
            <div class="container" >
            <div class="row">
                <div class="col-md-6 col-sm-12 mx-auto py-4 px-0">
                    <div class="card px-3">
                        <div class="card-title text-center">
                            <h5 class="mt-5">HEY, THERE</h5> <small class="para">signin to your cool account below.</small>
                        </div>
                        <form class="signup">
                            <div class="form-group"><input type="text" class="form-control" placeholder="Username" /></div>
                            <div class="form-group"><input type="password" class="form-control" placeholder="password" /></div> 
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <kbd>Signed In!</kbd><br/><br/>
            <button className
            ="btn btn-dark" onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
      </div>
    )
  }
}

export default Login