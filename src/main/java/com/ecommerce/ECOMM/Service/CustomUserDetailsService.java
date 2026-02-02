package com.ecommerce.ECOMM.Service;

import com.ecommerce.ECOMM.Entity.Admin;
import com.ecommerce.ECOMM.Entity.Role;
import com.ecommerce.ECOMM.Entity.User;
import com.ecommerce.ECOMM.Repository.AdminRepository;
import com.ecommerce.ECOMM.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepo;
    private final AdminRepository adminRepo;

    public CustomUserDetailsService(UserRepository userRepo, AdminRepository adminRepo) {
        this.userRepo = userRepo;
        this.adminRepo = adminRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String email) {

        if (adminRepo.findByEmail(email).isPresent()) {
            Admin admin = adminRepo.findByEmail(email).get();
            return new CustomUserDetails(
                    admin.getEmail(),
                    admin.getPassword(),
                    admin.getRoles().stream().map(Role::getName).collect(Collectors.toSet())
            );
        }

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new CustomUserDetails(
                user.getEmail(),
                user.getPassword(),
                user.getRoles().stream().map(Role::getName).collect(Collectors.toSet())
        );
    }
}
