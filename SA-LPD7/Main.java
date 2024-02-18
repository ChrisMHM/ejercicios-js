import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Día de la semana: ");
        String dia = sc.nextLine().toLowerCase();
        System.out.print("Hora: ");
        int hora = Integer.valueOf(sc.nextLine());
        System.out.print("Minutos: ");
        int minutos = Integer.valueOf(sc.nextLine());
        sc.close();

        int minutosHastaFinDeSemana = calcularMinutos(dia, hora, minutos);

        if (minutosHastaFinDeSemana != -1) {
            System.out.println("Faltan " + minutosHastaFinDeSemana + " minutos para el fin de semana");
        } else {
            System.out.println("Los datos introducidos no son válidos. Por favor, vuelve a intentarlo.");
        }
    }

    public static int calcularMinutos(String dia, int hora, int minutos) {
        int minutosRestantes = 0;
        int diasAMinutos = 0;
        ArrayList<String> semana = new ArrayList<>();
        semana.add("viernes");
        semana.add("jueves");
        semana.add("miercoles");
        semana.add("martes");
        semana.add("lunes");

        if (semana.contains(dia)) {
            int index = semana.indexOf(dia);
            diasAMinutos = index * 24 * 60;
        } else {
            return -1;
        }

        minutosRestantes = diasAMinutos + ((15 - hora) * 60 - minutos);

        return minutosRestantes;
    }
}
