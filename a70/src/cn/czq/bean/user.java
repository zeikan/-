package cn.czq.bean;

public class user {
      private String username;
      private String password;
      private String port;
	@Override
	public String toString() {
		return "user [username=" + username + ", password=" + password + ", port=" + port + "]";
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPort() {
		return port;
	}
	public void setPort(String port) {
		this.port = port;
	}
}
