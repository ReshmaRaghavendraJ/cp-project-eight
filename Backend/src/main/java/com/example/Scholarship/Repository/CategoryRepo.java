package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepo extends JpaRepository<Category,Integer>
{
    Optional<Category> findByCategoryname(String categoryname);
}
