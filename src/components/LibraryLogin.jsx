import { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {
  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function navigateBetweenCreateAccountAndLogin() {
    setDoYouHaveAnAccount(!doYouHaveAnAccount)
  }

  function loginAction() {
    alert(`This is your username ${username} and password ${password}`)
  }

  return (
    <section style={{ border: '3px solid blue', margin: '40px auto', padding: '24px', maxWidth: '360px' }}>
      {doYouHaveAnAccount ? (
        <form>
          <h2>Sign in</h2>
          <label htmlFor="username">Username:</label><br />
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          /><br />
          <label htmlFor="password">Password:</label><br />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /><br />
          <LibraryButton buttonLabel="LOGIN" onClickButton={loginAction} />
          <p>
            New here?{' '}
            <LibraryButton
              buttonLabel="Create Account"
              onClickButton={navigateBetweenCreateAccountAndLogin}
            />
          </p>
        </form>
      ) : (
        <form>
          <h2>Create account</h2>
          <label htmlFor="newUsername">Username:</label><br />
          <input
            id="newUsername"
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          /><br />
          <label htmlFor="newPassword">Password:</label><br />
          <input
            id="newPassword"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /><br />
          <LibraryButton buttonLabel="CREATE ACCOUNT" />
          <p>
            Already have an account?{' '}
            <LibraryButton
              buttonLabel="Sign in"
              onClickButton={navigateBetweenCreateAccountAndLogin}
            />
          </p>
        </form>
      )}
    </section>
  )
}

export default LibraryLogin
