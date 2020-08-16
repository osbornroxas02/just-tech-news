DROP DATABASE IF EXISTS just_tech_news_db;
CREATE DATABASE just_tech_news_db;

INSERT INTO users (username, email, password)
VALUES (
    "Lernantino",
    "lernantino@gmail.com",
    "password1234"
  );
  
UPDATE users
SET username = "Lernantino",
  email = "lernantino@gmail.com",
  password = "newPassword1234"
WHERE id = 1;