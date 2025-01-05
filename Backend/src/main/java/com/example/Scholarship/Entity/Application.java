package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ManyToAny;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter

public class Application
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer applicationid;

    @JsonFormat(pattern = "dd-MM-yyyy hh:mm a",timezone = "Asis/Kolkata")
    private LocalDateTime applicationdate;
    private String status;

    public Application()
    {
    }

    public Application(Integer applicationid, LocalDateTime applicationdate, String status, Scholarship scholarship3, Student student3, Incharge incharge2) {
        this.applicationid = applicationid;
        this.applicationdate = applicationdate;
        this.status = status;
        this.scholarship3 = scholarship3;
        this.student3 = student3;
        this.incharge2 = incharge2;
    }

    public Integer getApplicationid() {
        return applicationid;
    }

    public void setApplicationid(Integer applicationid) {
        this.applicationid = applicationid;
    }

    public LocalDateTime getApplicationdate() {
        return applicationdate;
    }

    public void setApplicationdate(LocalDateTime applicationdate) {
        this.applicationdate = applicationdate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Scholarship getScholarship3() {
        return scholarship3;
    }

    public void setScholarship3(Scholarship scholarship3) {
        this.scholarship3 = scholarship3;
    }

    public Student getStudent3() {
        return student3;
    }

    public void setStudent3(Student student3) {
        this.student3 = student3;
    }

    public Incharge getIncharge2() {
        return incharge2;
    }

    public void setIncharge2(Incharge incharge2) {
        this.incharge2 = incharge2;
    }

    @ManyToOne
    @JoinColumn(name="scholarshipid")
    private Scholarship scholarship3;

    @ManyToOne
    @JoinColumn(name="studentid")
    private Student student3;

    @ManyToOne
    @JoinColumn(name="inchargeid")
    private Incharge incharge2;
}
