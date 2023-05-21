package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;  
import com.javatpoint.model.CropSolutions;  
//repository that extends CrudRepository  
public interface BooksRepository extends CrudRepository<CropSolutions, Long>  
{  
}  
