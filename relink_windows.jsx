#targetengine "mySession"  

// Put this script in the subfolder named "Startup Scripts". 
// Path: C:\Program Files\Adobe\Adobe InDesign CC 2017\Scripts
app.addEventListener( "afterOpen", checkLinks);  
 
function checkLinks (myEvent) { 
    // afterOpen fires twice: once when the document opens
    // and once when the window loads. So don't run the second time,
    // to avoid causing an error.
    // See: http://forums.adobe.com/message/5410190
    if (myEvent.parent.constructor.name == "LayoutWindow") { 
        var windowsBaseDir = 'Z:/';
        var doc = app.activeDocument,  
            links = doc.allGraphics;  
        for(var i=links.length-1;i>=0;i--)  
        { 
            var path = File(links[i].itemLink.filePath);
            if(!path.exists)   {               
                
                var pathAsString = links[i].itemLink.filePath.toString().substring(20);      
                var newPath = File(windowsBaseDir + pathAsString);                 
             
                if(newPath.exists){  
                    links[i].itemLink.relink(newPath);
                }
            }
        }    
    }        
        
}



