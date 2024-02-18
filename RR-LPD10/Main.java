import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> diccionario = crearDiccionario();
        HashMap<String, String> miniDiccionario = crearMiniDiccionario(diccionario);
        Scanner sc = new Scanner(System.in);
        int aciertos = 0;
        int incorrectas = 0;

        System.out.println("Palabras seleccionadas, ingresa su traduccion en ingles.");
        for (String palabraEsp : miniDiccionario.keySet()) {
            System.out.println(palabraEsp);
        }

        for (int i = 0; i < miniDiccionario.size(); i++) {
            System.out.print("Palabra en ingles: ");
            String input = sc.nextLine();

            if (miniDiccionario.containsValue(input)) {
                aciertos += 1;
            } else {
                incorrectas += 1;
            }
        }

        System.out.println("Tuviste " + aciertos + " aciertos.");
        System.out.println("Tuviste " + incorrectas + " incorrectos.");

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

    public static HashMap<String, String> crearMiniDiccionario(HashMap<String, String> diccionario) {
        HashMap<String, String> diccionarioAleatorio = new HashMap<>();
        ArrayList<String> llaves = new ArrayList<>();
        Set<String> set = null;
        Random random = new Random();
        set = diccionario.keySet();
        for (String llave : set) {
            llaves.add(llave);
        }
        for (int i = 0; i < 5; i++) {
            int aleatorio = random.nextInt(llaves.size());
            String palabraEsp = llaves.remove(aleatorio);
            String palabraIng = diccionario.remove(palabraEsp);
            diccionarioAleatorio.put(palabraEsp, palabraIng);
        }
        return diccionarioAleatorio;
    }
}
