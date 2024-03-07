import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'myexpoapp',
  slug: 'myexpoapp',
  scheme: 'myexpoapp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: 'daa337a8-a1aa-493f-aa11-4e96ba11b3c6',
    },
  },
  owner: 'sunmer',
  plugins: ['expo-router'],
};
export default config;
