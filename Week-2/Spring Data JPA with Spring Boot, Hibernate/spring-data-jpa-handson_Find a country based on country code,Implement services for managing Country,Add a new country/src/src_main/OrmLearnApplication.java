package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

	@Autowired
	private CountryService countryService;

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		getAllCountriesTest();

		getCountryTest();

		testAddCountry();
	}

	private void getAllCountriesTest() {

		LOGGER.info("Start");

		List<Country> countries = countryService.getAllCountries();

		countries.forEach(country -> LOGGER.debug("Country: {}", country));

		LOGGER.info("End");
	}

	private void getCountryTest() {

		LOGGER.info("Start");

		try {
			Country country = countryService.findCountryByCode("IN");
			LOGGER.debug("Country: {}", country);
		} catch (CountryNotFoundException e) {
			LOGGER.error(e.getMessage());
		}

		LOGGER.info("End");
	}

	private void testAddCountry() {

		LOGGER.info("Start");

		Country country = new Country("ZZ", "Test Country");

		countryService.addCountry(country);

		try {
			Country addedCountry = countryService.findCountryByCode("ZZ");
			LOGGER.debug("Added Country: {}", addedCountry);
		} catch (CountryNotFoundException e) {
			LOGGER.error(e.getMessage());
		}

		LOGGER.info("End");
	}
}