CREATE TABLE [dbo].[Products] (
    [ProductID]   INT             NOT NULL,
    [SupplierID]  BIGINT          NULL,
    [ProductName] VARCHAR (255)   NULL,
    [Description] VARCHAR (255)   NULL,
    [Price]       DECIMAL (10, 2) NULL,
    [DateCreated] DATETIME        NULL,
    [DateUpdated] DATETIME        NULL,
    PRIMARY KEY CLUSTERED ([ProductID] ASC),
    FOREIGN KEY ([SupplierID]) REFERENCES [dbo].[Suppliers] ([SupplierId])
);

