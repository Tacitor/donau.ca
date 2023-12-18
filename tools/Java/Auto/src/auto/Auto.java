/*
 * Lukas Krampitz\u00D7
 * Jul 26, 2023
 * A small program that will take in the recomended dimensions from Ausi/RespImageLint 
 * and produces a JS array and copies to to the clipboard. This can then be pasted 
 * into a NodeJs script that generates the images.
 */
package auto;

import java.util.Arrays;
import java.awt.datatransfer.StringSelection;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;

/**
 *
 * @author Tacitor
 */
public class Auto {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Example for the main output
        // let dims = [[256, 192], [830, 623], [1150, 863], [1510, 1133], [1800, 1350],

        String input = "256×181, 870×615, 1200×848, 1530×1081, 1800×1272, 2048×1447";
        String src = "images/GeoEssayProduction.webp";
        // =-=-=-=-=-= REMEMBER TO REMOVE ++ORIGINAL++ FROM THE SRC=-=-=-=-=-=

        StringBuilder tempInput;

        // first pass is to convert the unicode char into an 'x'
        String newInput[] = input.split("×", 0);

        // rebuild with x's instead
        tempInput = new StringBuilder();
        for (int i = 0; i < newInput.length; i++) {
            if (i != 0) {
                tempInput.append('x');
            }
            tempInput.append(newInput[i]);
        }

        // overwrite the old input
        input = tempInput.toString();

        // split the input at the commas
        newInput = input.split(", ", 0);

        // setup the structor for the data in the most accessible way
        String[][] easyAccess = new String[newInput.length][2];

        // loop through the dims
        for (int i = 0; i < newInput.length; i++) {
            easyAccess[i] = newInput[i].split("x");
        }

        // Set up the final main output string
        tempInput = new StringBuilder();
        tempInput.append("let dims = ");
        tempInput.append(Arrays.deepToString(easyAccess));

        String mainOutput = tempInput.toString();
        // System.out.println(mainOutput);

        // Now do the secondary output
        tempInput = new StringBuilder();
        tempInput.append("srcset=\"");

        // carve up the src
        String[] srcArr = src.split("\\.");

        // put in the first entry
        tempInput.append(srcArr[0]);
        tempInput.append('-');
        tempInput.append(easyAccess[0][0]);
        tempInput.append('.');
        tempInput.append("webp");
        tempInput.append(" ");
        tempInput.append(easyAccess[0][0]);
        tempInput.append("w");

        // loop to add in the rest
        for (int i = 1; i < easyAccess.length; i++) {
            tempInput.append(",\n        ");
            tempInput.append(srcArr[0]);
            tempInput.append('-');
            tempInput.append(easyAccess[i][0]);
            tempInput.append('.');
            tempInput.append("webp");
            tempInput.append(" ");
            tempInput.append(easyAccess[i][0]);
            tempInput.append("w");

        }

        tempInput.append("\"\nsizes=\"50vw\"");

        String secondaryOutput = tempInput.toString();
        System.out.println(secondaryOutput);

        // copy the main output to the clipboard
        StringSelection stringSelection = new StringSelection(mainOutput);
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        clipboard.setContents(stringSelection, null);
    }

}
