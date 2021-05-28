package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.*;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}
