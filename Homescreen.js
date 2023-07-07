import React from 'react'
import {Image,TouchableOpacity, Text, View } from 'react-native';


const Homescreen = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-around bg-white">
  
    <View className="flex-1 items-center justify-start bg-white gap-2">
      <Image className=' w-80 h-[300px] my-20 object-scale-down' source = {require('../assets/loooogooo.png')} /> 
    <Image source = {require('../assets/frontimage2.jpg')} />
    <Text className='text-2xl text-gray-400 font-extrabold'>THE GOSPEL FAITH MISSION INT'</Text>
    <Text className='font-bold text-lg text-gray-400'>Sunday School Manual</Text>
    </View>
    <TouchableOpacity 
    className='h-12 w-80 bg-[#274c77] justify-center mb-10 align-middle rounded-md'
    onPress={() => navigation.navigate('SecondPage')}>
    <Text className='text-center text-lg font-bold text-white'>Get Started</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Homescreen
  