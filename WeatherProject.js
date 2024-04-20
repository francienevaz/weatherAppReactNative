import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Forecast from "./Forecast";
import open_weather_map from "./src/weather/open_weather_map";

class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", 
        forecast: null
    };
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        open_weather_map.fetchForecast(zip).then((forecast)=>{
        console.log(forecast);
            
        this.setState({ forecast: forecast});
        });
    };

    render() {
        let content = null;
        if (this.state.forecast) {
            content = (
                <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp} 
                />
            );
        }
            
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Your input {this.state.zip}</Text>
                <TextInput  
  
                    onSubmitEditing={this._handleTextChange}   
                    style={styles.input}
                    placeholder="Enter your Zip Code"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666"
    }, 
    welcome: {
        fontSize: 20, textAlign: "center", margin: 10},
        input:{
            fontSize: 20,
            borderWidth: 2,
            padding: 2,
            height: 40,
            width: 100,
            textAlign: "center"
        }
});

export default WeatherProject;