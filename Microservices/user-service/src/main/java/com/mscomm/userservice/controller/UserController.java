package com.mscomm.userservice.controller;

import lombok.AllArgsConstructor;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/users")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8083"})
public class UserController {
	  private UserService userService;

	    @PostMapping
	    public ResponseEntity<User> saveUser(@RequestBody User user){
	        User savedUser = userService.saveUser(user);
	        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	    }

//	    @GetMapping("{id}")
//	    public ResponseEntity<ResponseDto> getUser(@PathVariable("id") Long userId){
//	        ResponseDto responseDto = userService.getUser(userId);
//	        return ResponseEntity.ok(responseDto);
//	    }
	    
	    @GetMapping("/{email}")
	    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
	        User user = userService.getByEmail(email);
	        if (user != null) {
	            return ResponseEntity.ok(user);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	    
}
