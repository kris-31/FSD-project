package com.mscomm.blogservice.controller;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.blogservice.entity.Blog;
import com.mscomm.blogservice.service.BlogService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/blogs")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8080"})
public class BlogController {

	private BlogService blogService;

	 @GetMapping
	    public ResponseEntity<List<Blog>> listAllUsers(){
	        List<Blog> userList = blogService.getAllBlogs();
	        return ResponseEntity.ok(userList);
	    }
	 
    @PostMapping
    public ResponseEntity<Blog> saveBlog(@RequestBody Blog blog){
        Blog savedBlog = blogService.saveBlog(blog);
        return new ResponseEntity<>(savedBlog, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("id") Long blogId){
        Blog blog = blogService.getBlogById(blogId);
        return ResponseEntity.ok(blog);
    }
}