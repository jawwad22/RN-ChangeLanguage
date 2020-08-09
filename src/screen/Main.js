import React, { useEffect } from "react";
import { Image, View, Text,TouchableOpacity } from "react-native";
import { Language } from "../helpers";
import { connect } from "react-redux";
import { DataStore } from "../redux";
import actions from "../redux/actions";

const Main = () => {
    return (
        <>
            <View >
                <Text>Hellow</Text>
                <Text style={{textAlign:"center",fontSize:30,padding:10}}>{Language.main.messageOne}</Text>
                <Text style={{ textAlign: "center", fontSize: 30, padding: 10 }}>{Language.main.messageTwo}</Text>
                <TouchableOpacity style={{backgroundColor:"yellow",fontSize:10,padding:5}} onPress={()=>{DataStore.dispatch(actions.setLanguage(0))}}>
                    <Text>Press me to Change to English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop:10,backgroundColor: "yellow", fontSize: 10, padding: 5 }} onPress={() => { DataStore.dispatch(actions.setLanguage(1)) }}>

                    <Text>Press me to Change to France</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const mapStateToProps = ({ general }) => {
    return {
        language: general.language,
    }
}


export default connect(mapStateToProps)(Main);