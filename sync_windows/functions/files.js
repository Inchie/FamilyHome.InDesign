﻿/**
 *  This script returns the name of the file
 */

function getFileName(pathAndFileName) {  
     var fileName = "";  
     var lastIndexOfPathAndFileName = pathAndFileName.lastIndexOf(".");  
     if (lastIndexOfPathAndFileName == -1) {  
          fileName = pathAndFileName;  
     } else {  
          fileName = pathAndFileName.substr(0, lastIndexOfPathAndFileName);  
     }  
     return fileName;      
}  