# Screen displayer

A simple project made using Electron

## Development

### Dependencies

In order to install all dependencies, run :

```sh
npm i
```

To install electron and its packaging util globally, use :

```sh
npm i electron -g
npm i electron-packager -g
```

### Launch unit tests

Tests will have to be done when dev will start.

In order to run unit tests, run :

```sh
npm run test
```

### Launch application

Launch the following command :

```sh
electron .
```

## Package

You can package automatically by using the command :

```sh
npm run package:mac
npm run package:windows
npm run package:linux
```

Or manually with :

```sh
# Mac
electron-packager . --overwrite --platform=darwin --arch=x64  --prune=true --out=release-builds
# Windows
electron-packager . --overwrite --platform=win32 --arch=ia32  --prune=true --out=release-builds
# Linux
electron-packager . --overwrite --platform=linux --arch=x64  --prune=true --out=release-builds
```

## Run

**Todo** 
