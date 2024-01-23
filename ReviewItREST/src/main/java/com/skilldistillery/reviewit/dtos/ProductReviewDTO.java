package com.skilldistillery.reviewit.dtos;

import com.skilldistillery.reviewit.entities.ProductReview;

public class ProductReviewDTO implements IntoEntity<ProductReview> {
	private int id;
	private String title;
	private String content;
	private String authorUsername;
	private int rating;
	private int productId;
	private int authorId;

	public ProductReviewDTO() {
	}

	public ProductReviewDTO(ProductReview review) {
		id = review.getId();
		title = review.getTitle();
		content = review.getContent();
		authorUsername = review.getAuthorUsername();
		rating = review.getRating();
		productId = review.getProduct().getId();
	}

	@Override
	public ProductReview intoEntity() {
		ProductReview review = new ProductReview();
		review.setId(id);
		review.setTitle(title);
		review.setContent(content);
		review.setRating(rating);
		return review;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthorUsername() {
		return authorUsername;
	}

	public void setAuthorUsername(String authorUsername) {
		this.authorUsername = authorUsername;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}

	@Override
	public String toString() {
		return "ProductReviewDTO [id=" + id + ", title=" + title + ", content=" + content + ", authorUsername="
				+ authorUsername + ", rating=" + rating + ", productId=" + productId + ", authorId=" + authorId + "]";
	}

}