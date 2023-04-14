import React from 'react'
import styled from 'styled-components'


function ErrorPage() {
    return (
        <>

            <Error>ERROR :(</Error>
        </>
    )
}

export default ErrorPage

const Error = styled.div`
    text-align: center;
    margin-top: 50%;
    font-size: 4rem;
    font-weight: 900;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background: linear-gradient(
        to right,
        #ff00ff 20%,
        #00ffff 30%,
        #ffff00 40%,
        #fff 60%
    );
    background-size: 200% auto;

    color: #fff;
    background-clip: text;
    /*  text-fill-color: transparent; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 2s linear infinite;
    @keyframes shine {
        to {
            background-position: 200% center;
        }
    } ;
`
