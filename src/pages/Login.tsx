import React, {SyntheticEvent, useState} from 'react';
import { Navigate } from 'react-router-dom';    

const Login = (props: {setName: (name: string) => void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [rememberme, setRememberMe] = useState('');

    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
       
        // Set the remeber me value
        let remembermeval = 0;
        if(rememberme === 'on'){
            remembermeval = 1;
        }

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email, 
                password,
                remembermeval
            })
        });

        const content = await response.json();

        setNavigate(true);
        props.setName(content.name);
    }

    if(navigate){
        return <Navigate to="/" />;
    }

    return(
        <main className="d-flex align-items-center add-space">
            <section className="form-signin w-100 m-auto bg-white rounded shadow-sm border p-4">
                <form onSubmit={submit}>
                    {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox"
                                onChange={e => setRememberMe(e.target.value)}
                            /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </section>
        </main>
    );
};

export default Login;