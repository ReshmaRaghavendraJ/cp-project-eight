package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Application;
import com.example.Scholarship.Entity.Scholarship;
import com.example.Scholarship.Repository.ApplicationRepo;
import com.example.Scholarship.Repository.InchargeRepo;
import com.example.Scholarship.Repository.ScholarshipRepo;
import com.example.Scholarship.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.DelegatingServerHttpResponse;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class ApplicationController {
    @Autowired
    ApplicationRepo applicationRepo;

    @Autowired
    ScholarshipRepo scholarshipRepo;

    @Autowired
    StudentRepo studentRepo;

    @Autowired
    InchargeRepo inchargeRepo;

    /* view & Apply Scholarships - Applyscholarships */
    @PostMapping("/applyscholarship/{scholarshipid}/{studentid}/{inchargeid}")
    public ResponseEntity<?> applyscholarship(@PathVariable Integer scholarshipid, @PathVariable Integer studentid, @PathVariable Integer inchargeid, @RequestBody Application obj) {
        var scholarinfo = scholarshipRepo.findById(scholarshipid).orElseThrow(() -> new RuntimeException("Scholarshipid not found"));
        var studinfo = studentRepo.findById(studentid).orElseThrow(() -> new RuntimeException("Studentid not found"));
        var inchargeinfo = inchargeRepo.findById(inchargeid).orElseThrow(() -> new RuntimeException("Inchargeid not found"));
        obj.setScholarship3(scholarinfo);
        obj.setStudent3(studinfo);
        obj.setStatus("Applied");
        obj.setApplicationdate(LocalDateTime.now());
        obj.setIncharge2(inchargeinfo);
        applicationRepo.save(obj);
        return new ResponseEntity<>("Applied Scholarship Successfully", HttpStatus.OK);
    }

    /* Display all Application details within startdate n enddate based on inchargeid - Viewapplications */
    @GetMapping("/getallapplications/{inchargeid}")
    public ResponseEntity<?> getallapplications(@PathVariable Integer inchargeid) {
        var inchargeinfo = inchargeRepo.findById(inchargeid)
                .orElseThrow(() -> new RuntimeException("Incharge ID not found"));

        List<Application> applicationsList = applicationRepo.findByIncharge2(inchargeid);
            return new ResponseEntity<>(applicationsList, HttpStatus.OK);
    }




    /* Display only Elegible applications based on some criteria - Viewelegiblelist */
    @GetMapping("/getEligibleApplications/{inchargeid}")
    public ResponseEntity<?> getEligibleApplications(
            @PathVariable Integer inchargeid)
    {
        var inchinfo = inchargeRepo.findById(inchargeid).orElseThrow(() -> new RuntimeException("Inchargeid not found"));
        List<Application> applications = applicationRepo.getApplicationsByInchargeAndDateRange(inchargeid);

        // Check if the date range is valid and applications exist
        if (!applications.isEmpty()) {
            return new ResponseEntity<>(applications, HttpStatus.OK);
        } else {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "No applications found for the given criteria.");
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    /* Update Status of Application after issuing scholarships */
    @PutMapping("/issuescholarship/{applicationid}")
    public ResponseEntity<?> issuescholarship(@PathVariable Integer applicationid)
    {
        var appinfo=applicationRepo.findById(applicationid).orElseThrow(()->new RuntimeException("Appliation id not found"));
        if ("Approved".equals(appinfo.getStatus())) {
            return new ResponseEntity<>("Scholarship already issued", HttpStatus.BAD_REQUEST);
        }
        appinfo.setStatus("Approved");
        applicationRepo.save(appinfo);
        return new ResponseEntity<>("Scholarship Issued",HttpStatus.OK);
    }

    /* view status - from student dashboard */
    @GetMapping("/viewstatus/{studentid}")
    public ResponseEntity<?> viewstatus(@PathVariable Integer studentid)
    {
        var studinfo=studentRepo.findById(studentid).orElseThrow(()->new RuntimeException("Studentid not found"));
        List<Application> applist=applicationRepo.findByStudent3(studinfo);

        // Filter the applications to only include those with an "approved" status
        List<Application> approvedApplications = applist.stream()
                .filter(application -> "approved".equalsIgnoreCase(application.getStatus()))
                .collect(Collectors.toList());
        if (approvedApplications.isEmpty()) {
            return new ResponseEntity<>("No Scholarships found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(approvedApplications, HttpStatus.OK);
    }
}






