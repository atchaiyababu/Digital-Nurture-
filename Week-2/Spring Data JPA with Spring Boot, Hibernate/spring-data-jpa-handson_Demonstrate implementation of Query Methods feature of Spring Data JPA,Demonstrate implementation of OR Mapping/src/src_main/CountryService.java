package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountry(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }
}