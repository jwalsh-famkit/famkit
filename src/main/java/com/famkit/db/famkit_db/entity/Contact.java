package com.famkit.db.famkit_db.entity;

import javax.persistence.Entity;
import com.famkit.db.famkit_db.entity.base.ContactBase;

@Entity
public class Contact extends ContactBase {

    public Contact() {}

    public Contact(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}
