//generates HTMl

function generateHTML(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet">
        <link rel = "stylesheet" href = "./stuff/style.css">
        <title>Auto generated webpage!</title>
    </head>
    <body >
    <h1>My Name is ${data.person}</h1>

    <h4>Currenty i'm ${data.place}</h4>
    <h4>My Favorite color is ${data.color}</h4>
    <h4>The last movie I saw was ${data.movie}</h4>
    <h4>My favorite time of the day is ${data.day}</h4>
    <h4>My github Url is <a href=${data.github}> ${data.github}</a></h4>
    <h4>My linkedIn Url is <a href=${data.linkedIn}>${data.linkedIn}</a></h4>

    </body>
    </html>`
}

module.exports =generateHTML;