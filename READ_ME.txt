This project is a simple API example for a dynamic loaded page, that uses nodejs and Heroku.

The API takes information from the sheet music site "https://musescore.com/", and presents the most popular sheets from the specified instrument and the specified page.   

It has dependencies of the following libraries in their respective versions, downloaded using nodejs: 
Axios: 0.24.0, 
Cheerio: 1.0.0-rc.10, 
Express: 4.17.2,
Nodemon: 2.0.15, 
Puppeteer: 13.0.1

The file index.js contains the main code used for the API.

The file testAPI.py contains an example made in python on how the API can be used.

The Heroku plataform is used to host the API, and it can be accessed by the following link: "https://sheet-music-finder.herokuapp.com".
By adding "/sheets/(instrument)/(page)" to the end of the link, a list on sheets of the selected instrument is returned, as well as their links of access.

Example: https://sheet-music-finder.herokuapp.com/sheets/violin/02


