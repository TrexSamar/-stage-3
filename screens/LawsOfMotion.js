import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
    {
      url:
        'https://raw.githubusercontent.com/TrexSamar/assets/main/assets/Force%20and%20Laws%20of%20Motion.png',
    },
     
  ];

export default class LawsOfMotion extends React.Component{

    
        
      render(){
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <ImageViewer imageUrls={images} renderIndicator={() => null} />
            </View>
          </SafeAreaView>
        );
      };
    }
      
      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#F5FCFF',
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'contain'
        },
      });
    
      
       
    
      