import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from "../components/Banner"
import {Link} from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms"
import Services from "../components/Services"
export default class Home extends Component {
    render() {
        return (
            <>
            <Hero helo="defaultHero">
            <Banner 
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </>
        )
    }
}
