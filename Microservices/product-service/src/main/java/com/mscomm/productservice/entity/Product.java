package com.mscomm.productservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String name;

	    private String slug;

	    private String type;

	    private double price;

	    private int size;

	    private String crop;

	    private boolean organic;

	    private boolean inorganic;

	    private boolean featured;
	    
	    private String blogid; //not now includedd in react

	    @Column(columnDefinition = "TEXT")
	    private String description;

	    @Column(columnDefinition = "TEXT")
	    private String precautions;

	    @Column(columnDefinition = "TEXT")
	    private String imageUrl;
}
