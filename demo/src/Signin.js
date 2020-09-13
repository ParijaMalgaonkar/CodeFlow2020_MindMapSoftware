import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <article className="br3 shadow-2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <form className=" formm center">
                    <fieldset id="sign_up" className=" b--transparent">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f3" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        {/* <label className="pa0 ma0 lh-copy f5 pointer"><input type="checkbox" /> Remember me</label> */}
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 br2 input-reset ba b--black white bg-transparent grow pointer f4 dib" type="submit" value="Sign in" />
                    </div>
                    <div className=" formm lh-copy mt3">
                        <a href="#0" className="f6 link grow white db">Regitser</a>
                        <a href="#0" className="f6 link grow white db">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default SignIn;