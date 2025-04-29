
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/firebase';
import { addUser, removeUser } from './redux-store/userSlice';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
function App() {

  // Dispatching an action to appStore when user signup/signIn or logout. we can write it anywhere but inside or redux provider.
  const dispatch = useDispatch();
  useEffect(() => {
    //   const navigate = useNavigate(); // this hook should be inside of react router provider.         
    onAuthStateChanged(auth, (user) => {  // this will work only when user signIn/SignUp. it will dispatch the action to appStore.
      if (user) {
        // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        //navigate("/browse") // after signIn/signUp user will navigated to Brower page.
      }
      else {
        // User is signed out.
        dispatch(removeUser())
        //    navigate("/") // after logout user will navigated to Login page
      }
    })
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
