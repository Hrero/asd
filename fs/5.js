/*
*
 */

var projectData = {
    'name':'miaov',
    'fileData':[
        {
            'name':'css',
            'type':'dir'
        },
        {
            'name':'js',
            'type':'dir'
        },
        {
            'name':'images',
            'type':'dir'
        },
        {
            'name':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n<body>\n\t\t<h1></h1>\n\t</body>></body></html>'
        }
    ]
}

var fs = require('fs');

if( projectData.name ){
    fs.mkdirSync(projectData.name);

    var fileData = projectData.fileData;

    if( fileData && fileData.forEach ){
        fileData.forEach(function (t) {
            t.path = projectData.name + '/' + t.name;
            t.content = t.content || '';
            switch (t.type){
                case 'dir':
                    fs.mkdirSync(t.path)
                    break;
                case 'file':
                    fs.writeFileSync(t.path,t.content)
                    break;
                default:
                    break;
            }

        })
    }
}


