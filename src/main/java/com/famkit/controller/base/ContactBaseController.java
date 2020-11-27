package com.famkit.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.modelmapper.ModelMapper;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.famkit.db.famkit_db.service.ContactService;
import com.famkit.db.famkit_db.entity.Contact;
import com.famkit.db.famkit_db.dtos.ContactDto;

//IMPORT RELATIONS

import com.famkit.db.famkit_db.service.UserService;


public class ContactBaseController {
    
    @Autowired
	ContactService contactService;

	
	@Autowired
	UserService userService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/contact/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Contact contactSelected = contactService.getOne(id);
		
		//external relation User
		if (contactSelected.getUser() != null && !contactSelected.getUser().isEmpty()) {
			contactSelected.getUser().forEach(user -> userService.delete(user.get_id()));
		}
		
		contactService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/contact/{id}")
	public ResponseEntity<ContactDto> get(@PathVariable("id") Long id) {
		Contact contactSelected = contactService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(contactSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/contact")
	public ResponseEntity<List<ContactDto>> getList() {
		List<Contact> list = contactService.getAll();
		List<ContactDto> listDto = list.stream()
				.map(contact -> convertToDto(contact))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}



/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private ContactDto convertToDto(Contact contact) {
		ContactDto contactDto = modelMapper.map(contact, ContactDto.class);
		return contactDto;
	}
}
