package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.javatpoint.model.CropSolutions;
import com.javatpoint.repository.BooksRepository;

//defining the business logic  
@Service
public class BooksService {
	@Autowired
	BooksRepository booksRepository;

//getting all books record by using the method findaAll() of CrudRepository  
	public List<CropSolutions> getAllBooks() {
		List<CropSolutions> books = new ArrayList<CropSolutions>();
		booksRepository.findAll().forEach(books1 -> books.add(books1));
		return books;
	}

//getting a specific record by using the method findById() of CrudRepository  
	public CropSolutions getBooksById(long id) {
		
		return booksRepository.findById(id).get();
	}

//saving a specific record by using the method save() of CrudRepository  
	public void saveOrUpdate(CropSolutions books) {
		booksRepository.save(books);
	}

//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(long bookid) {
		booksRepository.deleteById(bookid);
	}

//updating a record  
	public void update(CropSolutions books, long bookid) {
		booksRepository.save(books);
	}
}
