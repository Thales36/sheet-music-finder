This project is a simple API example for a dynamic loaded page, that uses node.js and Heroku. For this, the Puppeteer package is used to create a browser and load the page, than the Cheerio package is used to extract the html information and the result is returned as a json file. 

The API takes information from the sheet music site "https://musescore.com/", and presents the most popular sheets from the specified instrument.  

It has dependencies of the following libraries, downloaded using node.js:  
* Cheerio: 1.0.0-rc.10, 
* Express: 4.17.2,
* Nodemon: 2.0.15, 
* Puppeteer: 13.0.1

The file index.js contains the main code used for the API.

The file testAPI.py contains an example made in python on how the API can be called.

The Heroku platform is used to host the API. To host your own API, create an account at [Cloud Application Platform | Heroku](https://www.heroku.com/), then run the following three lines to upload your own local repository to the Heroku platform:

$ git add .
$ git commit -am "(your comment)"
$ git push heroku master

This API uses the following base: https://sheet-music-finder.herokuapp.com".  Than, by adding "/sheets/(instrument)/(page)" to the end of the link, a list  with the first “page” pages of sheets of the selected instrument is returned. The returned .json has the following keys: 
json 
{“title_text_of_element”: (Song name), “url”: (Song url), “source”: (site where song came”}. 

Feel free to increment the API functionalities or add more sources. 

Example of a valid API call: https://sheet-music-finder.herokuapp.com/sheets/violin/2