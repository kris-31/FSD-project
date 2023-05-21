package com.javatpoint.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//mark class as an Entity   
@Entity
//
//@Getter @Setter   //lombok annotations
public class CropSolutions {
//Defining book id as primary key  
	@Id
	  private long productId;
	  private String productName;	
	  private String productType;
	  private String productDescription;
	  private String productQuantity;
	  private String productLastUpdated;
	  private int productPrice;
	//
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public String getProductQuantity() {
		return productQuantity;
	}
	public void setProductQuantity(String productQuantity) {
		this.productQuantity = productQuantity;
	}
	public String getProductLastUpdated() {
		return productLastUpdated;
	}
	public void setProductLastUpdated(String productLastUpdated) {
		this.productLastUpdated = productLastUpdated;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	  
}
