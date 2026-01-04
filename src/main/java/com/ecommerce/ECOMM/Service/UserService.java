package com.ecommerce.ECOMM.Service;

import com.ecommerce.ECOMM.Entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User registerUser(User user);

    Optional<User> getUserByEmail(String email);

    User getUserById(Long id);

    List<User> getAllUsers();

    void deleteUser(Long id);
}
