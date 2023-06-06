package com.mscomm.productservice.service.impl;

import org.springframework.web.client.RestTemplate;

import com.mscomm.productservice.dto.*;
import com.mscomm.productservice.entity.Product;
import com.mscomm.productservice.repository.*;
import com.mscomm.productservice.service.*;

import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class ProductServiceImpl implements ProductService {

	private ProductRepository productRepository;
	private RestTemplate restTemplate;

	@Override
	public Product saveUser(Product product) {
		return productRepository.save(product);
	}

	@Override
	public ResponseDto getProduct(Long productId) {

		ResponseDto responseDto = new ResponseDto();
		Product product = productRepository.findById(productId).get();
		ProductDto productDto = mapToProduct(product);

		ResponseEntity<BlogDto> responseEntity = restTemplate
				.getForEntity("http://localhost:8082/api/blogs/" + product.getBlogid(), BlogDto.class);
///////////for docker change localhost to container name
		BlogDto blogDto = responseEntity.getBody();

		System.out.println(responseEntity.getStatusCode());

		responseDto.setProduct(productDto);
		responseDto.setBlog(blogDto);

		return responseDto;
	}

	@Override
	public List<Product> getallProducts() {
		List<Product> reports = new ArrayList<>();
		productRepository.findAll().forEach(reports::add);
		return reports;
	}

	private ProductDto mapToProduct(Product product) {
		ProductDto productDto = new ProductDto();
		productDto.setId(product.getId());
		productDto.setName(product.getName());
		productDto.setSlug(product.getSlug());
		productDto.setType(product.getType());
		productDto.setPrice(product.getPrice());
		productDto.setSize(product.getSize());
		productDto.setCrop(product.getCrop());
		productDto.setOrganic(product.isOrganic());
		productDto.setInorganic(product.isInorganic());
		productDto.setFeatured(product.isFeatured());
		productDto.setDescription(product.getDescription());
		productDto.setPrecautions(product.getPrecautions());
		productDto.setImageUrl(product.getImageUrl());
		return productDto;
	}

	@Override
	public Product findById(long id) {
		return productRepository.findById(id).get();
	}

}
