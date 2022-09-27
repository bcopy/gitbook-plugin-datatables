
# Gitbook Plugin for DataTables

This plugin integrates [DataTables](https://datatables.net/) in your ~~Gitbook~~ Honkit website, with support for accessible HTML tables.

With regards to support for dynamic data source, note that the plugin can only inject data available at *build time*, when ~~Gitbook~~ Honkit generates your static website.

## Installation

* Install the plugin
 ```
 npm install bcopy/gitbook-plugin-datatables
 ```

* Add the plugin to your `book.json` :

```json
{
  "plugins": ["datatables"]
}
```

## Features

* Please refer to [https://datatables.net/](https://datatables.net/) for its full and exhaustive list of features.


## How to develop the plugin

### Development environment installation

* Prerequisites
  * You will need a JDK v11+

* You can use the provided Gradle wrapper to install node locally (Alternatively you must have node v14+ installed)
  * ```./gradlew installNode``` on Linux / Mac OSX
  * or ```gradlew.bat installNode``` on Windows
* You can then setup your path and install the required dependencies :
  * If using the gradle wrapper : ```source ./setup-path.sh```
  * ```npm install```
* Finally you can run the book in preview mode
  * ```npm run serve```


### Gitflow support in Gradle

* Develop a new feature with

```
./gradlew featureStart
./gradlew featureFinish
````

* Issue a new release with

```
./gradlew releaseStart
./gradlew releaseFinish
````

Please refer to https://github.com/hyasinfosec/gitflow-gradle-plugin


Alternatively, you can install NodeJS locally.