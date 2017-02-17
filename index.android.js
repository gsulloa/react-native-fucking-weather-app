import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
  
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {fetchWeather} from './weatherAPI'
import Highlighter from 'react-native-highlight-words'

const iconNames = {
  Default: 'md-time',
  Clear: "md-sunny",
  Rain: 'md-rainy',
  Thunderstorm: 'md-thunderstorm',
  Clouds: 'md-cloudy',
  Snow: 'md-snow',
  Drizzle: 'md-umbrella'
}

const phrases = {
  Default:{
    title: "Fetching the Fucking Weather",
    subtitle: "Be patient, you're witnessing a miricle",
    highlight: "Fucking",
    color: "#e32500",
    backgroundColor: "#ffd017"
  },
  Clear: {
    title: "Esta despejado!",
    subtitle: "Sal a hacer ejercicio",
    highlight: "despejado",
    color:"#e32500",
    backgroundColor:"#ffd017"
  },
  Rain: {
    title: "Lluvia a cantaros",
    subtitle: "A quedarse en camita viendo Netflix",
    highlight: "cantaros",
    color:"#004a96",
    backgroundColor:"#2f343a"
  },
  Thunderstorm: {
    title: "Truenos everywhere!", 
    subtitle: "Que se acabe ya!",
    highlight: "everywhere",
    color:"#fbff46",
    backgroundColor:"#020202"
  },
  Clouds: {
    title: "Nublado",
    subtitle:"nose que poner",
    highlight: "Nublado",
    color:"#0044ff",
    backgroundColor:"#939393"
  },
  Snow: {
    title: "Nieve!!!",
    subtitle: "Esos muñecos no se hacen solos",
    highlight: "muñecos",
    color:"#021d4c",
    backgroundColor:"#15a678"
  },
  Drizzle: {
    title: "kha?",
    subtitle: "...",
    highlight: "kha",
    color:"#b3f6e4",
    backgroundColor:"#1fbb68"
  }
}

class App extends Component {
  componentWillMount(){
    this.state = {
      temp: 0,
      weather: 'Snow'
    }
  }

  componentDidMount(){
      this.getLocation()
      //fetchWeather(-21,28).then(res => console.log(res))
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchWeather(posData.coords.latitude, posData.coords.longitude)
        .then(res => this.setState({
          temp: res.temp,
          weather: res.weather
        }) ),
      (error) => alert(error),
      {timeout:10000}
    )
  }
  render(){
    return(
        //JSX
        <View style={[styles.parent, {backgroundColor: phrases[this.state.weather].backgroundColor}]}>
          <StatusBar hidden={true}></StatusBar>
          <View style={styles.header}>
            <Icon size={80} name={iconNames[this.state.weather]}  color={'white'}/>
            <Text style={styles.temp}>{this.state.temp}°</Text>
          </View>
          <View style={styles.body}>
            <Highlighter
            style={styles.title}
            highlightStyle={{color: phrases[this.state.weather].color}}
            searchWords={[phrases[this.state.weather].highlight]}
            textToHighlight={phrases[this.state.weather].title}
            />
            <Text style={styles.subtitle}>{phrases[this.state.weather].subtitle}</Text>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  body: {
    flex: 5,
    
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10
  },
  temp: {
    fontFamily: 'helveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  title: {
    fontFamily: 'helveticaNeue-Bold',
    fontSize: 78,
    color: 'white',
    margin: 5
  },
  subtitle: {
    fontFamily: 'helveticaNeue-Bold',
    fontSize: 16,
    color: 'white'
  },

})
AppRegistry.registerComponent('fuckingWeather', () => App);