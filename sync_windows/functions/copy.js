/* copy folder recursive */
 function copyFolder(sourceFolder, destinationFolder) {  
    var sourceChildrenArr = sourceFolder.getFiles();  
    for (var i = 0; i < sourceChildrenArr.length; i++) {  
        var sourceChild = sourceChildrenArr[i];  
        var destinationChildStr = destinationFolder.fsName + "/" + sourceChild.name;  
        if (sourceChild instanceof File) {  
            copyFile(sourceChild, new File(destinationChildStr));  
        }  
        else {  
            copyFolder(sourceChild, new Folder(destinationChildStr));  
            // not in our case
        }  
    }  
}         
      
/* copy a file */
function copyFile(sourceFile, destinationFile) {  
    createFolder(destinationFile.parent);  
    sourceFile.copy(destinationFile);  
}        
      
 /* create a folder */     
function createFolder(folder) {  
    if (folder.parent !== null && !folder.parent.exists) {  
        createFolder(folder.parent);  
    }  
    folder.create();  
}  