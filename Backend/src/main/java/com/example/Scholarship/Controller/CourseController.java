package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Course;
import com.example.Scholarship.Repository.CollegeRepo;
import com.example.Scholarship.Repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class CourseController
{
    @Autowired
    CollegeRepo collegeRepo;

    @Autowired
    CourseRepo courseRepo;

    /* Add Department details */
    @PostMapping("/addcourse/{collegeid}")
    public ResponseEntity<?> adddepartment(@PathVariable Integer collegeid, @RequestBody Course obj)
    {
        var colinfo=collegeRepo.findById(collegeid).orElseThrow(()->new RuntimeException("Collegeid not found"));
        obj.setCollege1(colinfo);
        courseRepo.save(obj);
        return new ResponseEntity<>("Course Added Successfully", HttpStatus.OK);
    }

    /* Display all Courses */
    @GetMapping("/getallcourses")
    public ResponseEntity<?> getallcourses()
    {
        List<Course> courselist=courseRepo.findAll();
        return new ResponseEntity<>(courselist,HttpStatus.OK);
    }

}
