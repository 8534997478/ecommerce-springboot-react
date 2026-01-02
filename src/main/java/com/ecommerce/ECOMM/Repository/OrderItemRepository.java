package com.ecommerce.ECOMM.Repository;

import com.ecommerce.ECOMM.Entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
}
