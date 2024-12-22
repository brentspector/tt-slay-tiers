#! /usr/bin/env bash
root_dir="$(dirname $(dirname $(realpath $0)) )"
android_dir=$root_dir/android/app
#https://stackoverflow.com/questions/50950523/how-to-increment-a-numerical-value-in-properties-file
awk -F"=" 'BEGIN{OFS=FS} $1=="AI_VERSION_CODE"{$2=$2+1}1' $android_dir/version.properties > $android_dir/version.properties.tmp && mv $android_dir/version.properties.tmp $android_dir/version.properties
git add $android_dir/version.properties