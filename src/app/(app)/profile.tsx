import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Settings as SettingsIcon } from '@/components/ui/icons';

export default function ProfileScreen() {
  const navigation = useNavigation();

  // DUMMY DATA
  const user = {
    firstName: 'Jacob',
    lastName: 'Wilkins',
    email: 'jacob@example.com',
    avatar: '',
  };

  // Dynamically generate avatar URL using the user's name
  user.avatar = `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=4F8EF7&color=fff&size=256`;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => (navigation as any).navigate('settings')}
        style={styles.settings}
      >
        <SettingsIcon color={'#FFFFFF'} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={{ color: 'white' }}>47 Read</Text>
        <Text style={{ color: 'white' }}>13 Waiting</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 48,
  },
  settings: {
    alignItems: 'flex-end',
    marginLeft: 300,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#4F8EF7',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#b3b3b3',
  },
  section: {
    width: '80%',
    marginTop: 24,
  },
  button: {
    backgroundColor: '#4F8EF7',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4F8EF7',
  },
  logoutText: {
    color: '#4F8EF7',
  },
});
