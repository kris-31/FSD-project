package com.mscomm.articleservice.service.impl;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mscomm.articleservice.entity.Articles;
import com.mscomm.articleservice.repository.ArticlesRepository;
import com.mscomm.articleservice.service.ArticlesService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ArticlesServiceImpl implements ArticlesService{
	
	 private ArticlesRepository articlesRepository;
	@Override
	public Articles saveArticles(Articles department) {
	return articlesRepository.save(department);
	}

	
	
	@Override
	public List<Articles> getallarticles()
	{
		 List<Articles> reports = new ArrayList<>();
		 articlesRepository.findAll().forEach(reports::add);
	     return reports;
	}

}
