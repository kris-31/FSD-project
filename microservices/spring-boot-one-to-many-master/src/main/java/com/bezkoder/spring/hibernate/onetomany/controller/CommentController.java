package com.bezkoder.spring.hibernate.onetomany.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.hibernate.onetomany.exception.ResourceNotFoundException;
import com.bezkoder.spring.hibernate.onetomany.model.Crop_diseases;
import com.bezkoder.spring.hibernate.onetomany.repository.CommentRepository;
import com.bezkoder.spring.hibernate.onetomany.repository.TutorialRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CommentController {

	
	@Autowired
	private TutorialRepository tutorialRepository;

	@Autowired
	private CommentRepository commentRepository;

	@GetMapping("/crops/{cropId}/cropdiseases")
	public ResponseEntity<List<Crop_diseases>> getAllCrop_diseasessByTutorialId(
			@PathVariable(value = "cropId") Long cropId) {
		if (!tutorialRepository.existsById(cropId)) {
			throw new ResourceNotFoundException("Not found Crop with id = " + cropId);
		}

		List<Crop_diseases> comments = commentRepository.findByTutorialId(cropId);
		return new ResponseEntity<>(comments, HttpStatus.OK);
	}

	@GetMapping("/cropdisease/{id}")
	public ResponseEntity<Crop_diseases> getCrop_diseasessByTutorialId(@PathVariable(value = "id") Long id) {
		Crop_diseases comment = commentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found Crop disease with id = " + id));

		return new ResponseEntity<>(comment, HttpStatus.OK);
	}

	@PostMapping("/crops/{tutorialId}/cropdiseases")
	public ResponseEntity<Crop_diseases> createCrop_diseases(@PathVariable(value = "tutorialId") Long tutorialId,
			@RequestBody Crop_diseases commentRequest) {
		Crop_diseases comment = tutorialRepository.findById(tutorialId).map(tutorial -> {
			commentRequest.setTutorial(tutorial);
			return commentRepository.save(commentRequest);
		}).orElseThrow(() -> new ResourceNotFoundException("Not found Tutorial with id = " + tutorialId));

		return new ResponseEntity<>(comment, HttpStatus.CREATED);
	}

	@PutMapping("/cropdiseases/{id}")
	public ResponseEntity<Crop_diseases> updateCrop_diseases(@PathVariable("id") long id, @RequestBody Crop_diseases commentRequest) {
		Crop_diseases comment = commentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("cropdiseaseId " + id + "not found"));

		comment.setName(commentRequest.getName());
	//	comment.setName(commentRequest.getName());

		return new ResponseEntity<>(commentRepository.save(comment), HttpStatus.OK);
	}

	@DeleteMapping("/cropdiseases/{id}")
	public ResponseEntity<HttpStatus> deleteCrop_diseases(@PathVariable("id") long id) {
		commentRepository.deleteById(id);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/crops/{tutorialId}/cropdisease")
	public ResponseEntity<List<Crop_diseases>> deleteAllCrop_diseasessOfTutorial(
			@PathVariable(value = "tutorialId") Long tutorialId) {
		if (!tutorialRepository.existsById(tutorialId)) {
			throw new ResourceNotFoundException("Not found Tutorial with id = " + tutorialId);
		}

		commentRepository.deleteByTutorialId(tutorialId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
