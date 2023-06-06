package com.mscomm.productservice.service;

import java.util.List;

import com.mscomm.productservice.dto.ResponseDto;
import com.mscomm.productservice.entity.*;

public interface ProductService {
	Product saveUser(Product product);

	ResponseDto getProduct(Long productId);

	List<Product> getallProducts();

	Product findById(long id);
}
