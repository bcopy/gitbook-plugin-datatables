
# Gitbook Plugin for DataTables

This plugin integrates [DataTables](https://datatables.net/) in your ~~Gitbook~~ Honkit website, with support for accessible HTML tables.

With regards to support for dynamic data source, note that the plugin can only inject data available at *build time*, when ~~Gitbook~~ Honkit generates your static website.

## Installation

* Install the plugin
 ```
 npm install bcopy/gitbook-plugin-datatables
 ```

* Add the plugin to your `book.json`, for example :

```json
{
  "plugins": ["datatables"],
  (...)
  "pluginsConfig":{
    "datatables":{
            "config-url" : "/data/dtconfig.json",
            "default-config": {"pageLength": 50 }
    }
  }
}
```

## DataTables Configuration

In order to configure your datatables, you can use [inline HTML 5 data attributes](https://datatables.net/manual/options#HTML-5-data-attributes) for simple cases, or provide a JSON object associating a CSS selector with the datatable configuration you wish to see applied to matching DOM elements.
For it to work, your JSON file must be valid, as in the example below.

For instance, to configure an HTML table bearing the ID "accounting", you could use :

```json
{
   "#accounting":{
      "ajax":"/data/objects.txt",
      "columns":[
         { "data":"name" },
         { "data":"position" },
         { "data":"office" },
         { "data":"extn" },
         { "data":"start_date" },
         { "data":"salary" }
      ],
      "order":[ [ 2, "asc" ] ],
      "rowGroup":{ "dataSrc":"office" }
   }
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

Alternatively, you can install NodeJS locally.

### Gitflow support in Gradle

* Init gitflow

```
./gradlew initGitflow
```

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

