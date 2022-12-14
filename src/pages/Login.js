/** @format */

import React from 'react';
import { Image } from 'react-native';
import { Layout, Input, Text, Button } from '@ui-kitten/components';
import tw from 'twrnc';
import authLoginApi from '../api/index';
import axios from 'axios';
const Login = () => {
  const [value, setValue] = React.useState({
    username: '',
    password: '',
  });
  const handleForm = () => {
    if (!value.username) {
      alert('Username required');
    }
    if (!value.password) {
      alert('Password required');
    }
    axios
      .post('http://10.0.2.2:5000/api/auth/login', {
        value,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={tw`text-2xl font-bold`}>LOGIN</Text>
      <Layout style={tw`w-[300px] h-[200px] p-4`}>
        <Image
          style={tw`w-full h-full`}
          source={require('../assets/login.png')}
        />
      </Layout>
      <Layout style={tw`w-[300px]`}>
        <Text style={tw``}>UserName</Text>
        <Input
          placeholder='Place your Text'
          value={value}
          onChangeText={(nextValue) =>
            setValue({ ...value, username: nextValue })
          }
        />
      </Layout>

      <Layout style={tw`w-[300px] pt-10`}>
        <Text style={tw``}>Password</Text>
        <Input
          placeholder='Place your Text'
          secureTextEntry={true}
          value={value}
          onChangeText={(nextValue) =>
            setValue({ ...value, password: nextValue })
          }
        />
      </Layout>
      <Layout style={tw`pt-10 w-[300px]`}>
        <Button onPress={handleForm}>Login</Button>
      </Layout>
    </Layout>
  );
};

export default Login;
