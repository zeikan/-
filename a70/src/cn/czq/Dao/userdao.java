package cn.czq.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import cn.czq.DButils.DButils;

public class userdao {
////	public void jianche(String username, String password,String port) throws ClassNotFoundException {
//		//连接数据库
//		Connection conn = DButils.getConection();
//		String sql="SELECT username,password,port FROM hanhan WHERE username=? AND password=?";
//		String sql1="";
//		try {
//			PreparedStatement pre=(PreparedStatement) conn.prepareStatement(sql);
//			pre.setString(1, username);
//			pre.setString(2, password);
//			pre.setString(3,port);
//			ResultSet rs=pre.executeQuery();
//			while(rs.next()){				
//				 
//			}
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		 
//	}
//	
	//插入数据
	public void denlu(String username, String password,String port) {
		// TODO Auto-generated method stub
		PreparedStatement pre=null;
		Connection conn = (Connection) DButils.getConnection();
		String sql="insert into hanhan(username,password,port) values(?,?,?)";
		try {
			pre=conn.prepareStatement(sql);
			pre.setString(1, username);
			pre.setString(2, password);
			pre.setString(3, port);
			pre.executeUpdate();		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			DButils.closeQuietly(conn);
		}
	}
}
