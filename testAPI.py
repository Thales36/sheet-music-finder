import requests
response = requests.get("https://sheet-music-finder.herokuapp.com/sheets/piano/2") 
print(response)
print(response.status_code)     # To print http response code  https://sheet-music-finder.herokuapp.com
print(response.text)     