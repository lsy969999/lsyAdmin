import React from 'react'

const SignIn = () => {
  return (
    <div>
        <h2>
            Sign In to lsyAdmin
        </h2>
        <form action="">
            <div>
                <label>
                    Email
                </label>
                <div>
                    <input type="email"
                        placeholder='Enter your email' />
                </div>
            </div>

            <div>
                <label>
                    Password
                </label>
                <div>
                    <input type="password"
                        placeholder='Enter your password' />
                </div>
            </div>

            <div>
                <input type="submit" value="Sign In" />
            </div>

            <div>
                <p>
                    Don't have any account? SignUp
                </p>
            </div>
        </form>
    </div>
  )
}

export default SignIn