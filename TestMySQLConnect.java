import java.sql.Connection;
import java.sql.DriverManager;

public class TestMySQLConnect {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/myproject";
        String user = "java2023";
        String pass = "12345";
        try {
            Connection conn = DriverManager.getConnection(url, user, pass);
            System.out.println("連線成功！");
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
