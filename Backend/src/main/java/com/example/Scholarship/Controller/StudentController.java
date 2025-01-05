package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Application;
import com.example.Scholarship.Entity.Student;
import com.example.Scholarship.Repository.ApplicationRepo;
import com.example.Scholarship.Repository.CategoryRepo;
import com.example.Scholarship.Repository.CourseRepo;
import com.example.Scholarship.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")

public class StudentController
{
    @Autowired
    StudentRepo studentRepo;

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    ApplicationRepo applicationRepo;

    /* Student - login check */
    @GetMapping("/studentlogincheck/{emailid}/{password}")
    public ResponseEntity<?> studentlogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Student by email ID
            Student studinfo = studentRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!studinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Student Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Student info if login is successful
                return new ResponseEntity<>(studinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    /* Register Students */
    @PostMapping("/studentregister/{courseid}/{categoryid}")
    public ResponseEntity<?> studentregister(@PathVariable Integer courseid,@PathVariable Integer categoryid,@RequestBody Student obj)
    {
        var courseinfo=courseRepo.findById(courseid).orElseThrow(()->new RuntimeException("Course id not found"));
        obj.setCourse2(courseinfo);
        var categoryinfo=categoryRepo.findById(categoryid).orElseThrow(()->new RuntimeException("Categoryid not found"));
        obj.setCategory1(categoryinfo);
        studentRepo.save(obj);
        return new ResponseEntity<>("Student Registered Successfully",HttpStatus.OK);
    }

}
