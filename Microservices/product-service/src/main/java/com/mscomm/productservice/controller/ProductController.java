package com.mscomm.productservice.controller;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.productservice.dto.ResponseDto;
import com.mscomm.productservice.entity.Product;
import com.mscomm.productservice.service.ProductService;
@RestController
@RequestMapping("api")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8081"})
public class ProductController {
	  private ProductService productService;

	    @PostMapping("/products")
	    public ResponseEntity<Product> saveUser(@RequestBody Product prod){
	       Product savedProd = productService.saveUser(prod);
	        return new ResponseEntity<>(savedProd, HttpStatus.CREATED);
	    }
//user with dept details communication
	    @GetMapping("/product/blog/{id}")
	    public ResponseEntity<ResponseDto> getUser(@PathVariable("id") Long productId){
	        ResponseDto responseDto = productService.getProduct(productId);
	        return ResponseEntity.ok(responseDto);
	    }
	    @GetMapping("/product")
	    public ResponseEntity<List<Product>> listAllUsers(){
	        List<Product> productList = productService.getallProducts();
	        return ResponseEntity.ok(productList);
	    }
	    @GetMapping("/product/{id}")
		public Product getProducts(@PathVariable("id") long id) {
			return productService.findById(id);
		}
}
