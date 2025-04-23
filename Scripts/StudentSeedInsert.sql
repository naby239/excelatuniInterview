INSERT INTO Students(Id, FirstName, LastName, Email, IdNumber, ProfileImage)
VALUES 
('5a809efc-3769-406d-b27c-05b038df88ed','John','Stone','Student1@test.com',1234567891,''),
('8da78eb6-354c-4550-bd9d-7aaa417bb412','Mike','Allen','Student2@test.com',2345678912,''),
('dcc183d0-0282-4b65-927a-d4eacf6584ff','Kelly','Blue','Student3@test.com',3456789123,''),
('681b900a-2c5d-498e-9cff-9f9750d28f02','Allan','Barry','Student4@test.com',4567891234,''),
('60952ea4-2d9c-4389-bfef-a682881a364f','Clark','Kent','Student5@test.com',5678912345,'');

INSERT INTO Enrolments (Id, Institution,EnrolmentDate,AverageToDate,Qualification,QualificationType,StudentId)
VALUES
('06201667-65d0-40ed-ba6b-af5f40fa4731','UCT','2018-11-11',60,'BSc Eng','Undergrad','5a809efc-3769-406d-b27c-05b038df88ed'),
('09802df7-741b-461b-938e-978eeb929e1f','UWC','2023-11-11',60,'PG Eng','PostGrad','5a809efc-3769-406d-b27c-05b038df88ed');

INSERT INTO Enrolments (Id, Institution,EnrolmentDate,AverageToDate,Qualification,QualificationType,StudentId)
VALUES
('7cb6c045-635d-48c5-8495-29b1ab467fe5', 'UCT','2020-11-11',60,'BSc Comm Sci','Undergrad','8da78eb6-354c-4550-bd9d-7aaa417bb412'),
('43f373db-bd24-408b-a11e-6e48dadc2462', 'WITS','2024-11-11',60,'PG Comm Sci','PostGrad','8da78eb6-354c-4550-bd9d-7aaa417bb412');

INSERT INTO Enrolments (Id, Institution,EnrolmentDate,AverageToDate,Qualification,QualificationType,StudentId)
VALUES
('13276d13-da92-406a-9867-7f654f2a57a2', 'UCT','2017-11-11',60,'BSc Astro Phy','Undergrad','dcc183d0-0282-4b65-927a-d4eacf6584ff'),
('8831ba41-154c-4d9b-9a2f-09f4a2fbfd55', 'Tuks','2022-11-11',60,'PG Astro Phy','PostGrad','dcc183d0-0282-4b65-927a-d4eacf6584ff');

INSERT INTO Enrolments (Id, Institution,EnrolmentDate,AverageToDate,Qualification,QualificationType,StudentId)
VALUES
('f302d7d9-a706-4094-baab-cc4d2edd56b7','UCT','2019-11-11',60,'B Eng','Undergrad','681b900a-2c5d-498e-9cff-9f9750d28f02'),
('c8902c86-f8aa-423e-bc77-323a59eefc16','UJ','2024-11-11',60,'PG Eng','PostGrad','681b900a-2c5d-498e-9cff-9f9750d28f02');

INSERT INTO Enrolments (Id, Institution,EnrolmentDate,AverageToDate,Qualification,QualificationType,StudentId)
VALUES
('28826002-addb-4515-ae7d-b36d553fec96','UCT','2016-11-11',60,'BSc Chem','Undergrad','60952ea4-2d9c-4389-bfef-a682881a364f'),
('0e2fa98f-c8ea-4e26-8262-49884dc339b7','SPU','2021-11-11',60,'PG CHem','PostGrad','60952ea4-2d9c-4389-bfef-a682881a364f');