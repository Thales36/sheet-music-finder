const PORT = process.env.PORT || 80
const express = require ('express')
const axios = require ('axios')
const cheerio = require ('cheerio')
const app = express()
const puppeteer = require("puppeteer");

const sheet_music_sites = [
    {
        name: 'musescore',
        address: 'https://musescore.com/sheetmusic/',
        base:''
    }
]

app.get('/', (req,res) => {
    res.json('Welcome to my API')
})


app.get('/sheets/:instrument/:pages', async (req,res) => {

    var all_sheet_musics = []

    var instrument = req.params.instrument
    var number_of_pages = req.params.pages

    for (const sheet_music_site of sheet_music_sites) { // sheet_music_sites.forEach(async sheet_music_site => 

            
 
        let browser = await puppeteer.launch( {headless: true,  args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
          ],} );
          let sheet_music_web_page = await browser.newPage();

        for (let page = 0; page <number_of_pages; page++) {

            let url_to_load = sheet_music_site.address+instrument+ "?page=" + (page+1).toString();
            await sheet_music_web_page.goto(url_to_load);
            console.log(url_to_load)

            let html_page_loaded = await sheet_music_web_page.content();

            let $ = cheerio.load(html_page_loaded);

            let list_of_sheet_music_elements = $("a._1O2nv._39f0R._3Afie._1EgpX._3djoY._2wqMT")  
            
            list_of_sheet_music_elements.each(function () {
                let sheet_music_element = this 
                let title_html_of_element = $("h2._33X7-.jgMZb.GgVyz.vAZUD", sheet_music_element) //
                let title_text_of_element = $(title_html_of_element).text()
                let url = $(sheet_music_element).attr('href')

                all_sheet_musics.push({
                    title_text_of_element,
                    url: sheet_music_site.base + url,
                    source: sheet_music_site.name
                })
            })
        }
        console.log('Done')
        await browser.close();


}

res.json(all_sheet_musics)

    
})

app.listen(PORT, () => console.log('server running on PORT ' + PORT.toString()))


