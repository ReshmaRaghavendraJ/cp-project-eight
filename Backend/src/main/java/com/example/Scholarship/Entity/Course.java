package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Course
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseid;
    private String coursename;

    public Course()
    {
    }

    public Course(Integer courseid, String coursename, College college1, List<Student> student1) {
        this.courseid = courseid;
        this.coursename = coursename;
        this.college1 = college1;
        this.student1 = student1;
    }

    public Integer getCourseid() {
        return courseid;
    }

    public void setCourseid(Integer courseid) {
        this.courseid = courseid;
    }

    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public College getCollege1() {
        return college1;
    }

    public void setCollege1(College college1) {
        this.college1 = college1;
    }

    public List<Student> getStudent1() {
        return student1;
    }

    public void setStudent1(List<Student> student1) {
        this.student1 = student1;
    }

    @ManyToOne
    @JoinColumn(name = "collegeid")
    private College college1;

    @OneToMany(mappedBy = "course2")
    @JsonIgnore
    private List<Student> student1;
}
