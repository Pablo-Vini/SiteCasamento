package com.example.Casamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.Casamento.item.Item;
import com.example.Casamento.item.ItemRepository;
import com.example.Casamento.item.ItemRequestDTO;
import com.example.Casamento.item.ItemResponseDTO;

@RestController
@RequestMapping("item")
public class ItemController {
	
	@Autowired
	private ItemRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping
	public void itemPago(@RequestBody ItemRequestDTO data) {
		Item itemData = new Item(data);
		repository.save(itemData);
		return;
	}
	
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping
	public List<ItemResponseDTO> getAll() {
		
		List<ItemResponseDTO> itemList = repository.findAll().stream().map(ItemResponseDTO::new).toList();
		return itemList;
	}
	
	@Configuration
	public class CorsConfiguration implements WebMvcConfigurer {

	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	            .allowedOrigins("http://localhost:3000")
	            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
	    }
	}
}
