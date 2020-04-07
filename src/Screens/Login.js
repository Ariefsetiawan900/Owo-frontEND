import React, {Component} from "react"
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Logo from '../assets/Logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    render(){
        return(
        <View style={styles.loginContainer}>
            <View style={styles.imageLogoContainer}>
                <Image source={Logo} style={styles.mainLogo}/>
            </View>
            <View style={styles.loginFormContainer}>
                <View style={styles.phoneNumberContainer}>
                    <Icon name='user-circle' size={40} color={'white'}
                    style={styles.userIcon}/>
                    <TextInput style={styles.textInput} 
                    placeholder="Nomor Ponsel" 
                    placeholderTextColor='white'
                    keyboardType='numeric'
                    />
                </View>
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.firstLineContainer}>
                    <View style={styles.leftLiner}/>
                    <Text style={styles.textLine}>ATAU</Text>
                    <View style={styles.rightLiner}/>
                </View>
                <View style={styles.joinNowButtonContainer}>
                    <TouchableOpacity style={styles.joinNowButton}>
                        <Text style={styles.JoinNowText}>JOIN NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Icon 
                name="comment"
                size={25}
                color={'#11AFB8'}
                style={styles.iconText}
                 />
                <Text style={styles.textFooter}>Butuh bantuan?</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#4d2a86',
        padding: 30,
        
    },
    imageLogoContainer: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    mainLogo: {
        width: '50%',
        height: 50,
        alignSelf: 'center',
        
        
    },
    loginFormContainer: {
        // backgroundColor: 'grey',
        paddingTop: 80,
    },
    phoneNumberContainer: {
        // backgroundColor: 'aqua',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    userIcon: {
        height: 40,
        width: '15%',
        // backgroundColor: 'red'
    },
    textInput: {
        padding: 0,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2,
        color: 'white',
        // backgroundColor: 'pink',
        width: '85%'
    },
    signInButtonContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        // backgroundColor: 'yellow',
    }, 
    signInButton: {
        borderColor: '#b9b9b9',
        borderWidth: 1.5,
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'transparent'
    },
    signInText: {
        textAlign: 'center',
        color: '#b9b9b9'
    },
    firstLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'pink',
        paddingBottom: 30,
        justifyContent: 'space-between'
    },
    leftLiner: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '40%'
    },
    textLine: {
        textAlign: 'center', 
        color: '#fff',
    },
    rightLiner: {
        borderWidth: 1,
        borderColor: '#fff',
        width: '40%'
    },
    joinNowButtonContainer: {
        paddingBottom: 20,
        // backgroundColor: 'red',
    },
    joinNowButton: {
        borderColor: '#b9b9b9',
        // borderWidth: 1.5,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#11AFB8',
    },
    JoinNowText: {
        textAlign: 'center',
        color: '#fff'
    },
    footerContainer: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    iconText: {
        height: 30,
        width: '10%',
        // backgroundColor: 'red'
    },
    textFooter: {
        paddingLeft: 8,
        color: '#11AFB8',
    }




})

