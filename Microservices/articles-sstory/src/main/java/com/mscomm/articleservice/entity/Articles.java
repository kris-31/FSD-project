package com.mscomm.articleservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "articles")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Articles {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String image;
	    private String title;
	    private String description;
	    private String url;
	    
}
