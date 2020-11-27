package com.famkit.db.famkit_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.famkit.db.famkit_db.entity.Contact;

import com.famkit.db.famkit_db.repositories.ContactRepository;

@Service
@Transactional
public class ContactBaseService {

	
	@Autowired
	ContactRepository contactRepository;


    // CRUD METHODS
    
	// CRUD - REMOVE
    
	public void delete(Long id) {
		contactRepository.delete(id);
	}

	// CRUD - GET ONE
    	
	public Contact getOne(Long id) {
		return contactRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<Contact> getAll() {
		List<Contact> list = new ArrayList<>();
		contactRepository.findAll().forEach(list::add);
		return list;
	}
	

}
