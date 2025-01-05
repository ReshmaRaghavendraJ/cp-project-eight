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

public class Incharge
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer inchargeid;
    private String inchargename;
    private String societyname;
    private String emailid;
    private String mobile;
    private String password;

    public Incharge()
    {
    }

    public Incharge(Integer inchargeid, String inchargename, String societyname, String emailid, String mobile, String password, List<Scholarship> scholarship1, List<Application> application3) {
        this.inchargeid = inchargeid;
        this.inchargename = inchargename;
        this.societyname = societyname;
        this.emailid = emailid;
        this.mobile = mobile;
        this.password = password;
        this.scholarship1 = scholarship1;
        this.application3 = application3;
    }

    public Integer getInchargeid() {
        return inchargeid;
    }

    public void setInchargeid(Integer inchargeid) {
        this.inchargeid = inchargeid;
    }

    public String getInchargename() {
        return inchargename;
    }

    public void setInchargename(String inchargename) {
        this.inchargename = inchargename;
    }

    public String getSocietyname() {
        return societyname;
    }

    public void setSocietyname(String societyname) {
        this.societyname = societyname;
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

    public List<Scholarship> getScholarship1() {
        return scholarship1;
    }

    public void setScholarship1(List<Scholarship> scholarship1) {
        this.scholarship1 = scholarship1;
    }

    public List<Application> getApplication3() {
        return application3;
    }

    public void setApplication3(List<Application> application3) {
        this.application3 = application3;
    }

    @OneToMany(mappedBy = "incharge1")
    @JsonIgnore
    private List<Scholarship> scholarship1;

    @OneToMany(mappedBy = "incharge2")
    @JsonIgnore
    private List<Application> application3;
}
