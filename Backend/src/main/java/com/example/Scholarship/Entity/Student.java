package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Student
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentid;
    private String studentname;
    private String studentusn;
    private String emailid;
    private String mobile;
    private String password;
    private String income;
    private String percentage;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String photo;

    public Student()
    {
    }

    public Student(Integer studentid, String studentname, String studentusn, String emailid, String mobile, String password, String income, String percentage, String photo, Course course2, Category category1, List<Application> application2) {
        this.studentid = studentid;
        this.studentname = studentname;
        this.studentusn = studentusn;
        this.emailid = emailid;
        this.mobile = mobile;
        this.password = password;
        this.income = income;
        this.percentage = percentage;
        this.photo = photo;
        this.course2 = course2;
        this.category1 = category1;
        this.application2 = application2;
    }

    public Integer getStudentid() {
        return studentid;
    }

    public void setStudentid(Integer studentid) {
        this.studentid = studentid;
    }

    public String getStudentname() {
        return studentname;
    }

    public void setStudentname(String studentname) {
        this.studentname = studentname;
    }

    public String getStudentusn() {
        return studentusn;
    }

    public void setStudentusn(String studentusn) {
        this.studentusn = studentusn;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public String getPercentage() {
        return percentage;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Course getCourse2() {
        return course2;
    }

    public void setCourse2(Course course2) {
        this.course2 = course2;
    }

    public Category getCategory1() {
        return category1;
    }

    public void setCategory1(Category category1) {
        this.category1 = category1;
    }

    public List<Application> getApplication2() {
        return application2;
    }

    public void setApplication2(List<Application> application2) {
        this.application2 = application2;
    }

    @ManyToOne
    @JoinColumn(name="courseid")
    private Course course2;

    @ManyToOne
    @JoinColumn(name="categoryid")
    private Category category1;

    @OneToMany(mappedBy = "student3")
    @JsonIgnore
    private List<Application> application2;
}
