import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMobileWalletAdapterViewProps } from './ExpoMobileWalletAdapter.types';

const NativeView: React.ComponentType<ExpoMobileWalletAdapterViewProps> =
  requireNativeViewManager('ExpoMobileWalletAdapter');

export default function ExpoMobileWalletAdapterView(props: ExpoMobileWalletAdapterViewProps) {
  return <NativeView {...props} />;
}
