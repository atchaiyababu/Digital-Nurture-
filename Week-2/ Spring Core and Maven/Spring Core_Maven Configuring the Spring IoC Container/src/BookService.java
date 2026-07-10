package com.library.exercise5.service;

import com.library.exercise5.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;


    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("Book: " +
                bookRepository.getBookName());
    }
}