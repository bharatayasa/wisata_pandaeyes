import React from 'react'
import Navbar from '../navbar/Navbar'
import HeaderPage from './HeaderPage'
import UnityMosaicPage from './UnityMosaicPage'
import ExploreTheUnseenPage from './ExploreTheUnseenPage'
import FaqPage from './FaqPage'

function Pages() {
    return (
        <div>
                <header>
                    <Navbar />
                </header>
            <div>
                <section id='/'>
                    <HeaderPage />
                </section>
                <section id='/unity/mosaic'>
                    <UnityMosaicPage />
                </section>
                <section id='/explore/the/unseen'>
                    <ExploreTheUnseenPage />
                </section>
                <section id='/faq'>
                    <FaqPage />
                </section>
            </div>
        </div>
    )
}

export default Pages
