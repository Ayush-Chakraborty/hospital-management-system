CREATE TABLE "consultant" (
	"id"	bvarchar(100) NOT NULL UNIQUE,
	"name"	varchar(128) NOT NULL,
	PRIMARY KEY("id")
)
CREATE TABLE "practitioner" (
	"id"	varchar(100) NOT NULL UNIQUE,
	"name"	varchar(128) NOT NULL,
	PRIMARY KEY("id")
)
CREATE TABLE "practitioner" (
	"id"	varchar(100) NOT NULL UNIQUE,
	"name"	varchar(128) NOT NULL,
	PRIMARY KEY("id")
)
CREATE TABLE "treatment" (
	"id"	varchar(64) NOT NULL UNIQUE,
	"name"	varchar(64),
	"catagory"	varchar(64),
	"disease"	varchar(64),
	"date"	varchar(64),
	"practitinoer"	varchar(64),
	"cost"	INTEGER,
	"issued"	varchar(10),
	"consultants"	TEXT,
	"surgeons"	TEXT,
	"insurance_charge"	INTEGER,
	PRIMARY KEY("id")
)