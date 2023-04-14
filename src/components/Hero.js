import React from 'react'
import styled from 'styled-components'

function Hero({title, desc, bgImg}) {
    return <>
    <HeroImage bgImg={bgImg}>
        <HeroText>
            <h1>{title}</h1>
        </HeroText>
        <HeroParagraph>
            <h2>{desc}</h2>
        </HeroParagraph>
    </HeroImage>
    </>
}

export default Hero

const HeroImage = styled.div`
    background-image: ${(props) => `url("img/${props.bgImg}")`};
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const HeroText = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1.5rem;
color: white;
text-align: center;
margin-top: 15%;
`
const HeroParagraph = styled(HeroText)`
margin-top: 2.5%;
`
