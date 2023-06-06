package com.mscomm.productservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.productservice.entity.*;
public interface ProductRepository extends JpaRepository<Product, Long>{

}
