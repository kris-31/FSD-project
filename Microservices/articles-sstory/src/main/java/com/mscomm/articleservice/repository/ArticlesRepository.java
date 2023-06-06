package com.mscomm.articleservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.articleservice.entity.Articles;

public interface ArticlesRepository extends JpaRepository<Articles,Long> {

}
