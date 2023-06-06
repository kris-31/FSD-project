package com.mscomm.blogservice.service;

import java.util.List;

import com.mscomm.blogservice.entity.*;


public interface BlogService {
    Blog saveBlog(Blog blog);

    Blog getBlogById(Long blogId);
    public List<Blog> getAllBlogs();
}