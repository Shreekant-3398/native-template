import { Image, Text, View } from "react-native";

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
      <Image
        source={require('../assets/images/BetalecticLogo.png')}
        style={{ width: 500, height: 100 }} // Adjust the width and height as needed
        resizeMode="contain" // Use contain to ensure the image is not cropped
      />
    </View>
  );
}
