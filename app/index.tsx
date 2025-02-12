import { Image, Text, View } from "react-native";
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <WebView
        source={{
          uri: `${Config.API_URL}`,
        }}
      />
      <Image
        source={require('../assets/images/BetalecticLogo.png')}
        style={{ width: 500, height: 100 }} // Adjust the width and height as needed
        resizeMode="contain" // Use contain to ensure the image is not cropped
      />
    </View>
  );
}
