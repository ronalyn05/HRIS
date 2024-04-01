const config = require('./dbConfig');
const sql = require('mssql');
const xlsx = require('xlsx');
const Employee = require('./employee');
// const NewHireEmp = require('./newHireEmp');

// Function to read Excel file and insert data into the database
const insertEmployeesFromExcel = async (filePath) => {
    try {
        // Load Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const sheet = workbook.Sheets[sheetName];
        
        // Parse Excel data
        const data = xlsx.utils.sheet_to_json(sheet);

        // Insert each row into the database
        for (const row of data) {
            const newEmp = new Employee(row.employee_name, row.department, row.salary);
            await insertEmployee(newEmp); // Assuming insertEmployee function is defined elsewhere
        }
        // console.log("Data inserted successfully!");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

//Display the list
const getEmployees = async (Email, Password) => {
    try {
      let pool = await sql.connect(config);
      let result = await pool.request()
        .input('Email', sql.VarChar, Email)
        .input('Password', sql.VarChar, Password)
        .query('SELECT * FROM UserAccount WHERE Email = @Email AND Password = @Password');
    
      return result.recordset;
    } catch (error) {
      throw error;
    }
  };

//insert user account to USER ACCOUNT table
const insertEmployee = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .input('UserName', Employee.UserName)
            .input('LastName', Employee.LastName)
            .input('FirstName', Employee.FirstName)
            .input('MiddleName', Employee.MiddleName)
            .input('Email', Employee.Email)
            .input('Password', Employee.Password)
            .query(`
                INSERT INTO UserAccount ( LastName, FirstName, MiddleName, Email, Password, UserName)
                VALUES ( @LastName, @FirstName, @MiddleName, @Email, @Password, @UserName)
            `); 
        return employee;
    } catch (error) {
        console.log(error);
    }
}

//store user account to Employee table
const insertNewHire = async (newHire) => {
    try {
        let pool = await sql.connect(config);
        let newemployee = await pool.request()
            .input('Name', newHire.Name)
            .input('FirstName', newHire.FirstName)
            .input('MiddleName', newHire.MiddleName)
            .input('LastName', newHire.LastName)
            .input('MaidenName', newHire.MaidenName)
            .input('Birthdate', newHire.Birthdate)
            .input('Age', newHire.Age)
            .input('BirthMonth', newHire.BirthMonth)
            .input('AgeBracket', newHire.AgeBracket)
            .input('Gender', newHire.Gender)
            .input('MaritalStatus', newHire.MaritalStatus)
            .input('SSS', newHire.SSS)
            .input('PHIC', newHire.PHIC)
            .input('HDMF', newHire.HDMF)
            .input('TIN', newHire.TIN)
            // .input('AddressID', newHire.EmpAddressID)
            .input('HRANID', newHire.HRANID)
            .input('ContactNumber', newHire.ContactNumber)
            .input('EmailAddress', newHire.EmailAddress)
            .query(`
            INSERT INTO Employee (Name, FirstName, MiddleName, LastName, MaidenName, 
                Birthdate, Age, BirthMonth, AgeBracket, Gender,
                MaritalStatus, SSS, PHIC, HDMF, TIN, HRANID, ContactNumber, 
                EmailAddress) 
            VALUES (@Name, @FirstName, @MiddleName, @LastName, @MaidenName,
                    @Birthdate, @Age, @BirthMonth, @AgeBracket, @Gender, @MaritalStatus,
                    @SSS, @PHIC, @HDMF, @TIN, @HRANID, @ContactNumber, @EmailAddress)
        `); 
            
        return newemployee;
    } catch (error) {
        console.log(error);
    }
}
// Retrieve all new hire employees from the database
const getAllNewHireEmployees = async () => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM Employee');
        return result.recordset;
    } catch (error) {
        console.error('Error fetching new hire employees:', error);
        throw error;
    }
};
// Retrieve employee by ID from the database
const getEmployeeById = async (employeeId) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool
            .request()
            .input('employeeId', sql.Int, employeeId)
            .query('SELECT * FROM Employee WHERE EmpID = @employeeId');

        if (result.recordset.length === 0) {
            return null; // Return null if employee with given ID is not found
        }
        
        return result.recordset[0]; // Return the first employee found with the given ID
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
};

const updateEmployeeById = async (employeeId, updatedEmployeeData) => {
    try {
      let pool = await sql.connect(config);
      let result = await pool.request()
        .input('employeeId', sql.Int, employeeId)
        .input('Name', sql.VarChar(255), updatedEmployeeData.Name)
        .input('LastName', sql.VarChar(255), updatedEmployeeData.LastName)
        .input('FirstName', sql.VarChar(255), updatedEmployeeData.FirstName)
        .input('MiddleName', sql.VarChar(255), updatedEmployeeData.MiddleName)
        .input('MaidenName', sql.VarChar(255), updatedEmployeeData.MaidenName)
        .input('Birthdate', sql.VarChar(255), updatedEmployeeData.Birthdate)
        .input('Age', sql.VarChar(255), updatedEmployeeData.Age)
        .input('BirthMonth', sql.VarChar(255), updatedEmployeeData.BirthMonth)
        .input('AgeBracket', sql.VarChar(255), updatedEmployeeData.AgeBracket)
        .input('Gender', sql.VarChar(255), updatedEmployeeData.Gender)
        .input('MaritalStatus', sql.VarChar(255), updatedEmployeeData.MaritalStatus)
        .input('SSS', sql.VarChar(255), updatedEmployeeData.SSS)
        .input('PHIC', sql.VarChar(255), updatedEmployeeData.PHIC)
        .input('HDMF', sql.VarChar(255), updatedEmployeeData.HDMF)
        .input('TIN', sql.VarChar(255), updatedEmployeeData.TIN)
        .input('HRANID', sql.VarChar(255), updatedEmployeeData.HRANID)
        .input('ContactNumber', sql.VarChar(255), updatedEmployeeData.ContactNumber)
        .input('EmailAddress', sql.VarChar(255), updatedEmployeeData.EmailAddress)
        
        .query(`
          UPDATE Employee 
          SET Name = @Name,
              LastName = @LastName, 
              FirstName = @FirstName,
              MiddleName = @MiddleName,
              MaidenName = @MaidenName, 
              Birthdate = @Birthdate,
              Age = @Age,
              BirthMonth = @BirthMonth,
              AgeBracket = @AgeBracket,
              Gender = @Gender,
              MaritalStatus = @MaritalStatus,
              SSS = @SSS,
              PHIC = @PHIC,
              HDMF = @HDMF,
              TIN = @TIN,
              HRANID = @HRANID, 
              ContactNumber = @ContactNumber,
              EmailAddress = @EmailAddress
          WHERE EmpID = @employeeId
        `);
  
      return result;
    } catch (error) {
      console.error('Error updating employee by ID:', error);
      throw error;
    }
  };
  
//Update the employee 
const updatedEmp = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request().query(`
            UPDATE Employee 
            SET employee_name = '${Employee.employee_name}', 
                department = '${Employee.department}', 
                salary = ${Employee.salary} 
            WHERE employee_id = ${Employee.employee_id}
        `);
        return employee;
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    insertEmployeesFromExcel,
    updatedEmp,
    insertEmployee, 
    getEmployees ,
    insertNewHire,
    getAllNewHireEmployees,
    updateEmployeeById,
    getEmployeeById
};