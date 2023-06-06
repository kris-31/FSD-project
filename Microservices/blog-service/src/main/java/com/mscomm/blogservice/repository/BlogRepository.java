package com.mscomm.blogservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.blogservice.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog,Long> {

}