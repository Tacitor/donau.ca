/*
 * Lukas Krampitz
 * Aug 16, 2023
 * 
 */
package javacommandlineargstool;

/**
 *
 * @author Tacitor
 */
public class JavaCommandLineArgsTool {

    // The command needed to run on linux to get the desired command line args
    //java -jar JavaCommandLineArgsTool.jar "~/actions-runner/donau.ca_work/donau.ca/donau.ca/www/" ".html\" data-remove-file-extension=\"true\"" "\" data-remove-file-extension=\"true\""
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("Error: You must run the program from the command line and use include the 3 required command line arguments.");
        } else {
            for (int i = 0; i < args.length; i++) {
                System.out.println("Arg[" + i + "]: " + args[i]);
            }
        }
    }

}
