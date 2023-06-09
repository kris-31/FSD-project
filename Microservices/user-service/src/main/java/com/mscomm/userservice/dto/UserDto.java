package com.mscomm.userservice.dto;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

	  private Long id;
	  
	    private String name;
	    private String password;
	    
	    private String email;
	    private String comId;
}
