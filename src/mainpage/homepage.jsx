import React from 'react';
import AdCard from './partTwo.jsx';
import PartOne from './part1'
import HorizontalLabelPositionBelowStepper from './howtouse'
import AllAds from '../Ads/allads'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cards from '../mainpage/part2'

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                
                <PartOne />
                {/* <AdCard /> */}
                {/* <Cards/> */}
                <HorizontalLabelPositionBelowStepper />
                
            </div>
        )
    }
}
