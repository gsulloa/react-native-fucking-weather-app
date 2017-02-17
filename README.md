# Fucking Weather App
Curso de [CloneableIO](https://cloneable.io/), para aprender los conceptos básicos de [ReactNative](https://facebook.github.io/react-native/) creando una aplicación simple del clima.

# Recordatorios
- Crear aplicación de ReactNative
```sh
$ react-native init project-name
```
- Instalar aplicación en dispositivo
```sh
$ react-native run-android
$ react-native run-ios
```
- Se debe tener iniciado un servidor con:
```sh
$ react-native start
```
# Generar APK
Detalle en https://facebook.github.io/react-native/docs/signed-apk-android.html.
Para instalar APK en dispositivo:
```
$ adb install -r ./app/build/outputs/apk/app-release-unsigned.apk
```