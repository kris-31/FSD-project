package com.mscomm.userservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentDto {
	 private Long id;
	    private String image;
	    private String title;
	    private String description;
	    private String url;
}
