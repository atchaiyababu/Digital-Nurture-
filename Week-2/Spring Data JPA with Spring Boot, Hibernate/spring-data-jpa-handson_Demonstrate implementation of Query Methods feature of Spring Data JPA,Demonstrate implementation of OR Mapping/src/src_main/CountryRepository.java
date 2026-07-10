package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    Country findByCode(String code);

    List<Country> findByName(String name);

    List<Country> findByNameContaining(String text);

}