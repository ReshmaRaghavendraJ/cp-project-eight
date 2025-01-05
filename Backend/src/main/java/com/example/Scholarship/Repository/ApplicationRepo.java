package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.Application;
import com.example.Scholarship.Entity.Incharge;
import com.example.Scholarship.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ApplicationRepo extends JpaRepository<Application,Integer> {

    @Query("SELECT a FROM Application a " +
            "JOIN a.scholarship3 s " +
            "WHERE a.incharge2.id = :inchargeid " +
            "AND a.applicationdate BETWEEN s.startdate AND s.enddate")
    List<Application> findByIncharge2(@Param("inchargeid") Integer inchargeid);



    @Query("SELECT a FROM Application a " +
            "JOIN a.scholarship3 s " +
            "WHERE a.applicationdate BETWEEN s.startdate AND s.enddate " +
            "AND a.incharge2.inchargeid = :inchargeid " +
            "AND a.student3.income >= s.income " +
            "AND a.student3.percentage >= s.minipercentage " +
            "AND a.student3.category1.categoryid = s.category2.categoryid" )
    List<Application> getApplicationsByInchargeAndDateRange(
            @Param("inchargeid") Integer inchargeid);

    List<Application> findByStudent3(Student studinfo);
}
