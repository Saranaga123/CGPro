import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cgpro.app',
  appName: 'CGPro',
  webDir: 'dist/cgpro',
  server: {
    androidScheme: 'https'
  }
};

export default config;
