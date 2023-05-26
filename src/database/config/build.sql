BEGIN;

DROP TABLE IF EXISTS users, documents, contents CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) UNIQUE NOT NULL,
  email VARCHAR(150) UNIQUE,
  password TEXT NOT NULL,
  image TEXT NULL DEFAULT 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png'
);
INSERT INTO users (username,
    email,
    password)
    VALUES ('admin',
    'THIS@gmail.com',
    '$2');


CREATE TABLE documents(
  id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  user_id INT,
  created_at TIMESTAMP NOT NULL,
  last_opened TIMESTAMP NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO documents (title,
    user_id,
    created_at,
    last_opened)
    VALUES ('test',
    1,
    '2018-01-01 00:00:00',
    '2018-01-01 00:00:00');


CREATE TABLE contents(
    id SERIAL PRIMARY KEY NOT NULL,
    inner_content TEXT,
    document_id uuid REFERENCES documents(id) ON DELETE CASCADE   
);


COMMIT;

