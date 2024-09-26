import * as SecureStore from 'expo-secure-store';

const saveToken = async token => {
  await SecureStore.setItemAsync('authToken', token);
};

const getToken = async () => {
  return await SecureStore.getItemAsync('authToken');
};

const logout = async () => {
  await SecureStore.deleteItemAsync('authToken');
};

export {saveToken, getToken, logout};
