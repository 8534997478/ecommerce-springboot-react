package com.ecommerce.ECOMM.Controller;

import com.ecommerce.ECOMM.Entity.*;
import com.ecommerce.ECOMM.Initializer.JwtUtil;
import com.ecommerce.ECOMM.Repository.AdminRepository;
import com.ecommerce.ECOMM.Repository.RoleRepository;
import com.ecommerce.ECOMM.Repository.UserRepository;
import com.ecommerce.ECOMM.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {
    private final UserRepository userRepo;
    private final AdminRepository adminRepo;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder encoder;
    private final RoleRepository roleRepository;
    private final UserService userService;

    public AuthController(UserRepository userRepo, AdminRepository adminRepo,
                          JwtUtil jwtUtil, PasswordEncoder encoder, RoleRepository roleRepository, UserService userService) {
        this.userRepo = userRepo;
        this.adminRepo = adminRepo;
        this.jwtUtil = jwtUtil;
        this.encoder = encoder;
        this.roleRepository = roleRepository;
        this.userService = userService;
    }

    // 🔹 Register User
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {

        Role roleUser = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("ROLE_USER not found"));

        user.setRoles(Set.of(roleUser));
        user.setPassword(encoder.encode(user.getPassword()));

        return new ResponseEntity<>(
                userService.registerUser(user),
                HttpStatus.CREATED
        );
    }
    // 🔹 REGISTER ADMIN
    @PostMapping("/register-admin")
    public ResponseEntity<Admin> registerAdmin(@RequestBody Admin admin) {

        // ✅ ROLE_ADMIN fetch
        Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                .orElseThrow(() -> new RuntimeException("ROLE_ADMIN not found"));

        admin.setRoles(Set.of(adminRole));
        admin.setPassword(encoder.encode(admin.getPassword()));

        Admin savedAdmin = adminRepo.save(admin);

        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }


    @PostMapping( value = "/login", consumes = "application/json",
            produces = "application/json")
    public AuthResponse login(@RequestBody LoginRequest req) {

        if (adminRepo.findByEmail(req.getEmail()).isPresent()) {
            Admin admin = adminRepo.findByEmail(req.getEmail()).get();
            if (!encoder.matches(req.getPassword(), admin.getPassword()))
                throw new RuntimeException("Invalid credentials");

            return new AuthResponse(
                    jwtUtil.generateToken(admin.getEmail(), "ROLE_ADMIN"),
                    "ADMIN"
            );
        }

        User user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!encoder.matches(req.getPassword(), user.getPassword()))
            throw new RuntimeException("Invalid credentials");
        System.out.println("🔥 LOGIN API HIT 🔥");



        return new AuthResponse(
                jwtUtil.generateToken(user.getEmail(), "ROLE_USER"),
                "USER"
        );
    }
}
