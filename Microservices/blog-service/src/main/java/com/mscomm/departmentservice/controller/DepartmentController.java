package com.mscomm.departmentservice.controller;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.departmentservice.entity.Department;
import com.mscomm.departmentservice.service.DepartmentService;


import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/blogs")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8082"})
public class DepartmentController {

	private DepartmentService departmentService;

	 @GetMapping
	    public ResponseEntity<List<Department>> listAllUsers(){
	        List<Department> userList = departmentService.getallProducts();
	        return ResponseEntity.ok(userList);
	    }
	 
    @PostMapping
    public ResponseEntity<Department> saveDepartment(@RequestBody Department department){
        Department savedDepartment = departmentService.saveDepartment(department);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable("id") Long departmentId){
        Department department = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(department);
    }
}

