package com.example.Scholarship.Repository;

import com.example.Scholarship.Entity.Incharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InchargeRepo extends JpaRepository<Incharge,Integer>
{

    Optional<Incharge> findByEmailid(String emailid);
}
