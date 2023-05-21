CREATE TABLE [dbo].[Suppliers] (
    [SupplierId]      BIGINT         IDENTITY (1, 1) NOT NULL,
    [Name]            NVARCHAR (100) NULL,
    [TelephoneNumber] VARCHAR (20)   NULL,
    [DateCreated]     DATETIME       NULL,
    [DateUpdated]     DATETIME       NULL,
    PRIMARY KEY CLUSTERED ([SupplierId] ASC)
);

