#!/bin/bash

# Get the environment from the command line argument
selected_env=$1

# Check if the environment is valid
if [[ "$selected_env" != "staging" && "$selected_env" != "production" ]]; then
  echo "Invalid environment: $selected_env"
  echo "Usage: $0 [staging|production]"
  exit 1
fi

# Set the APK and AAB source paths based on the environment
apk_source_path="./android/app/build/outputs/apk/release/app-release.apk"
aab_source_path="./android/app/build/outputs/bundle/release/app-release.aab"

# Generate a timestamp for the filename (format: YYYY-MM-DD_HH-MM-SS)
timestamp=$(date +"%Y-%m-%d_%H-%M-%S")

# Define the destination paths to the Desktop
desktop_path="$HOME/Desktop"
apk_dest="$desktop_path/${timestamp}-wiredup-${selected_env}.apk"
aab_dest="$desktop_path/${timestamp}-wiredup-${selected_env}.aab"

# Copy the APK file to the Desktop if it exists
if [ -f "$apk_source_path" ]; then
  echo "Copying APK to Desktop..."
  cp "$apk_source_path" "$apk_dest"
  echo "APK copied to Desktop as $apk_dest."
else
  echo "APK not found in the environment folder."
fi

# Copy the AAB file to the Desktop if it exists
if [ -f "$aab_source_path" ]; then
  echo "Copying AAB to Desktop..."
  cp "$aab_source_path" "$aab_dest"
  echo "AAB copied to Desktop as $aab_dest."
else
  echo "AAB not found in the environment folder."
fi