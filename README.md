# Suppliers

Running the Solution:
1. Clone or download the repository to your local machine.
2. Restore the database:
   - Option 1: Use the backup database project:
     - Restore a backup of the Suppliers database into your SQL Server instance.
   - Option 2: Deploy the database project:
     - Open the database project in Visual Studio.
     - Build the project to generate the SQL scripts.
     - Execute the generated scripts to create the Suppliers database schema.
     - Run the insert scripts provided to populate the database with sample data.
3. Update the connection string:
   - Open the file `Suppliers\DataContext\Models\DatabaseContext.cs`.
   - Navigate to line 24 and modify the connection string to match your local database configuration.
4. Run the Web API project:
   - Open a console or terminal window.
   - Navigate to the root directory of the Web API project.
   - Run the command `dotnet run` to start the Web API server or use visual studio to run the project.
5. Run the Web UI project:
   - Open another console or terminal window.
   - Navigate to the root directory of the Web UI project.
   - Run the command `ng serve` to start the Web UI server.
6. Open your web browser and go to the following URL: `http://localhost:4200` 
7. Interact with the application and view the results.

Make sure you have the necessary dependencies installed and configured, such as .NET Core runtime and SQL Server, before running the solution.
