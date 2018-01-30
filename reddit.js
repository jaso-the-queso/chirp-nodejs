const fs = require('fs');
const request = require('request-promise');
const path = require('path');

let reddit = [];
let options = {
    encoding: null,
    json: true,
    uri: 'https://reddit.com/r/popular.json'
}

let dataPath = path.join(__dirname, './popular-articles.json');

request(options)
    .then(data => {
        data.data.children.forEach(item => {
            
            reddit.push(item.data.author + '\n' + item.data.url + '\n' + item.data.title);
        })
        reddit.forEach(item => {
            fs.appendFileSync(dataPath, item)
        })
    })