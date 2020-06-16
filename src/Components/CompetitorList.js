import React, { Component } from "react";
import sports from '../../src/imgs/sports.jpg';
import Alert from 'react-bootstrap/Alert'

import PageHeading from '../Components/PageHeading';

class CompetitorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            competitors: [],

        }
    }

    render() {
        let { competitors } = this.state;


        return (
            <div className="backgroundImage">
            <PageHeading>Competitors</PageHeading>
            </div>

        )
    }
}

export default CompetitorList;