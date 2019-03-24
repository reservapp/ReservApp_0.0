CREATE TABLE IF NOT EXISTS users(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT,
    userLastname TEXT,
    email TEXT,
    userPassword TEXT,
    phone TEXT);

CREATE TABLE IF NOT EXISTS paymentMethod(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT,
    cardNumber TEXT,
    expiration TEXT,
    cvv TEXT,
    billingAddress TEXT,
    FOREIGN KEY(userId) REFERENCES users(id),);

INSERT INTO users (userName, userLastname, email, userPassword, phone) VALUES ('Josias', 'Carmona', 'josca@mail.com', 'p@ssword', '8091234567');
INSERT INTO users (userName, userLastname, email, userPassword, phone) VALUES ('Jhonncell', 'Jimenez', 'jhoji@mail.com', 'p@ssword', '8091234567');
INSERT INTO users (userName, userLastname, email, userPassword, phone) VALUES ('Raymond', 'Rowlland', 'rayro@mail.com', 'p@ssword', '8091234567');


INSERT INTO paymentMethod(cardNumber, expiration, cvv, billingAddress) VALUES ('2034123656574837', '1256', '112', 'C/ Renovacion No.60, Villa Concepcion');