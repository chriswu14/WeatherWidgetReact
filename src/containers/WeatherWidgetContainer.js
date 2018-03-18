
import React, { Component } from 'react';
import DateTime from '../components/DateTime';
import Temperature from '../components/Temperature';
import SearchInput from '../components/SearchInput';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import Icon from '../components/Icon';
import Wrapper from '../components/Wrapper';
import ForcastItem from '../components/ForecastItem';
import { fetchWeather } from '../api/weather';
import { getPicture } from '../api/cityPicture';
import transformData from '../utils/transformData';
import weatherConditionMap from '../utils/weatherConditionMap';


export default class WeatherWidgetContainer extends Component {
    constructor() {
        super();
        this.state = {
            forecast: [],
            pictureLoaded: false,
            weatherLoaded: false,
        };

        this.handleGetWeather = this.handleGetWeather.bind(this);
        this.handleGetPicture = this.handleGetPicture.bind(this);
    }

    componentDidMount() {
        this.handleGetPicture('sydney');
        this.handleGetWeather('sydney');
    }

    handleGetWeather(city) {  
        this.setState({weatherLoaded: false});
        fetchWeather(city).then(res => {
            this.setState(transformData(res));
            this.setState({weatherLoaded: true});            
        });
    }

    handleGetPicture(city) {
        this.setState({pictureLoaded: false});      
        getPicture(city, (res, status) => {
            let imgUrl = res[0].photos[0].getUrl({ 'maxWidth': 600 });

            this.setState({
                imgUrl: imgUrl,
                pictureLoaded: true
            })           
        });

    }

    render() {
        const forecast = this.state.forecast.map((value, index) => {           
            if (index > 4) { return null }
            return (
                <ForcastItem 
                    currentDay={value.day}
                    key={index}                   
                    low={value.low}
                    high={value.high}                    
                    condition={weatherConditionMap[value.code]}
                />
            );
        });

        return (
            <div>
                <SearchInput _getWeather={this.handleGetWeather} _getPicture={this.handleGetPicture} />
                { 
                    this.state.pictureLoaded && this.state.weatherLoaded ? 
                    (
                        <Wrapper bgImg={this.state.imgUrl}>
                            <Grid>
                                <GridItem>
                                    <DateTime dateTime={this.state.date} />
                                    <div className="text-lg">{this.state.type}</div>
                                </GridItem>
                                <GridItem darkened="true" rowspan="2">                           
                                        {forecast}
                                </GridItem>
                                <GridItem alignSelf="center">
                                    <div className="text-xl">
                                        <Icon conditionCode={this.state.code}/>
                                        {this.state.degree ? <Temperature degree={this.state.degree} /> : ''}
                                    </div>
                                    <div className="text-align-center">
                                        {this.state.city}, {this.state.country}
                                    </div>
                                </GridItem>
                            </Grid>
                    </Wrapper> 
                    )
                : <p className="text-align-center"> loading... </p>
                }            
            </div>
        )
    }
}
