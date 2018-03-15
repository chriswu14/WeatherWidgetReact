import React, { Component } from "react";
import ReactDom from "react-dom";
import styled from 'styled-components';

import Flex from "./Flex";

export default class SearchInput extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleChange(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.props._getWeather(this.state.city);
            this.props._getPicture(this.state.city);
        }
    }

    handleClick(e) {
        this.props._getWeather(this.state.city);
        this.props._getPicture(this.state.city);
    }

    render() {
        return (
            <Flex justifyContent="center" padding="10px">
                <StyledInput                   
                    onKeyDown={this.handleEnter}
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.city}
                    placeholder="Search city..." />
                <StyledButton
                    onClick={this.handleClick}
                    disabled={!this.state.city}
                    type="button">
                    Search
                </StyledButton>
            </Flex>
        );
    }
}

const StyledInput = styled.input`
   margin-right: 10px;
   font-size: 20px;
`;

const StyledButton = styled.button`
   &:hover {
       cursor: pointer;
   }
`;
