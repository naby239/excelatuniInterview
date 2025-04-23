CREATE TABLE Enrolments (
    Id uniqueidentifier NOT NULL,
    Institution varchar(255),
    Qualification varchar(255),
    QualificationType varchar(255),
	EnrolmentDate datetime,
    AverageToDate int,
	StudentId uniqueidentifier FOREIGN KEY REFERENCES Students(Id)
	PRIMARY KEY (ID),  
);