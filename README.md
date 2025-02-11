
# 🚀 Prerequisites

![Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Linux%20%7C%20Windows-blue)
![Android](https://img.shields.io/badge/Android-SDK%20Setup-green)
![Homebrew](https://img.shields.io/badge/Homebrew-Installed-orange)

---

## 🍏 MacOS Setup

### ✅ Install Homebrew
Ensure you have **Homebrew** installed on your macOS. If not, install it by running:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
````

### ✅ Install Watchman

Ensure you have **Watchman** installed on your macOS. If not, install it by running:

```sh
brew install watchman
```

### ✅ Install OpenJDK (Azul Zulu) - For Android

Ensure you have **Azul Zulu JDK** installed on your macOS. If not, install it by running:

```sh
brew install --cask zulu@17
```

After installation, add the `JAVA_HOME` environment variable in your shell profile:

```sh
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

---

## 🤖 Android Setup

### 🔹 Install Android Studio

Download and install [Android Studio](https://developer.android.com/studio).

📌 **Steps:**

1. Open **Android Studio**, click **More Actions** → **SDK Manager**.
2. Navigate to **Settings** → **Languages & Frameworks** → **Android SDK**.
3. In the **SDK Platforms** tab, select the latest Android version (API level).
4. Go to the **SDK Tools** tab and install:
   - 📦 **Android SDK Build-Tools**
   - 📦 **Android Emulator**
5. Copy the **Android SDK Location**.
6. Click **Apply** and **OK** to install.

### 🔹 Set Up Environment Variables (MacOS/Linux)

Add the following lines to your **\~/.zshrc** or **\~/.bash\_profile**:

```sh
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### 🔹 Apply Changes

Reload the path environment variables:

```sh
source ~/.zshrc  # or source ~/.bash_profile
```

---

## 🚀 Initialize the Expo App

```sh
npx create-expo-app@latest project_name
cd project_name
npm run reset-project  # It removes the boilerplate code
npx expo start
```

---

## 📱 Building the iOS App

Follow these steps to build the iOS app:

```sh
npx expo prebuild --platform ios
cd ios && pod install
cd ..
open ios/project_name.xcworkspace  # Open in Xcode
```

### 🔹 Build & Archive

1. Build the app.
2. Click on **"Archive"** from the **Product** tab.
3. Once the build is successful, distribute the app to **TestFlight**.

---


---

🚀 **You're now ready to build and deploy!** Let me know if you need further refinements. 😊

