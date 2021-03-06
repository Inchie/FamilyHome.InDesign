﻿function openInBrowser(/*str*/ url)
//----------------------------
{
    var isMac = (File.fs == "Macintosh"),
        fName = 'tmp' + (+new Date()) +
            (isMac ? '.webloc' : '.url'),
        fCode = isMac ?
        ('<?xml version="1.0" encoding="UTF-8"?>\r'+
        '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" '+
        '"http://www.apple.com/DTDs/PropertyList-1.0.dtd">\r'+
        '<plist version="1.0">\r'+
        '<dict>\r'+
            '\t<key>URL</key>\r'+
            '\t<string>%url%</string>\r'+
        '</dict>\r'+
        '</plist>') :
        '[InternetShortcut]\rURL=%url%\r';
 
    var f = new File(Folder.temp.absoluteURI + '/' + fName); 
    if(! f.open('w') ) return false;
 
    f.write(fCode.replace('%url%',url));
    f.close();
    f.execute();
    $.sleep(500);   // 500 ms timer
    f.remove();
    return true;
}
 
// Test:
//openInBrowser("http://www.nutware.de/");