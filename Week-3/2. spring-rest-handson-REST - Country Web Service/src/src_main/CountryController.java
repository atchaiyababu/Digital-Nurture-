package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {

        System.out.println("START - getCountryIndia()");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("spring/country.xml");

        Country country = (Country) context.getBean("country");

        System.out.println("END - getCountryIndia()");

        return country;
    }
}