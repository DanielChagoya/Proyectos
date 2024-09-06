
package carreradeautos;

import javax.swing.JLabel;
import javax.swing.JOptionPane;

/**
 *
 * @author Daniel Alberto
 */
public class carrera extends Thread {
    
    private JLabel eti;
    private ventana p; 
    
    public carrera(JLabel eti, ventana p){
        
        this.eti=eti;
        this.p=p;
        
    }
    
    public void run(){
        
        int c1 = 0, c2 =0 ;
        
        while(true){
            try {
                sleep((int)(Math.random()*1000));
                c1 = p.getlbcarro1().getLocation().x;
                c2 = p.getlbcarro2().getLocation().x;
                
                if(c1<p.getlbMeta().getLocation().x-10 && c2<p.getlbMeta().getLocation().x-10){
                    eti.setLocation(eti.getLocation().x+10, eti.getLocation().y);
                    p.repaint();
                }else{
                    break;
                }
                
                
            } catch (InterruptedException e) {
            }
            
            if(eti.getLocation().x>=p.getlbMeta().getLocation().x-10){
              if(c1>c2){
                  JOptionPane.showMessageDialog(null, "Gano el carro 1");
              }else if(c2>c1){
                  JOptionPane.showMessageDialog(null, "Gano el carro 2");
              }else{
                  JOptionPane.showMessageDialog(null, "Empate");
              }    
            }
            
        }
         
    }
}
