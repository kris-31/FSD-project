package com.bezkoder.spring.hibernate.onetomany.model;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "crop_diseases")
public class Crop_diseases {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "diseases_generator")
  private Long id;

  //@Lob
  private String name;
  
  //private Long crop_id;
  private String origin_country;
  

//  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "crops_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private Crops tutorial;


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getName() {
	return name;
}


public void setName(String name) {
	this.name = name;
}



public String getOrigin_country() {
	return origin_country;
}


public void setOrigin_country(String origin_country) {
	this.origin_country = origin_country;
}


public Crops getTutorial() {
	return tutorial;
}


public void setTutorial(Crops tutorial) {
	this.tutorial = tutorial;
}

  

  

}
