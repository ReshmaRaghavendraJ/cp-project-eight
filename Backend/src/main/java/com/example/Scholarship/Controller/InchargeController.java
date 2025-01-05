package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Incharge;
import com.example.Scholarship.Repository.InchargeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")

public class InchargeController
{
    @Autowired
    InchargeRepo inchargeRepo;

    /* Incharge - login check */
    @GetMapping("/inchargelogincheck/{emailid}/{password}")
    public ResponseEntity<?> inchargelogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Incharge by email ID
            Incharge inchargeinfo = inchargeRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!inchargeinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Incharge Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Incharge info if login is successful
                return new ResponseEntity<>(inchargeinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }

    /* Add Incharge details */
    @PostMapping("/addinchargedetails")
    public ResponseEntity<?> addinchargedetails(@RequestBody Incharge obj)
    {
        var inchargeinfo=inchargeRepo.save(obj);
        return new ResponseEntity<>("Incharge details Added Successfully",HttpStatus.OK);
    }

    /* Display all Incharge details */
    @GetMapping("/getallincharges")
    public ResponseEntity<?> getallincharges()
    {
        List<Incharge> inchargelist=inchargeRepo.findAll();
        return new ResponseEntity<>(inchargelist,HttpStatus.OK);
    }
}
