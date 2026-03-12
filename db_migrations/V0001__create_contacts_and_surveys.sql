CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(200),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE family_surveys (
  id SERIAL PRIMARY KEY,
  child_name VARCHAR(200) NOT NULL,
  parent_name VARCHAR(200) NOT NULL,
  group_name VARCHAR(100),
  strengths TEXT NOT NULL,
  barriers TEXT NOT NULL,
  interests TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
