package com.example.Scholarship.Controller;

import com.example.Scholarship.Entity.Category;
import com.example.Scholarship.Repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class CategoryController
{
    @Autowired
    CategoryRepo categoryRepo;

    /* Add Category details */
    @PostMapping("/addcategory")
    public ResponseEntity<?> addcategory(@RequestBody Category obj)
    {
        Optional<Category> categoryinfo=categoryRepo.findByCategoryname(obj.getCategoryname());
        if(categoryinfo.isPresent())
        {
            return new ResponseEntity<>("Category already added",HttpStatus.OK);
        }
        else
        {
            categoryRepo.save(obj);
            return new ResponseEntity<>("Category Added Sucessfully", HttpStatus.OK);
        }
    }

    /* Display all category details */
    @GetMapping("/getallcategory")
    public ResponseEntity<?> getallcategory()
    {
        List<Category> categoryList=categoryRepo.findAll();
        return new ResponseEntity<>(categoryList,HttpStatus.OK);
    }
}
