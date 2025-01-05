package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Scholarship;
import com.example.Scholarship.Repository.CategoryRepo;
import com.example.Scholarship.Repository.InchargeRepo;
import com.example.Scholarship.Repository.ScholarshipRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")

public class ScholarshipController {
    @Autowired
    ScholarshipRepo scholarshipRepo;

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    InchargeRepo inchargeRepo;

    /* Add Scholarship based on category & inchargeid - Addscholarship */
    @PostMapping("/addscholarship/{categoryid}/{inchargeid}")
    public ResponseEntity<?> addscholarship(@PathVariable Integer categoryid, @PathVariable Integer inchargeid, @RequestBody Scholarship obj) {
        var categoryinfo = categoryRepo.findById(categoryid).orElseThrow(() -> new RuntimeException("Catgory id not found"));
        var inchargeinfo = inchargeRepo.findById(inchargeid).orElseThrow(() -> new RuntimeException("Incharge id not found"));
        obj.setCategory2(categoryinfo);
        obj.setIncharge1(inchargeinfo);
        scholarshipRepo.save(obj);
        return new ResponseEntity<>("New Scholarship Added", HttpStatus.OK);
    }


    @GetMapping("/getallscholarships")
    public ResponseEntity<?> getallscholarships() {
        List<Scholarship> scholarshipList = scholarshipRepo.findAll();
        return new ResponseEntity<>(scholarshipList, HttpStatus.OK);
    }

    /* Display Scholarships - Viewscholarships */
    @GetMapping("/getscholarships")
    public ResponseEntity<List<Scholarship>> getscholarships() {
        List<Scholarship> scholarshipList = scholarshipRepo.findAll();
        LocalDateTime currentDateTime = LocalDateTime.now();

        // Filter scholarships based on current date and time
        List<Scholarship> filteredScholarshipList = scholarshipList.stream()
                .filter(scholarship ->
                        scholarship.getStartdate() != null &&
                                scholarship.getEnddate() != null &&
                                !scholarship.getStartdate().isAfter(currentDateTime) &&
                                !scholarship.getEnddate().isBefore(currentDateTime)
                )
                .collect(Collectors.toList());

        return new ResponseEntity<>(filteredScholarshipList, HttpStatus.OK);
    }
}

