// mock log data for testing

// services
const services = [
    "auth-service",
    "catalog-service",
    "payment-service",
    "notification-service",
    "shipping-service"
]

// sample messages that could possibly be logged
const messages = {
    "auth-service" :[
        {level : "INFO", message : "User logged in successfully."},
        {level : "INFO", message : "User registered successfully."},
        {level : "INFO", message : "User logged out successfully."},

        {level : "WARN", message : "Invalid username or password!"},
        {level : "WARN", message : "Too many login attempts!"},

        {level : "ERROR", message : "JWT verification failed!"},
        
        {level : "DEBUG", message : "username and password recieved from req.body..."}
    ],
    "catalog-service" : [
        {level : "INFO", message : "Product placed in catalog."},
        {level : "INFO", message : "Product description updated."},
        {level : "INFO", message : "Item has been removed."},

        {level : "WARN", message : "Product is out of stock."},
        {level : "WARN", message : "Limit reached, Too many placements."},

        {level : "ERROR", message : "Server Error! Database timeout."},

        {level : "DEBUG", message : "Product database connected successfully."}
    ],
    "payment-service" : [

        {level : "INFO", message : "Payment transfered to user's account."},
        {level : "INFO", message : "Sensitive card information updated."},
        {level : "INFO", message : "Transaction successfully completed."},

        {level : "WARN", message : "Card authorization failed due to expiration date."},
        {level : "WARN", message : "Account balance dropped below minimum balance."},

        {level : "ERROR", message : "Server Error! Failed to updated after successful capture."},

        {level : "DEBUG", message : "Verifying incoming profile on client."}
    ],
    "notification-service" : [
        {level : "INFO", message : "Email delivered to client successfully."},
        {level : "INFO", message : "Password verification code sent."},
        {level : "INFO", message : "Order confirmation email sent."},

        {level : "WARN", message : "Email delivery delayed."},
        {level : "WARN", message : "Email attachment not valid format."},

        {level : "ERROR", message : "Failed to send SMS notification. Server issues!"},

        {level : "DEBUG", message : "Product database connected successfull."}
    ],
    "shipping-service" : [
        {level : "INFO", message : "Shipment sucessfully created."},
        {level : "INFO", message : "Package picked up by carrier."},
        {level : "INFO", message : "Package delivered to client."},

        {level : "WARN", message : "Customer address needs further verification."},
        {level : "WARN", message : "Delivery delayed due to weather."},

        {level : "ERROR", message : "Failed to generate package label!"},

        {level : "DEBUG", message : "Package information recieved."}
    ]
}

module.exports = {services, messages}