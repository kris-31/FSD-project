package com.mscomm.articleservicetest;



import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.mscomm.articleservice.entity.Articles;
import com.mscomm.articleservice.repository.ArticlesRepository;
import com.mscomm.articleservice.service.impl.ArticlesServiceImpl;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

class ArticlesServiceImplTest {

    @Mock
    private ArticlesRepository articlesRepository;

    @InjectMocks
    private ArticlesServiceImpl articlesService;

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

        // Mock the behavior of the repository
        when(articlesRepository.save(any(Articles.class))).thenReturn(articles);

        // Call the service method
        Articles savedArticles = articlesService.saveArticles(articles);

        // Verify the result
        assertNotNull(savedArticles);
        assertEquals(1L, savedArticles.getId());
        assertEquals("image_url", savedArticles.getImage());
        assertEquals("Test Article", savedArticles.getTitle());
        assertEquals("This is a test article", savedArticles.getDescription());
        assertEquals("article_url", savedArticles.getUrl());

        // Verify that the repository's save method was called once
        verify(articlesRepository, times(1)).save(any(Articles.class));
    }

    @Test
    void testGetAllArticles() {
        // Create a list of sample Articles objects
        List<Articles> articlesList = new ArrayList<>();
        Articles articles1 = new Articles();
        articles1.setId(1L);
        articles1.setImage("https://www.faidelhi.org/article%20-dr%20biswas/Images/Mango.jpg");
        articles1.setTitle("A Success Story of an AP Farmer");
        articles1.setDescription("This is article 1-Rice ,Mango");
        articles1.setUrl("article_url_1");
        articlesList.add(articles1);

        Articles articles2 = new Articles();
        articles2.setId(2L);
        articles2.setImage("image_url_2");
        articles2.setTitle("Article 2");
        articles2.setDescription("This is article 2");
        articles2.setUrl("article_url_2");
        articlesList.add(articles2);

        // Mock the behavior of the repository
        when(articlesRepository.findAll()).thenReturn(articlesList);

        // Call the service method
        List<Articles> result = articlesService.getallarticles();

        // Verify the result
        assertNotNull(result);
        assertEquals(2, result.size());

        Articles resultArticle1 = result.get(0);
        assertEquals(1L, resultArticle1.getId());
        assertEquals("https://www.faidelhi.org/article%20-dr%20biswas/Images/Mango.jpg", resultArticle1.getImage());
        assertEquals("A Success Story of an AP Farmer", resultArticle1.getTitle());
        assertEquals("This is article 1-Rice ,Mango", resultArticle1.getDescription());
        assertEquals("article_url_1", resultArticle1.getUrl());

        Articles resultArticle2 = result.get(1);
        assertEquals(2L, resultArticle2.getId());
        assertEquals("image_url_2", resultArticle2.getImage());
        assertEquals("Article 2", resultArticle2.getTitle());
        assertEquals("This is article 2", resultArticle2.getDescription());
        assertEquals("article_url_2", resultArticle2.getUrl());

        // Verify that the repository's findAll method was called once
        verify(articlesRepository, times(1)).findAll();
    }
}
