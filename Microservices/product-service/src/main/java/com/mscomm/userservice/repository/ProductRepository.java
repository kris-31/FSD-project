package com.mscomm.userservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mscomm.userservice.entity.*;
public interface ProductRepository extends JpaRepository<Product, Long>{

}
