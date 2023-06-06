package com.mscomm.blogservice.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mscomm.blogservice.entity.Blog;
import com.mscomm.blogservice.repository.BlogRepository;
import com.mscomm.blogservice.service.BlogService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class BlogServiceImpl implements BlogService{
	
	 private BlogRepository blogRepository;
	@Override
	public Blog saveBlog(Blog blog) {
	return blogRepository.save(blog);
	}

	@Override
	public Blog getBlogById(Long blogId) {
		 return blogRepository.findById(blogId).get();
	}
	
	@Override
	public List<Blog> getAllBlogs()
	{
		 List<Blog> reports = new ArrayList<>();
		 blogRepository.findAll().forEach(reports::add);
	     return reports;
	}

}