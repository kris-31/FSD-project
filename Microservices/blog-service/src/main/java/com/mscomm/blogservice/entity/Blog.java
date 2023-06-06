package com.mscomm.blogservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder

@Entity
@Table(name = "blogs")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter


public class Blog {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String image;
	    private String title;
	    private String description;
	    private String url;
	    
}