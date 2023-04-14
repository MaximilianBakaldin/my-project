import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Fetch from '../components/Fetch'
import { Welcome } from '../WelcomeRichard'

function Home() {
    const greeting = useContext(Welcome)

    return (
        <>
            <div>
                <Hero
                    title={'Hello'}
                    desc={'Scroll down to generate a list of astronauts'}
                    bgImg={'raisting-satellite-1010862_1920 (kopia).jpeg'}
                />
                <h3>{greeting}</h3>
                <Hero
                    title={'All the way down'}
                    desc={'Click the button below'}
                    bgImg={'earth-11595_1920 (kopia).jpeg'}
                />
                <Fetch />
            </div>
        </>
    )
}

export default Home
