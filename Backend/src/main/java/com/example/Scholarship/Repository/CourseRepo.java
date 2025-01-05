package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Integer>
{

}
