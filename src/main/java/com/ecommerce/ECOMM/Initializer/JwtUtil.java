package com.ecommerce.ECOMM.Initializer;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {

    // 🔐 Minimum 256-bit key required
    private static final String SECRET_KEY =
            "MY_SUPER_SECRET_KEY_1234567890123456";

    private static final long EXPIRATION_TIME =
            1000 * 60 * 60 * 24; // 24 hours

    // ✅ Generate JWT
    public String generateToken(String email, String role) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + EXPIRATION_TIME)
                )
                .signWith(Keys.hmacShaKeyFor(
                        SECRET_KEY.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    // ✅ Extract Email
    public String extractEmail(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(
                        SECRET_KEY.getBytes(StandardCharsets.UTF_8))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // ✅ Extract Role (IMPORTANT)
    public String extractRole(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(
                        SECRET_KEY.getBytes(StandardCharsets.UTF_8))
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("role", String.class);
    }
}
