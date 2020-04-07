import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default class Register extends Component {
    render(){
        return(
            <View>
                <View>
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
                <View>
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
                    <View>
                        <Text>
                            Transaksi Terakhir
                        </Text>
                    </View>
                    <View>
                        <Image />
                        <Text>Nama pengguna</Text>
                        <Text>Nama Bank</Text>
                    </View>
                
            </View>

        )
    }
}