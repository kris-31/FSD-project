package com.mscomm.userservice.controller;

import lombok.AllArgsConstructor;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.Product;
import com.mscomm.userservice.service.ProductService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8081"})
public class UserController {
	  private ProductService productService;

	    @PostMapping("/products")
	    public ResponseEntity<Product> saveUser(@RequestBody Product user){
	       Product savedUser = productService.saveUser(user);
	        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	    }
//user with dept details communication
	    @GetMapping("/product/blog/{id}")
	    public ResponseEntity<ResponseDto> getUser(@PathVariable("id") Long userId){
	        ResponseDto responseDto = productService.getUser(userId);
	        return ResponseEntity.ok(responseDto);
	    }
	    @GetMapping("/product")
	    public ResponseEntity<List<Product>> listAllUsers(){
	        List<Product> userList = productService.getallProducts();
	        return ResponseEntity.ok(userList);
	    }
	    @GetMapping("/product/{id}")
		private Product getBooks(@PathVariable("id") long id) {
			return productService.findById(id);
		}
}
