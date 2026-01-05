package com.ecommerce.ECOMM.Service;

import com.ecommerce.ECOMM.Entity.Admin;
import com.ecommerce.ECOMM.Entity.Role;
import com.ecommerce.ECOMM.Repository.AdminRepository;
import com.ecommerce.ECOMM.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service
public class AdminServiceImpl implements AdminService {
    private final AdminRepository adminRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository,
                            RoleRepository roleRepository) {
        this.adminRepository = adminRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Admin registerAdmin(Admin admin) {
        // 🔹 ROLE_ADMIN fetch or create
        Role adminRole = roleRepository.findByName("ROLE_ADMIN")
                .orElseGet(() -> {
                    Role role = new Role();
                    role.setName("ROLE_ADMIN");
                    return roleRepository.save(role);
                });

        Set<Role> roles = new HashSet<>();
        roles.add(adminRole);

        admin.setRoles(roles);

        return adminRepository.save(admin);
    }
}
