package com.bezkoder.spring.hibernate.onetomany.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.hibernate.onetomany.model.Crops;
//import com.bezkoder.spring.hibernate.onetomany.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Crops, Long> {


  List<Crops> findByNameContaining(String name);
}
