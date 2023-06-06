package com.mscomm.articleservice.service;

import java.util.List;

import com.mscomm.articleservice.entity.*;

public interface ArticlesService {
	//method for saving
    Articles saveArticles(Articles department);

   
//get all method
	List<Articles> getallarticles();
}