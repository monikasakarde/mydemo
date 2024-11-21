package nov21;


class Bank{
private float balance;
public Bank() {
balance=1000;
}

synchronized void deposit(float damount) {
balance = balance+damount;
System.out.println("After deposit balance amount="+balance);
notify();
}
synchronized void withdraw(float wamount) throws InterruptedException {
if(wamount>balance) 
System.out.println("Insufficient balance you cant withdraw");
wait();

balance = balance - wamount;
System.out.println("After withdraw your balance ="+balance);

}
}


public class MainAppThreadCommunication {


public static void main(String[] args) {
Bank bank = new Bank();
Thread t1=new Thread() {
public void run() {
try {
bank.withdraw(5000);
} catch (InterruptedException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}
}

};
t1.start();

Thread t2=new Thread() {
public void run() {
bank.deposit(5000);
}

};
t2.start();


}


}
