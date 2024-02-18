import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numerosOrdenados = new int[10];
        int[] numerosIngresados = new int[10];
        int i = 0, j = numerosOrdenados.length - 1;

        for (int k = 0; k < numerosIngresados.length; k++) {
            System.out.print("Ingresa el numero " + (k + 1) + ": ");
            int input = Integer.valueOf(sc.nextLine());
            numerosIngresados[k] = input;
            boolean resultado = esPrimo(input);
            System.out.println(resultado);
            if (resultado) {
                numerosOrdenados[i] = input;
                i++;
            } else {
                numerosOrdenados[j] = input;
                j--;
            }
        }

        imprimirArreglo(numerosIngresados);
        System.out.println();
        imprimirArreglo(numerosOrdenados);

        sc.close();
    }

    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void imprimirArreglo(int[] arreglo) {
        for (int i = 0; i < arreglo.length; i++) {
            System.out.println("pos[" + i + "] = " + arreglo[i]);
        }
    }
}
