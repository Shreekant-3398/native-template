import { Image, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        source={{
          uri: `${process.env.EXPO_PUBLIC_API_URL}`,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
