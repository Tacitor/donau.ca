/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package githubactionfindandreplace;

import java.io.File;
import java.util.ArrayList;

/**
 *
 * @author Lukas
 */
public class GitHubActionFindAndReplace {

    public static ArrayList<File> filesToSearch = new ArrayList<>();

    public static String fileTypeForUseInMethod;

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        String rootDirString = "C:\\Users\\Lukas\\OneDrive\\OneDrive - University of Guelph\\Documents\\ICS\\donau.ca\\www";
        String findString = "This is a contrived test String used to test out the new GitHub Actions I am setting up.";
        String replaceString = "hey cool it worked!";
        String[] fileExtensions = new String[]{"html", "txt"};

        File rootDirFile = new File(rootDirString);

        findAllFiles(fileExtensions, rootDirFile);

        System.out.println("Files to search:");
        for (File file : filesToSearch) {

            System.out.println(file.getName());
        }
    }

    public static void findAllFiles(String[] validExtensions, File givenFile) {

        //base case
        if (!givenFile.isDirectory()) { //if not a folder

            //grab file type
            fileTypeForUseInMethod = givenFile.getName().split("\\.", 0)[1];
            //check if type is good
            for (String str : validExtensions) {
                
                if (fileTypeForUseInMethod.equals(str)) {
                    //add it to the list
                    filesToSearch.add(givenFile);
                }
            }

        } else { //grab all the sub files in the directorie
            File[] currentSubFiles = givenFile.listFiles();

            for (File file : currentSubFiles) {
                findAllFiles(validExtensions, file);
            }
        }

    }

}
