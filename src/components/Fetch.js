import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Fetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if (buttonClicked) {
            const fetchData = async () => {
                setLoading(true)
                const response = await fetch(
                    'https://ll.thespacedevs.com/2.2.0/astronaut/?format=json&limit=50',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    }
                )
                const data = await response.json()
                setData(data.results)
                setLoading(false)
            }
            fetchData()
        }
    }, [buttonClicked])

    const handleClick = () => {
        setButtonClicked(true)
    }

    return (
        <div>
            <Button onClick={handleClick}>Click here!</Button>
            {loading && <p>Loading...</p>}
            <ul>
                {data &&
                    data.map((item) => (
                        <li key={item.id}>
                            <br />
                            <br />
                            {item.name}
                            <br />
                            {item.age}
                            <br />
                            <br />
                            {item.bio}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Fetch

const Button = styled.button`
    cursor: pointer;
    font-size: 3rem;
    border-color: transparent;

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
    /*  -webkit-text-fill-color: transparent; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 1.5s linear infinite;
    @keyframes shine {
        to {
            background-position: 200% center;
        }
    } ;
`
