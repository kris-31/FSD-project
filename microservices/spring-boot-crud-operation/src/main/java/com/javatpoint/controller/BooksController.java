package com.javatpoint.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.javatpoint.model.CropSolutions;
import com.javatpoint.service.BooksService;

//mark class as Controller 
@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:3000" })
@RestController
public class BooksController {
//autowire the BooksService class  
	@Autowired
	BooksService booksService;

//creating a get mapping that retrieves all the books detail from the database   
	@GetMapping("/book")
	private List<CropSolutions> getAllBooks() {
		return booksService.getAllBooks();
	}

//creating a get mapping that retrieves the detail of a specific book  
	@GetMapping("/book/{bookid}")
	private CropSolutions getBooks(@PathVariable("bookid") long bookid) {
		return booksService.getBooksById(bookid);
	}

//creating a delete mapping that deletes a specified book  
	@DeleteMapping("/book/{bookid}")
	private void deleteBook(@PathVariable("bookid") long bookid) {
		// int ids=Integer.parseInt(bookid);
		booksService.delete(bookid);
	}

//creating post mapping that post the book detail in the database  
	@PostMapping("/books")
	private long saveBook(@RequestBody CropSolutions books) {
		booksService.saveOrUpdate(books);
		return books.getProductId();
	}

//creating put mapping that updates the book detail   
	@PutMapping("/books")
	private CropSolutions update(@RequestBody CropSolutions books) {
		booksService.saveOrUpdate(books);
		return books;
	}
}
