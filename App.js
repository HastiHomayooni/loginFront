import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';

import './styles'
export default function App() {
  return (
    <View className='bg-red-200 w-screen h-screen justify-center items-center'>
      <view className='bg-white w-1/3 h-4/5 rounded flex items-start justify-center flex-col space-y-8 space-x-12'>
        <view className='bg-neutral-200 w-4/5 h-1/2 rounded ml-12 mt-4'>
        </view>
        <view className='bg-white w-4/5 h-1/2 rounded flex items-start justify-center flex-col space-y-8 space-x-12'>
          <input className='bg-neutral-200 w-4/5 h-8 rounded ml-12 border hover:border-red-200'></input>
          <input className='bg-neutral-200 w-4/5 h-8 rounded border hover:border-red-200'></input>
          <button className='bg-red-400 w-2/5 h-8 rounded ml-32 border hover:border-red-500'>log in</button>
        </view>
      
      </view>
      {/* <Text className='text-3xl text-white'>Welcome to ReactNative & Nativewind</Text> */}
      {/* <ActivityIndicator className='mt-5' size={'large'}></ActivityIndicator> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// $env:NODE_OPTIONS = "--openssl-legacy-provider"
