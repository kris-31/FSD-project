package com.mscomm.departmentservice.service;

import java.util.List;

import com.mscomm.departmentservice.entity.*;

public interface DepartmentService {
    Department saveDepartment(Department department);

    Department getDepartmentById(Long departmentId);

	List<Department> getallarticles();
}