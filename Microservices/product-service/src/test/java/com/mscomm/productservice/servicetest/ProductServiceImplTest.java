package com.mscomm.productservice.servicetest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

// Import the necessary classes from your application
import com.mscomm.productservice.dto.*;
import com.mscomm.productservice.entity.Product;
import com.mscomm.productservice.repository.ProductRepository;
import com.mscomm.productservice.service.impl.ProductServiceImpl;

public class ProductServiceImplTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private ProductServiceImpl productService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveUser() {
        // Create a sample Product object
        Product product = new Product();
        product.setId(1L);
        product.setName("Sample Product");

        // Set up the mock behavior of the repository
        when(productRepository.save(product)).thenReturn(product);

        // Call the service method
        Product savedProduct = productService.saveUser(product);

        // Verify the repository method was called
        verify(productRepository, times(1)).save(product);

        // Assert the returned product matches the input
        assertEquals(product, savedProduct);
    }

    @Test
    public void testGetProduct() {
        // Create a sample product and blog DTO
        Product product = new Product();
        product.setId(1L);
        product.setName("Sample Product");
        product.setBlogid("1");

        ProductDto productDto = new ProductDto();
        productDto.setId(1L);
        productDto.setName("Sample Product");

        BlogDto blogDto = new BlogDto();
        blogDto.setId(12L);
        blogDto.setTitle("Sample Blog");

        // Set up the mock behavior of the repository
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        // Set up the mock behavior of the restTemplate
        ResponseEntity<BlogDto> responseEntity = new ResponseEntity<>(blogDto, HttpStatus.OK);
        when(restTemplate.getForEntity("http://localhost:8082/api/blogs/1", BlogDto.class)).thenReturn(responseEntity);

        // Call the service method
        ResponseDto responseDto = productService.getProduct(1L);

        // Verify the repository method was called
        verify(productRepository, times(1)).findById(1L);

        // Verify the restTemplate was called
        verify(restTemplate, times(1)).getForEntity("http://localhost:8082/api/blogs/1", BlogDto.class);

        // Assert the responseDto contains the expected values
        assertEquals(productDto, responseDto.getProduct());
        assertEquals(blogDto, responseDto.getBlog());
    }

    @Test
    public void testGetAllProducts() {
        // Create a list of sample products
        List<Product> productList = new ArrayList<>();
        Product product1 = new Product();
        product1.setId(1L);
        product1.setName("Product 1");

        Product product2 = new Product();
        product2.setId(2L);
        product2.setName("Product 2");

        productList.add(product1);
        productList.add(product2);

        // Set up the mock behavior of the repository
        when(productRepository.findAll()).thenReturn(productList);

        // Call the service method
        List<Product> result = productService.getallProducts();

        // Verify the repository method was called
        verify(productRepository, times(1)).findAll();

        // Assert the returned list matches the input
        assertEquals(productList, result);
    }

    @Test
    public void testFindById() {
        // Create a sample product
        Product product = new Product();
        product.setId(1L);
        product.setName("Sample Product");

        // Set up the mock behavior of the repository
        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        // Call the service method
        Product result = productService.findById(1L);

        // Verify the repository method was called
        verify(productRepository, times(1)).findById(1L);

        // Assert the returned product matches the input
        assertEquals(product, result);
    }
}


