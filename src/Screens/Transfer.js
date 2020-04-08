import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default class Transfer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerTopNavbar}>
                <View>
                    <TouchableOpacity>
                        <Image />
                    </TouchableOpacity>
                    <Text>TRANSFER</Text>
                </View>
                <View>
                    <Text>Penerima Baru</Text>
                    <Text>Favorit</Text>
                </View>
                </View>
                <View style={styles.cardContainer}>
                    <View>
                        <TouchableOpacity>
                            <Image />
                            <Text>Ke Sesama Ovo</Text>
                            <Image />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image />
                            <Text>Ke Rekening Bank</Text>
                            <Image />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>
                            Transaksi Terakhir
                        </Text>
                    </View>
                    <View style={styles.containerHistory}>
                        <Image />
                        <Text>Nama pengguna</Text>
                        <Text>Nama Bank</Text>
                    </View>
                
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffff',
        
    },
    containerTopNavbar: {
        backgroundColor: '#53338C',
        paddingBottom: 60
    },
    cardContainer: {
        backgroundColor: 'cyan',
        paddingBottom: 170
    },
    textContainer: {
        backgroundColor: 'yellow',
        paddingBottom: 20
    },
    containerHistory: {
        backgroundColor: 'blue',
        paddingBottom: 190
    }
})