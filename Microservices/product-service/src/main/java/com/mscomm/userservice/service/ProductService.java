package com.mscomm.userservice.service;
import com.mscomm.userservice.entity.*;

import java.util.List;

import com.mscomm.userservice.dto.ResponseDto;
public interface ProductService {
	Product saveUser(Product user);
    ResponseDto getUser(Long userId);
	List<Product> getallProducts();
	Product findById(long id);
}
