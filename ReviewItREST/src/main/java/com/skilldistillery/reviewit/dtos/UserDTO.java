package com.skilldistillery.reviewit.dtos;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.skilldistillery.reviewit.dtos.validation.ValidPassword;
import com.skilldistillery.reviewit.entities.User;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {

	private int id;

	@NotBlank
	@Size(max=120, message="Username must be less than or equal to 120 characters.")
	private String username;

	@NotBlank
	@Size(max=350, message="Email must be less than or equal to 350 characters.")
	private String email;

	private String role;

	@ValidPassword
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private String password;

	public UserDTO() {
		super();
	}

	public UserDTO(User user) {
		this.id = user.getId();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.role = user.getRole();
	}

	public User intoUser() {
		User user = new User();
		user.setPassword(password);
		user.setUsername(username);
		user.setEmail(email);
		user.setRole(role);
		return user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", username=" + username + ", email=" + email + ", role=" + role + "]";
	}

}
