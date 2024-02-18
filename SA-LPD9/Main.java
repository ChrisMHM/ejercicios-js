import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> diccionario = crearDiccionario();
        Scanner sc = new Scanner(System.in);

        while (true) {
            String input = sc.nextLine();
            if (input.equals("salir")) {
                break;
            }

            if (diccionario.containsKey(input)) {
                System.out.println(diccionario.get(input));
            } else {
                System.out.println("La palabra no se encuentra en el diccionario");
            }
        }

        sc.close();
    }

    public static HashMap<String, String> crearDiccionario() {
        HashMap<String, String> diccionario = new HashMap<>();
        diccionario.put("Hola", "Hello");
        diccionario.put("Adios", "Goodbye");
        diccionario.put("Amor", "Love");
        diccionario.put("Familia", "Family");
        diccionario.put("Amigo", "Amigo");
        diccionario.put("Comida", "Food");
        diccionario.put("Libro", "Book");
        diccionario.put("Musica", "Music");
        diccionario.put("Casa", "House");
        diccionario.put("Escuela", "School");
        diccionario.put("Trabajo", "Job");
        diccionario.put("Ciudad", "Ciudad");
        diccionario.put("Pais", "Country");
        diccionario.put("Mundo", "World");
        diccionario.put("Dia", "Day");
        diccionario.put("Noche", "Night");
        diccionario.put("Mañana", "Morning");
        diccionario.put("Tarde", "Afternoon");
        diccionario.put("Feliz", "Happy");
        diccionario.put("Triste", "Sad");

        return diccionario;
    }
}
