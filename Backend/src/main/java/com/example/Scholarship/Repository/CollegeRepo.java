package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.College;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CollegeRepo extends JpaRepository<College,Integer>
{
    Optional<College> findByCollegename(String collegename);
}
