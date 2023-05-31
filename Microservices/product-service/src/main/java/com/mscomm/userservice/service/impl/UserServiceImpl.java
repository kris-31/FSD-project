package com.mscomm.userservice.service.impl;

import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.Product;
import com.mscomm.userservice.service.*;
import com.mscomm.userservice.repository.*;
import org.springframework.web.client.RestTemplate;
import com.mscomm.userservice.dto.*;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class UserServiceImpl implements ProductService {

	private ProductRepository userRepository;
	private RestTemplate restTemplate;

	@Override
	public Product saveUser(Product user) {
		return userRepository.save(user);
	}

	@Override
	public ResponseDto getUser(Long userId) {

		ResponseDto responseDto = new ResponseDto();
		Product user = userRepository.findById(userId).get();
		UserDto userDto = mapToUser(user);

		ResponseEntity<DepartmentDto> responseEntity = restTemplate
				.getForEntity("http://localhost:8082/api/blogs/" + user.getBlogid(), DepartmentDto.class);
///////////for docker change localhost to container name
		DepartmentDto departmentDto = responseEntity.getBody();

		System.out.println(responseEntity.getStatusCode());

		responseDto.setUser(userDto);
		responseDto.setDepartment(departmentDto);

		return responseDto;
	}

	@Override
	public List<Product> getallProducts() {
		List<Product> reports = new ArrayList<>();
		userRepository.findAll().forEach(reports::add);
		return reports;
	}

	private UserDto mapToUser(Product user) {
		UserDto userDto = new UserDto();
		userDto.setId(user.getId());
		userDto.setName(user.getName());
		userDto.setSlug(user.getSlug());
		userDto.setType(user.getType());
		userDto.setPrice(user.getPrice());
		userDto.setSize(user.getSize());
		userDto.setCrop(user.getCrop());
		userDto.setOrganic(user.isOrganic());
		userDto.setInorganic(user.isInorganic());
		userDto.setFeatured(user.isFeatured());
		userDto.setDescription(user.getDescription());
		userDto.setPrecautions(user.getPrecautions());
		userDto.setImageUrl(user.getImageUrl());
		return userDto;
	}

	@Override
	public Product findById(long id) {
		return userRepository.findById(id).get();
	}

}
