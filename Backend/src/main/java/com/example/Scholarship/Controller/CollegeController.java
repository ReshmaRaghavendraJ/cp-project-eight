package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.College;
import com.example.Scholarship.Repository.CollegeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")

public class CollegeController
{
    @Autowired
    CollegeRepo collegeRepo;

    /* add college details */
    @PostMapping("/addcolleges")
    public ResponseEntity<?> addcolleges(@RequestBody College obj) {
        Optional<College> existingcollege = collegeRepo.findByCollegename(obj.getCollegename());
        if (existingcollege.isPresent()) {
            return new ResponseEntity<>("College already exists", HttpStatus.CONFLICT);
        } else {
            College col = collegeRepo.save(obj);
            return new ResponseEntity<>("College Added Successfully",HttpStatus.OK);
        }
    }

    /* Display all Colleges */
    @GetMapping("/getallcolleges")
    public ResponseEntity<?> getallcolleges()
    {
        List<College> collegeList=collegeRepo.findAll();
        return new ResponseEntity<>(collegeList,HttpStatus.OK);
    }
}
