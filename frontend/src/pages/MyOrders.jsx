import { useEffect, useState } from "react";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const handleCancelOrder = (orderId) => {
        const updatedOrders = orders.map(order =>
            order.orderId === orderId
                ? { ...order, status: "CANCELLED" }
                : order
        );

        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };


    useEffect(() => {
        const orders =
            JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(orders);
    }, []);

    if (orders.length === 0) {
        return (
            <div className="pt-24 text-center mb-20">
                <h2 className="text-xl font-semibold">
                    No orders found
                </h2>
                <p className="text-gray-500 mt-2">
                    You haven’t placed any orders yet
                </p>
            </div>
        );
    }

    return (
        <div className="pt-8 px-4 max-w-5xl mx-auto mb-20">
            <h1 className="text-3xl font-bold mb-8">My Orders</h1>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div
                        key={order.orderId}
                        className="border rounded-lg p-6 shadow-sm"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between mb-4 items-center">
                            <div>
                                <p className="font-semibold">
                                    Order #{order.orderId}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Placed on{" "}
                                    {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className={`px-3 py-2 text-sm rounded-full font-medium
                                        ${order.status === "PLACED" && "bg-blue-100 text-blue-700"}
                                        ${order.status === "CONFIRMED" && "bg-indigo-100 text-indigo-700"}
                                        ${order.status === "SHIPPED" && "bg-yellow-100 text-yellow-700"}
                                        ${order.status === "DELIVERED" && "bg-green-100 text-green-700"}
                                        ${order.status === "CANCELLED" && "bg-red-100 text-red-700"}
                                    `}
                                >
                                    {order.status}
                                </span>

                                {/* CANCEL BUTTON */}
                                {order.status === "PLACED" && (
                                    <button
                                        onClick={() => handleCancelOrder(order.orderId)}
                                        className="text-sm text-red-600  px-3 py-2 bg-red-200 rounded-full hover:bg-red-300"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </div>


                        {/* ITEMS */}
                        <div className="space-y-3 border-t pt-4">
                            {order.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            className="w-12 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Size: {item.size} × {item.quantity}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-sm font-medium">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* ADDRESS */}
                        <div className="mt-4 text-sm text-gray-700">
                            <p className="font-medium">Delivery Address</p>
                            <p>
                                {order.shippingAddress.address1},{" "}
                                {order.shippingAddress.city},{" "}
                                {order.shippingAddress.state} –{" "}
                                {order.shippingAddress.pincode}
                            </p>
                        </div>

                        {/* PAYMENT + TOTAL */}
                        <div className="flex justify-between mt-4 border-t pt-4 font-semibold">
                            <span>Total Amount<br />{order.paymentMethod}</span>
                            <span>₹{order.totalAmount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
