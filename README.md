# Internet Connection Status

This repository contains code for a simple webpage that checks and displays the user's internet connection status using HTML, CSS, and JavaScript.

## Features

- Detects whether the user has an active internet connection.
- Displays a message popup indicating the internet connection status.
- Changes the popup color and icon based on the connection status.

## Usage

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/internet-connection-status.git
    ```

2. Open the `index.html` file in a web browser.

3. The webpage will automatically display a popup indicating whether the user is online or offline.

## Files

- `index.html`: HTML file defining the webpage structure.
- `script.js`: JavaScript file containing the logic to check and display the internet connection status.
- `style.css`: CSS file for styling the webpage and the popup.

## How it Works

The JavaScript code checks the user's internet connection status using the `window.navigator.onLine` property and displays a message popup accordingly. Event listeners are added to update the popup message when the connection status changes.

## Snapshots

![Screenshot of Internet Connection Status](images/screenshot1.png)

![Screenshot of Internet Connection Status](images/screenshot2.png)

## Customization

You can customize the appearance of the popup and the webpage by modifying the CSS styles in the `style.css` file.

## Credits

- Icons provided by [UniIcons](https://iconscout.com/unicons).
- Fonts provided by [Google Fonts](https://fonts.google.com/).
