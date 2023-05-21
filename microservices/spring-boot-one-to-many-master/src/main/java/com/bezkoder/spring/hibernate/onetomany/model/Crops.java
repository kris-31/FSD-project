package com.bezkoder.spring.hibernate.onetomany.model;
import javax.persistence.*;

@Entity
@Table(name = "crops")
public class Crops {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "crops_generator")
  private long id;

  @Column
  private String name;

  @Column
  private String growth_time;

  @Column
  private String yield_per_acre;
  
  @Column
  private String recommended_pesticide;

  public Crops() {

  }

  public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getGrowth_time() {
	return growth_time;
}

public void setGrowth_time(String growth_time) {
	this.growth_time = growth_time;
}

public String getYield_per_acre() {
	return yield_per_acre;
}

public void setYield_per_acre(String yield_per_acre) {
	this.yield_per_acre = yield_per_acre;
}

public String getRecommended_pesticide() {
	return recommended_pesticide;
}

public void setRecommended_pesticide(String recommended_pesticide) {
	this.recommended_pesticide = recommended_pesticide;
}

public Crops(String ti,String growth_time, String yield_per_acre, String recommended_pesticide) {
    this.name = ti;
    this.growth_time = growth_time;
    this.yield_per_acre = yield_per_acre;
    this.recommended_pesticide = recommended_pesticide;
  }

  

  

  
}
