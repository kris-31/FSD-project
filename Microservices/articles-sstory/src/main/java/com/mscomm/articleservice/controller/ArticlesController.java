package com.mscomm.articleservice.controller;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.articleservice.entity.Articles;
import com.mscomm.articleservice.service.ArticlesService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/")
@AllArgsConstructor
@CrossOrigin(origins= {"http://localhost:3000","http://localhost:8081"})
public class ArticlesController {

	private ArticlesService articleservice;

    @PostMapping("articles")
    public ResponseEntity<Articles> saveArticles(@RequestBody Articles department){
        Articles savedArticles = articleservice.saveArticles(department);
        return new ResponseEntity<>(savedArticles, HttpStatus.CREATED);
    }

    
    @GetMapping("/articles")
    public ResponseEntity<List<Articles>> listAllUsers(){
        List<Articles> artList = articleservice.getallarticles();
        return ResponseEntity.ok(artList);
    }
}

