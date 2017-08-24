/**
 *  This script generate a thumbnail and synchronize the files (indesign + thumbnail) with nutware
 */

#include config.js
#include functions/openInBrowser.js
#include functions/files.js
#include functions/copy.js


if (app.documents.length != 0) {  
    var myDoc = app.activeDocument;  
    myDoc.save();
        
    MakeJPEGfile();  
    Upload();
     
     /*  Tell nutware, that the editing is finished  */
     var url = baseUrl + "/editorial/indesign/stopbyindesign/page=" + getFileName(myDoc.name);
     openInBrowser(url);
}  

function MakeJPEGfile() {   
     for(var myCounter = 0; myCounter < myDoc.pages.length; myCounter++) {  
            
          app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.maximum;   // low medium high maximum  
          app.jpegExportPreferences.exportResolution = 300;  
          app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.exportRange;  
          app.jpegExportPreferences.pageString = myDoc.pages.item(myCounter).name;   
            
          var myFilePath = Folder(myDoc.filePath) + "/" + getFileName(myDoc.name)  + "_" + myCounter + ".jpg";  
          var myFile = new File(myFilePath);  
          myDoc.exportFile(ExportFormat.jpg, myFile, false);  
     }  
}  

/* override existing files with the same name */
function Upload() {         
        var myFolder = Folder(myDoc.filePath);       
        copyFolder (new Folder(myFolder),  new Folder(uploadsFolder));        
}   



  