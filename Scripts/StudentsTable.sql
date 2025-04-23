CREATE TABLE Students (
    Id uniqueidentifier NOT NULL,
    FirstName varchar(255),
    LastName varchar(255),
    Email varchar(255),
	IdNumber bigint UNIQUE,
    ProfileImage nvarchar(MAX),
	PRIMARY KEY (Id), 
);