package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScholarshipRepo extends JpaRepository<Scholarship,Integer>
{
}
