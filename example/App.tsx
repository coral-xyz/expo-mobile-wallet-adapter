import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMobileWalletAdapter from 'expo-mobile-wallet-adapter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMobileWalletAdapter.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
