import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return(
        <>
            <h1>Opps! An error occured.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to='/'> 
                <button>Go home</button>
            </NavLink>
        </>
    )
  
}

export default ErrorPage