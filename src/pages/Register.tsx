import React, {SyntheticEvent, useState} from 'react';
import { Navigate } from 'react-router-dom';    

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email, 
                password
            })
        });

        // const content = await response.json();
        setNavigate(true);
    }

    if(navigate){
        return <Navigate to="/login" />;
    }

    return(
        <main className="d-flex align-items-center add-space">
            <section className="form-signin w-100 m-auto bg-white rounded shadow-sm border p-4">
                <form onSubmit={submit}>
                    {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <div className="form-floating">
                        <input type="name" className="form-control" id="name" placeholder="James" required
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </section>
        </main>
    );
}

export default Register;