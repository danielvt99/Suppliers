-- Create the database
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'Supplier')
BEGIN
    CREATE DATABASE Supplier;
END;
GO

-- Create the Products table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Products]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Products](
        [ProductID] [int] NOT NULL,
        [SupplierID] [bigint] NULL,
        [ProductName] [varchar](255) NULL,
        [Description] [varchar](255) NULL,
        [Price] [decimal](10, 2) NULL,
        [DateCreated] [datetime] NULL,
        [DateUpdated] [datetime] NULL,
        PRIMARY KEY CLUSTERED 
        (
            [ProductID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    );
END;
GO

-- Create the Suppliers table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Suppliers]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Suppliers](
        [SupplierId] [bigint] IDENTITY(1,1) NOT NULL,
        [Name] [nvarchar](100) NULL,
        [TelephoneNumber] [varchar](20) NULL,
        [DateCreated] [datetime] NULL,
        [DateUpdated] [datetime] NULL,
        PRIMARY KEY CLUSTERED 
        (
            [SupplierId] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
    );
END;
GO