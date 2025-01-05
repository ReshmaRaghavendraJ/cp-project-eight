package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Category
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryid;
    private String categoryname;

    public Category()
    {
    }

    public Category(Integer categoryid, String categoryname, List<Student> student2, List<Scholarship> scholarship2) {
        this.categoryid = categoryid;
        this.categoryname = categoryname;
        this.student2 = student2;
        this.scholarship2 = scholarship2;
    }

    public Integer getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Integer categoryid) {
        this.categoryid = categoryid;
    }

    public String getCategoryname() {
        return categoryname;
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
    }

    public List<Student> getStudent2() {
        return student2;
    }

    public void setStudent2(List<Student> student2) {
        this.student2 = student2;
    }

    public List<Scholarship> getScholarship2() {
        return scholarship2;
    }

    public void setScholarship2(List<Scholarship> scholarship2) {
        this.scholarship2 = scholarship2;
    }

    @OneToMany(mappedBy = "category1")
    @JsonIgnore
    private List<Student> student2;

    @OneToMany(mappedBy = "category2")
    @JsonIgnore
    private List<Scholarship> scholarship2;
}
