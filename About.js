import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput, Alert} from "react-native";

class About extends Component {
    static navigationOptions = {
        header: null
    }
      render() {
        return (
          <View style={styles.containerMain}>
            <View style={styles.box2}>
              <View>
                <Image source={require("./img/sia.jpg")} style={styles.image} />
              </View>              
            </View>
            <Text style={styles.Text2}>by Herry Vipassana Sanjaya</Text>            
            <Text style={styles.Judul}>Ding!</Text>
            <Text style={styles.Text}>Absen Mahasiswa</Text>
            <View style={styles.box1}>
              <Text style={styles.buttonText}>Aplikasi Ding! merupakan aplikasi untuk melakukan scanning absen mahasiswa.</Text>
            </View>   
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Kembali</Text>
            </TouchableHighlight>           
          </View>
          
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: 'blue',
  },
  headerBar: {
    backgroundColor: "#880E4F",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    borderRadius: 5,
  },
  image: {
    height: 150,
    width: 150,
    paddingTop: 50
  },
  Judul: {
    textAlign: "center",
    height: 40,
    width: "100%",
    color: "#5E2E62",
    fontSize: 25
  },
  Text: {
    textAlign: "center",
    height: 40,
    width: "100%",
    color: "#5E2E62",
    fontSize: 18
  },
  Text2: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 25,
    color: "#5E2E62",
    fontSize: 12
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#FF80AB",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "45%",
    borderRadius: 5,
  },
    button2Style: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "white",
    marginTop:20,
    marginBottom: 20,
    height: 40,
    width: 150,
    borderRadius: 5
  },
    button3Style: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "white",
    marginTop:20,
    marginBottom: 20,
    marginLeft: 300,
    height: 50,
    width: 50,
    borderRadius: 100
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    color: "#FFFFFF",
    fontSize: 18
  },
  box1: {
    backgroundColor: 'white',
    marginTop:10,
    height: 200,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 120,
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#880E4F",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
},
textHeader: {
    fontSize:20,
    color: "#fff",
    textAlign: "center"
  },
textInput: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderColor: '#7C3B81',
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 230,
    marginTop: 10,
    borderRadius: 5,
},
});
export default About;