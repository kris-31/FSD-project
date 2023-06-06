package com.mscomm.productservice.controllertest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.mscomm.productservice.dto.BlogDto;
import com.mscomm.productservice.dto.ProductDto;
// Import the necessary classes from your application
import com.mscomm.productservice.dto.ResponseDto;
import com.mscomm.productservice.entity.Product;
import com.mscomm.productservice.service.ProductService;
import com.mscomm.productservice.controller.ProductController;

public class ProductControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

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

        // Set up the mock behavior of the service
        when(productService.saveUser(product)).thenReturn(product);

        // Call the controller method
        ResponseEntity<Product> responseEntity = productController.saveUser(product);

        // Verify the service method was called
        verify(productService, times(1)).saveUser(product);

        // Assert the response entity contains the expected product and HTTP status
        assertEquals(product, responseEntity.getBody());
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
    }

    @Test
    public void testGetUser() {
        // Create a sample response DTO
        ResponseDto responseDto = new ResponseDto();
        responseDto.setProduct(new ProductDto());
        responseDto.setBlog(new BlogDto());

        // Set up the mock behavior of the service
        when(productService.getProduct(1L)).thenReturn(responseDto);

        // Call the controller method
        ResponseEntity<ResponseDto> responseEntity = productController.getUser(1L);

        // Verify the service method was called
        verify(productService, times(1)).getProduct(1L);

        // Assert the response entity contains the expected response DTO and HTTP status
        assertEquals(responseDto, responseEntity.getBody());
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    public void testListAllUsers() {
        // Create a list of sample products
        List<Product> productList = new ArrayList<>();
        productList.add(new Product());
        productList.add(new Product());

        // Set up the mock behavior of the service
        when(productService.getallProducts()).thenReturn(productList);

        // Call the controller method
        ResponseEntity<List<Product>> responseEntity = productController.listAllUsers();

        // Verify the service method was called
        verify(productService, times(1)).getallProducts();

        // Assert the response entity contains the expected product list and HTTP status
        assertEquals(productList, responseEntity.getBody());
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    public void testGetProduct() {
        // Create a sample product
        Product product = new Product();
        product.setId(1L);
        product.setName("Sample Product");

        // Set up the mock behavior of the service
        when(productService.findById(1L)).thenReturn(product);

        // Call the controller method
        Product result = productController.getProducts(1L);

        // Verify the service method was called
        verify(productService, times(1)).findById(1L);

        // Assert the returned product matches the expected product
        assertEquals(product, result);
    }
}
