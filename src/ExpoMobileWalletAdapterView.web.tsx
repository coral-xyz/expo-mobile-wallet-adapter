import * as React from 'react';

import { ExpoMobileWalletAdapterViewProps } from './ExpoMobileWalletAdapter.types';

export default function ExpoMobileWalletAdapterView(props: ExpoMobileWalletAdapterViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
