import { Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class Tiempo extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:40, textAlign:"center", color:"grey", marginTop:5,}}>Weather App</Text>
        <View style={{
            borderRadius:15,
            borderColor:"navy",
            borderWidth:1,
            width:250,
            marginLeft:100,
            marginTop:23,

        }}>
        <View style={{width:200,
        }}>
            <TextInput></TextInput>
        </View>
        <View style={{marginLeft:211, marginTop:-37}}>
            <TouchableOpacity>
            <Image 
            style={{width:30, height:30,}}
            source={require("./Imagenes/lupa.png")}>
            </Image>
            </TouchableOpacity>
        </View>
        </View>
            <View>
                {/*caja contenedora del clima del pais a consultar*/}
                <View>
                    <Image style={{width:500, height:300, marginTop:35, marginLeft:2}}
                    source={require("./Imagenes/nubes.png")}></Image>
                </View>
                <View style={{marginTop:-195, marginLeft:205,}}>
                    <Text style={{fontSize:52,}}>32°</Text>
                </View>

                <View>
                    <Image style={{width:50, height:50, marginTop:110, marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                </View>
                <View style={{marginTop:-50, marginLeft:70,}}>
                    <Text style={{fontSize:30, color:"dodgerblue"}}>80%</Text>
                </View>
                <View>
                    <Image  
                    style={{width:50, height:50, marginTop:50, marginLeft:10}}
                    source={require("./Imagenes/viento.png")}
                    ></Image>
                </View>
                <View style={{marginTop:-50, marginLeft:70,}}>
                    <Text style={{fontSize:30, color:"dodgerblue"}}>40km</Text>
                </View>
                
            </View>
            <ScrollView horizontal>
            <View>
                <View style={{
                    borderWidth:4,
                    width:150,
                    height:150,
                    borderColor:"navy",
                    borderRadius:15,
                    marginLeft:20,
                    marginTop:40,
                }}>
                    <Image source={require("./Imagenes/nubes.png")}
                    style={{width:85, height:85, marginLeft:28}}></Image>
                    <Text style={{marginTop:-60, marginLeft:55, fontSize:25}}>32°</Text>
                    <Image style={{width:40, height:40, marginTop:20,marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                    <Text style={{marginLeft:16}}>80%</Text>
                    <Image source={require("./Imagenes/viento.png")}
                    style={{width:43, height:43,marginTop:-60, marginLeft:90}}></Image>
                    <Text style={{marginLeft:90}}>40km</Text>
                </View>
                <View style={{
                    borderWidth:4,
                    width:150,
                    height:150,
                    borderColor:"navy",
                    borderRadius:15,
                    marginLeft:200,
                    marginTop:-150,
                }}>
                    <Image source={require("./Imagenes/nubes.png")}
                    style={{width:85, height:85, marginLeft:28}}></Image>
                    <Text style={{marginTop:-60, marginLeft:55, fontSize:25}}>32°</Text>
                    <Image style={{width:40, height:40, marginTop:20,marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                    <Text style={{marginLeft:16}}>80%</Text>
                    <Image source={require("./Imagenes/viento.png")}
                    style={{width:43, height:43,marginTop:-60, marginLeft:90}}></Image>
                    <Text style={{marginLeft:90}}>40km</Text>
                </View>
                <View style={{
                    borderWidth:4,
                    width:150,
                    height:150,
                    borderColor:"navy",
                    borderRadius:15,
                    marginLeft:380,
                    marginTop:-150,
                }}>
                    <Image source={require("./Imagenes/nubes.png")}
                    style={{width:85, height:85, marginLeft:28}}></Image>
                    <Text style={{marginTop:-60, marginLeft:55, fontSize:25}}>32°</Text>
                    <Image style={{width:40, height:40, marginTop:20,marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                    <Text style={{marginLeft:16}}>80%</Text>
                    <Image source={require("./Imagenes/viento.png")}
                    style={{width:43, height:43,marginTop:-60, marginLeft:90}}></Image>
                    <Text style={{marginLeft:90}}>40km</Text>
                </View>
                <View style={{
                    borderWidth:4,
                    width:150,
                    height:150,
                    borderColor:"navy",
                    borderRadius:15,
                    marginLeft:560,
                    marginTop:-150,
                }}>
                    <Image source={require("./Imagenes/nubes.png")}
                    style={{width:85, height:85, marginLeft:28}}></Image>
                    <Text style={{marginTop:-60, marginLeft:55, fontSize:25}}>32°</Text>
                    <Image style={{width:40, height:40, marginTop:20,marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                    <Text style={{marginLeft:16}}>80%</Text>
                    <Image source={require("./Imagenes/viento.png")}
                    style={{width:43, height:43,marginTop:-60, marginLeft:90}}></Image>
                    <Text style={{marginLeft:90}}>40km</Text>
                </View>
                <View style={{
                    borderWidth:4,
                    width:150,
                    height:150,
                    borderColor:"navy",
                    borderRadius:15,
                    marginLeft:740,
                    marginTop:-150,
                    marginRight:20,
                }}>
                    <Image source={require("./Imagenes/nubes.png")}
                    style={{width:85, height:85, marginLeft:28}}></Image>
                    <Text style={{marginTop:-60, marginLeft:55, fontSize:25}}>32°</Text>
                    <Image style={{width:40, height:40, marginTop:20,marginLeft:10}}
                    source={require("./Imagenes/plluvia.png")}></Image>
                    <Text style={{marginLeft:16}}>80%</Text>
                    <Image source={require("./Imagenes/viento.png")}
                    style={{width:43, height:43,marginTop:-60, marginLeft:90}}></Image>
                    <Text style={{marginLeft:90}}>40km</Text>
                </View>
            </View>
            </ScrollView>
      </View>
    )
  }
}