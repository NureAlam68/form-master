import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefFrom from './components/RefFrom/RefFrom'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Sign up data', data)
  // }
  // const handleUpdateSubmit = data => {
  //   console.log('Update data', data)
  // }


  return (
    <>
     
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}


      {/* <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please sign up now.</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Update profile"} handleSubmit={handleUpdateSubmit} submitBtn='Update'>
        <div>
          <h2>Update profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
