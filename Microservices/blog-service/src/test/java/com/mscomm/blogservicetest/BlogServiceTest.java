package com.mscomm.blogservicetest;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willDoNothing;
import static org.mockito.Mockito.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.mscomm.blogservice.entity.Blog;
import com.mscomm.blogservice.repository.BlogRepository;
import com.mscomm.blogservice.service.impl.BlogServiceImpl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class BlogServiceTest {

    @Mock
    private BlogRepository blogRepository;

    @InjectMocks
    private BlogServiceImpl blogService;

    private Blog blog;

    @BeforeEach
    public void setup(){

    	blog = Blog.builder()
                .id(1L)
                .image("https://www.agrivi.com/wp-content/uploads/2023/05/AGRIVI-Blog-Profitability-COVER.jpg")
                .title("What Can Farms Do to Protect Their Profitability?")
                .description("2023 started with farms in all geographies having major concerns about profitability. In the last 2 years, inflation increased the cost of production significantly, while crop prices didn’t follow the proportional increase")
                .url("https://www.agrivi.com/blog/what-can-fams-do-to-protect-profitability/")
                .build();
    }
    
    // JUnit test for saveBlog method
    @DisplayName("JUnit test for saveBlog method")
    @Test
    public void givenEmployeeObject_whenSaveEmployee_thenReturnEmployeeObject(){
    	
        given(blogRepository.save(blog)).willReturn(blog);

        System.out.println(blogRepository);
        System.out.println(blogService);

        Blog savedBlog = blogService.saveBlog(blog);

        System.out.println(savedBlog);
        assertThat(savedBlog).isNotNull();
    }

    // JUnit test for getAllBlogs method
    @DisplayName("JUnit test for getAllBlogs method")
    @Test
    public void givenBlogsList_whenGetAllBlogs_thenReturnBlogsList(){

        Blog blog1 = Blog.builder()
        		.id(2L)
                .image("https://www.agrivi.com/wp-content/2023/05/AGRIVI-Blog-Profitability-COVER.jpg")
                .title("What Can Farms Do to Protect?")
                .description("In the last 2 years, inflation increased the cost of production significantly, while crop prices didn’t follow the proportional increase")
                .url("https://www.agrivi.com/blog/what-can-fams-profitability/")
                .build();

        given(blogRepository.findAll()).willReturn(List.of(blog,blog1));

        List<Blog> blogList = blogService.getAllBlogs();

        assertThat(blogList).isNotNull();
        assertThat(blogList.size()).isEqualTo(2);
    }
    
    // JUnit test for getBlogById method
    @DisplayName("JUnit test for getBlogById method")
    @Test
    public void givenBlogId_whenGetBlogById_thenReturnBlogObject(){

        given(blogRepository.findById(1L)).willReturn(Optional.of(blog));

        Blog savedBlog = blogService.getBlogById(blog.getId());

        assertThat(savedBlog).isNotNull();

    }
    
}
