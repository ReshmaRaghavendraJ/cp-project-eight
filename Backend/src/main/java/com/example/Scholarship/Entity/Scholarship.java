package com.example.Scholarship.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter

public class Scholarship
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer scholarshipid;
    private String scholarshipname;
    private String income;
    private String minipercentage;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Kolkata")
    private LocalDateTime startdate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Kolkata")
    private LocalDateTime enddate;
    private String amount;

    public Scholarship()
    {
    }

    public Scholarship(Integer scholarshipid, String scholarshipname, String income, String minipercentage, LocalDateTime startdate, LocalDateTime enddate, String amount, Incharge incharge1, Category category2, List<Application> application1) {
        this.scholarshipid = scholarshipid;
        this.scholarshipname = scholarshipname;
        this.income = income;
        this.minipercentage = minipercentage;
        this.startdate = startdate;
        this.enddate = enddate;
        this.amount = amount;
        this.incharge1 = incharge1;
        this.category2 = category2;
        this.application1 = application1;
    }

    public Integer getScholarshipid() {
        return scholarshipid;
    }

    public void setScholarshipid(Integer scholarshipid) {
        this.scholarshipid = scholarshipid;
    }

    public String getScholarshipname() {
        return scholarshipname;
    }

    public void setScholarshipname(String scholarshipname) {
        this.scholarshipname = scholarshipname;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public String getMinipercentage() {
        return minipercentage;
    }

    public void setMinipercentage(String minipercentage) {
        this.minipercentage = minipercentage;
    }

    public LocalDateTime getStartdate() {
        return startdate;
    }

    public void setStartdate(LocalDateTime startdate) {
        this.startdate = startdate;
    }

    public LocalDateTime getEnddate() {
        return enddate;
    }

    public void setEnddate(LocalDateTime enddate) {
        this.enddate = enddate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Incharge getIncharge1() {
        return incharge1;
    }

    public void setIncharge1(Incharge incharge1) {
        this.incharge1 = incharge1;
    }

    public Category getCategory2() {
        return category2;
    }

    public void setCategory2(Category category2) {
        this.category2 = category2;
    }

    public List<Application> getApplication1() {
        return application1;
    }

    public void setApplication1(List<Application> application1) {
        this.application1 = application1;
    }

    @ManyToOne
    @JoinColumn(name="inchargeid")
    private Incharge incharge1;

    @ManyToOne
    @JoinColumn(name="categoryid")
    private Category category2;

    @OneToMany(mappedBy = "scholarship3")
    @JsonIgnore
    private List<Application> application1;
}
