package com.ecommerce.ECOMM.Controller;

import com.ecommerce.ECOMM.Entity.Role;
import com.ecommerce.ECOMM.Entity.User;
import com.ecommerce.ECOMM.Repository.RoleRepository;
import com.ecommerce.ECOMM.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")

public class UserController {
    private final UserService userService;
    private final RoleRepository roleRepository;

    @Autowired
    public UserController(UserService userService, RoleRepository roleRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
    }
    @GetMapping("/dashboard")
    public String userDashboard() {
        return "Welcome User 🚀";
    }



}
