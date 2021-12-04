import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SubjectScreen from '../screens/SubjectScreen';
import MathsTopicScreen from '../screens/MathsTopicScreen';
import PhysicsTopicScreen from '../screens/PhysicsTopicScreen';
import ChemistryTopicScreen from '../screens/ChemistryTopicScreen';
import BiologyTopicScreen from '../screens/BiologyTopicScreen';
import HistoryTopicScreen from '../screens/HistoryTopicScreen';
import CivicsTopicScreen from '../screens/CivicsTopicScreen';
import GeographyTopicScreen from '../screens/GeographyTopicScreen';
import EconomicsTopicScreen from '../screens/EconomicsTopicScreen';
import HindiTopicScreen from '../screens/HindiTopicScreen';
import EnglishTopicScreen from '../screens/EnglishTopicScreen';
import Motion from '../screens/Motion';
import LawsOfMotion from "../screens/LawsOfMotion";


const Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
    render(){
  return (
    <Stack.Navigator
      initialRouteName="Subjects"
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Subjects" component={SubjectScreen} />
        <Stack.Screen name="MathsTopics" component={MathsTopicScreen} />
        <Stack.Screen name="PhysicsTopics" component={PhysicsTopicScreen} />
        <Stack.Screen name="ChemistryTopics" component={ChemistryTopicScreen} />
        <Stack.Screen name="BiologyTopics" component={BiologyTopicScreen} />
        <Stack.Screen name="CivicsTopics" component={CivicsTopicScreen} />
        <Stack.Screen name="GeographyTopics" component={GeographyTopicScreen} />
        <Stack.Screen name="HistoryTopics" component={HistoryTopicScreen} />
        <Stack.Screen name="EconomicsTopics" component={EconomicsTopicScreen} />
        <Stack.Screen name="HindiTopics" component={HindiTopicScreen} />
        <Stack.Screen name="EnglishTopics" component={EnglishTopicScreen} />
        <Stack.Screen name="Motion" component={Motion} />
        <Stack.Screen name="LawsOfMotion" component={LawsOfMotion} />

    </Stack.Navigator>
  )
    }
}