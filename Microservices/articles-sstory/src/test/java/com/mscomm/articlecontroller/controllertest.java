package com.mscomm.articlecontroller;



import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.articleservice.controller.ArticlesController;
import com.mscomm.articleservice.entity.Articles;
import com.mscomm.articleservice.service.ArticlesService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;

class ArticlesControllerTest {

    @Mock
    private ArticlesService articlesService;

    @InjectMocks
    private ArticlesController articlesController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveArticles() {
        // Create a sample Articles object
        Articles articles = new Articles();
        articles.setId(1L);
        articles.setImage("image_url");
        articles.setTitle("Test Article");
        articles.setDescription("This is a test article");
        articles.setUrl("article_url");

        // Mock the behavior of the service
        when(articlesService.saveArticles(any(Articles.class))).thenReturn(articles);

        // Call the controller method
        ResponseEntity<Articles> response = articlesController.saveArticles(articles);

        // Verify the response
        assertNotNull(response);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Articles savedArticles = response.getBody();
        assertNotNull(savedArticles);
        assertEquals(1L, savedArticles.getId());
        assertEquals("image_url", savedArticles.getImage());
        assertEquals("Test Article", savedArticles.getTitle());
        assertEquals("This is a test article", savedArticles.getDescription());
        assertEquals("article_url", savedArticles.getUrl());

        // Verify that the service's saveArticles method was called once
        verify(articlesService, times(1)).saveArticles(any(Articles.class));
    }

    @Test
    void testListAllUsers() {
        // Create a list of sample Articles objects
        List<Articles> articlesList = new ArrayList<>();
        Articles articles1 = new Articles();
        articles1.setId(1L);
        articles1.setImage("image_url_1");
        articles1.setTitle("Article 1");
        articles1.setDescription("This is article 1");
        articles1.setUrl("article_url_1");
        articlesList.add(articles1);

        Articles articles2 = new Articles();
        articles2.setId(2L);
        articles2.setImage("image_url_2");
        articles2.setTitle("Article 2");
        articles2.setDescription("This is article 2");
        articles2.setUrl("article_url_2");
        articlesList.add(articles2);

        // Mock the behavior of the service
        when(articlesService.getallarticles()).thenReturn(articlesList);

        // Call the controller method
        ResponseEntity<List<Articles>> response = articlesController.listAllUsers();

        // Verify the response
        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        List<Articles> result = response.getBody();
        assertNotNull(result);
        assertEquals(2, result.size());

        Articles resultArticle1 = result.get(0);
        assertEquals(1L, resultArticle1.getId());
        assertEquals("image_url_1", resultArticle1.getImage());
        assertEquals("Article 1", resultArticle1.getTitle());
        assertEquals("This is article 1", resultArticle1.getDescription());
        assertEquals("article_url_1", resultArticle1.getUrl());

        Articles resultArticle2 = result.get(1);
        assertEquals(2L, resultArticle2.getId());
        assertEquals("image_url_2", resultArticle2.getImage());
        assertEquals("Article 2", resultArticle2.getTitle());
        assertEquals("This is article 2", resultArticle2.getDescription());
        assertEquals("article_url_2", resultArticle2.getUrl());

        // Verify that the service's getallarticles method was called once
        verify(articlesService, times(1)).getallarticles();
    }
}
