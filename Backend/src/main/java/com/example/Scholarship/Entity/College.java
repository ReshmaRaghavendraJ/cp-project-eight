package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer collegeid;
    private String collegename;

    public College()
    {
    }

    public College(Integer collegeid, String collegename, List<Course> course1) {
        this.collegeid = collegeid;
        this.collegename = collegename;
        this.course1 = course1;
    }

    public Integer getCollegeid() {
        return collegeid;
    }

    public void setCollegeid(Integer collegeid) {
        this.collegeid = collegeid;
    }

    public String getCollegename() {
        return collegename;
    }

    public void setCollegename(String collegename) {
        this.collegename = collegename;
    }

    public List<Course> getCourse1() {
        return course1;
    }

    public void setCourse1(List<Course> course1) {
        this.course1 = course1;
    }

    @OneToMany(mappedBy = "college1")
    @JsonIgnore
    private List<Course> course1;
}
