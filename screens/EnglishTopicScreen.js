import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class EnglishTopicScreen extends React.Component{

    render(){
        return(

            <View style = {styles.container}>

            <Text style = {styles.headingText}> English </Text>
            <View style = {styles.lowerContainer}>

            <TouchableOpacity style = {styles.topicContainer}>

<Text style ={styles.topicText}>Authors</Text>

</TouchableOpacity>

<TouchableOpacity style = {styles.topicContainer}>

<Text style ={styles.topicText}>Types of Tenses</Text>

</TouchableOpacity>

<TouchableOpacity style = {styles.topicContainer}>

<Text style ={styles.topicText}>Format of a Letter</Text>

</TouchableOpacity>

 


            </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({

    container:{

        flex: 1,
        backgroundColor: "white"

    },

    headingText:{

        color: "#15193c",
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold"

    },

    topicContainer:{

        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: "#15193c",
        width: "20%",
        height: 70

    },

    lowerContainer:{

        flex: 0.5,
        alignItems: "center"

    },

    topicText:{

        color: "white",
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    }

})
