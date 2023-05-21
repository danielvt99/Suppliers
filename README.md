Certainly! Here's an updated version of the instructions that includes the requirement of Visual Studio 2022 and Angular CLI:

Running the Solution:
1. Clone or download the repository to your local machine.
2. Restore the database:
   - Option 1: Use the backup database project:
     - Make sure you have sql server data tools installed for this step.
     - Restore a backup of the Suppliers database into your SQL Server instance.
     - It rests in the directory Suppliers\SupplierDatabase\SupplierDb.bak
   - Option 2: Deploy the database project:
     - Open the Supplier database project in Visual Studio 2022.
     - publish the project to generate the base structure and name it appropriately.
     - Execute the generated scripts to create the Suppliers database schema.
     - Run the insert scripts provided to populate the database with sample data.
   - Option 3: Run the scripts solution:
     - Open the Supplier database project in Visual Studio 2022.
     - Run the Create Supplier Database and tables.sql
     - run the InsertSuppliers.sql
3. Update the connection string:
   - Open the file `Suppliers\DataContext\Models\DatabaseContext.cs`.
   - Navigate to line 24 and modify the connection string to match your local database configuration.
4. Run the Web API project:
   - Open a console or terminal window.
   - Navigate to the root directory of the Web API project.
   - Run the command `dotnet run` to start the Web API server.
5. Run the Web UI project:
   - Open a new instance of Visual Studio 2022.
   - Open the solution file `Suppliers.sln` located in the root directory of the project.
   - Make sure you have Angular CLI installed globally. If not, run the command `npm install -g @angular/cli` to install it.
   - Open a console or terminal window.
   - Navigate to the root directory of the Web UI project (`Suppliers\Suppliers.WebUI\ClientApp`).
   - Run the command `npm install` to install the project dependencies.
   - Run the command `ng serve` to start the Angular development server.
6. Open your web browser and go to the following URL: `http://localhost:4200`.
7. Interact with the application and view the results.

Make sure you have the necessary dependencies installed and configured, such as .NET Core runtime, SQL Server, Visual Studio 2022, and Angular CLI, before running the solution.
