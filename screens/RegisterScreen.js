import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Colors from '../constants/colors'; // ← THÊM DÒNG NÀY

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Banner */}
      <Image
        source={require('../assets/Ellipse1.png')}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Nút back nằm đè lên banner */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>Tạo tài khoản</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Họ tên"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#888"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888"
          />
        </View>

        <Text style={styles.policy}>
          Để đăng ký tài khoản, bạn đồng ý{' '}
          <Text style={styles.link}>Terms & Conditions</Text> và{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
             <View style={styles.line} />
              <Text style={styles.or}>Hoặc</Text>
              <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/logo_google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/logo_fb.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomText}>
            Bạn đã có tài khoản? <Text style={styles.link}>Đăng nhập</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    top: 0,
    left: 0,

  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputWrapper: {
    marginHorizontal: 0,
    marginBottom: 12,
    paddingHorizontal: 0,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
    marginHorizontal: 24,
    borderRadius: 8,
  },
  policy: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 24,
  },
  link: {
    color: Colors.primary,
    fontWeight: '500',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#999',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 16,
  },
  socialButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
  },
  orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 16,
  marginHorizontal: 24,
},
line: {
  flex: 1,
  height: 1,
  backgroundColor: Colors.primary, // Sử dụng màu từ constants
},
or: {
  marginHorizontal: 8,
  color: '#000',
  fontSize: 14,
},

  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
});
