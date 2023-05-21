package com.bezkoder.spring.hibernate.onetomany.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.hibernate.onetomany.exception.ResourceNotFoundException;
import com.bezkoder.spring.hibernate.onetomany.model.Crops;
//import
import com.bezkoder.spring.hibernate.onetomany.repository.TutorialRepository;

@CrossOrigin(origins = {"http://localhost:8080","http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class CropsController {

  @Autowired
  TutorialRepository tutorialRepository;

  @GetMapping("/crops")
  public ResponseEntity<List<Crops>> getAllCropss(@RequestParam(required = false) String name) {
    List<Crops> crops = new ArrayList<Crops>();

    if (name == null)
      tutorialRepository.findAll().forEach(crops::add);
    else
      tutorialRepository.findByNameContaining(name).forEach(crops::add);

    if (crops.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    return new ResponseEntity<>(crops, HttpStatus.OK);
  }

  @GetMapping("/crops/{id}")
  public ResponseEntity<Crops> getCropsById(@PathVariable("id") long id) {
    Crops tutorial = tutorialRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Not found Crops with id = " + id));

    return new ResponseEntity<>(tutorial, HttpStatus.OK);
  }

  @PostMapping("/crops")
  public ResponseEntity<Crops> createCrops(@RequestBody Crops tutorial) {
    Crops _tutorial = tutorialRepository.save(new Crops(tutorial.getName(), tutorial.getGrowth_time(),tutorial.getYield_per_acre(),tutorial.getRecommended_pesticide()));
    return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
  }

  @PutMapping("/crops/{id}")
  public ResponseEntity<Crops> updateCrops(@PathVariable("id") long id, @RequestBody Crops tutorial) {
    Crops _tutorial = tutorialRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Not found Crops with id = " + id));

    _tutorial.setName(tutorial.getName());
    _tutorial.setRecommended_pesticide(tutorial.getRecommended_pesticide());
//    _tutorial.setPublished(tutorial.isPublished());
    
    return new ResponseEntity<>(tutorialRepository.save(_tutorial), HttpStatus.OK);
  }

  @DeleteMapping("/crops/{id}")
  public ResponseEntity<HttpStatus> deleteCrops(@PathVariable("id") long id) {
    tutorialRepository.deleteById(id);
    
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  @DeleteMapping("/crops")
  public ResponseEntity<HttpStatus> deleteAllCropss() {
    tutorialRepository.deleteAll();
    
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

//  @GetMapping("/tutorials/published")
//  public ResponseEntity<List<Crops>> findByPublished() {
//    List<Crops> tutorials = tutorialRepository.findByPublished(true);
//
//    if (tutorials.isEmpty()) {
//      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//    
//    return new ResponseEntity<>(tutorials, HttpStatus.OK);
//  }
}
