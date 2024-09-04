
package CODE;

import java.util.Calendar;
import javax.swing.JOptionPane;
import javax.swing.JTextField;

/**
 *
 * @author Daniel Alberto
 */
public class Reloj extends Thread {
    
    private JTextField cajahora;
    private JTextField cajaminutos;
    private JTextField cajasegundos;

    public Reloj(JTextField cajahora, JTextField cajaminutos, JTextField cajasegundos) {
        this.cajahora = cajahora;
        this.cajaminutos = cajaminutos;
        this.cajasegundos = cajasegundos;
    }
    
    public void run(){
        
        while(true){
            
            try {
                Calendar c = Calendar.getInstance();
                int hora = c.get(Calendar.HOUR);
                int minutos = c.get(Calendar.MINUTE);
                int segundos = c.get(Calendar.SECOND);
                
                String horaS = Integer.toString(hora);
                String minutosS = Integer.toString(minutos);
                String segundosS = Integer.toString(segundos);
                
                this.cajahora.setText(horaS);
                this.cajaminutos.setText(minutosS);
                this.cajasegundos.setText(segundosS);
                Thread.sleep(1000);
                
            } catch (InterruptedException ex) {
                JOptionPane.showMessageDialog(null, ex);
                
            }
        }
        
    }
    
    
}
