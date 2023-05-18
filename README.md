# Zepher

Zepher is a mobile application built with React Native and Expo, designed to help users set, track, and achieve their goals.

## Features

1. **User Registration/Login**: Users can register and log in using Google Sign In.
2. **Goal Setup**: Users can set up their goals.
3. **Daily Goal Tracking**: Users can track their progress on a daily basis.
4. **Progress Upload**: Users can upload evidence of their progress.
5. **Dashboard**: Users can view their overall progress on the dashboard.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js and npm/yarn
* You have installed Expo CLI
* You have a Google account for Google Sign In
* You have a JSONBin account for data storage

### Installation

Install the project dependencies:

```
cd zepher
npm install # or yarn install if you're using yarn
```

### Configuration

Create a `.env` file in the root directory of your project. Add the following variables:

```
GOOGLE_SIGNIN_WEBCLIENT_ID=YOUR_GOOGLE_SIGNIN_WEBCLIENT_ID
JSONBIN_API_KEY=YOUR_JSONBIN_API_KEY
JSONBIN_BIN_ID=YOUR_JSONBIN_BIN_ID
```

Replace `YOUR_GOOGLE_SIGNIN_WEBCLIENT_ID`, `YOUR_JSONBIN_API_KEY`, and `YOUR_JSONBIN_BIN_ID` with your actual information.

### Running the App

Start the app:

```
expo start
```

Then, open the Expo app on your phone and scan the QR code. Alternatively, you can use an iOS or Android simulator/emulator on your computer.

## Contributing

If you want to contribute, please fork the repository and create a pull request.

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
