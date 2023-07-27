/*
 * Lukas Krampitz\u00D7
 * Jul 26, 2023
 * A small program that will take in the recomended dimensions from Ausi/RespImageLint 
 * and produces a JS array and copies to to the clipboard. This can then be pasted 
 * into a NodeJs script that generates the images.
 */
package auto;

import java.util.Arrays;

/**
 *
 * @author Tacitor
 */
public class Auto {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //Example for the main output
        //let dims = [[256, 192], [830, 623], [1150, 863], [1510, 1133], [1800, 1350], [2048, 1536]]
        
        String input = "256\u00D7192, 1030\u00D7773, 1440\u00D71080, 1750\u00D71313, 2016\u00D71512";
        StringBuilder tempInput;

        // first pass is to convert the unicode char into an 'x'
        String newInput[] = input.split("\u00D7", 0);

        // rebuild with x's instead
        tempInput = new StringBuilder();
        for (int i = 0; i < newInput.length; i++) {
            if (i != 0) {
                tempInput.append('x');
            }
            tempInput.append(newInput[i]);
        }

        //overwrite the old input
        input = tempInput.toString();
        
        //split the input at the commas
        newInput = input.split(", ", 0);
        
        //setup the structor for the data in the most accessible way
        String[][] easyAccess = new String[newInput.length][2];
        
        //loop through the dims
        for (int i = 0; i < newInput.length; i++) {
            easyAccess[i] = newInput[i].split("x");
        }
        
        //Set up the final main output string
        tempInput = new StringBuilder();
        tempInput.append("let dims = ");
        tempInput.append(Arrays.deepToString(easyAccess));
        
        System.out.println(tempInput.toString());
    }

}
