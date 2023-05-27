package com.mscomm.userservice.dto;

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

	private String slug;

	private String type;

	private double price;

	private int size;

	private String crop;

	private boolean organic;

	private boolean inorganic;

	private boolean featured;

	private String description;

	private String precautions;

	private String imageUrl;
}
