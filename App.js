import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            key = {item.id}
            {...item}
            // can make all of this information {item} with key of item and id
                    // img={item.coverImg}
                    // rating={item.stats.rating}
                    // reviewCount={item.stats.reviewCount}
                    // location={item.location}
                    // title={item.title}
                    // price={item.price}
                    // openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}