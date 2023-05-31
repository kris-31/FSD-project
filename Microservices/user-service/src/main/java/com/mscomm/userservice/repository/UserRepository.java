package com.mscomm.userservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mscomm.userservice.entity.*;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);

}
