const fs = require("fs");
const ExcelJS = require("exceljs");

const url = "https://go.microsoft.com/fwlink/?LinkID=521962";

function fetchExcelData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch the Excel file.");
      }
      return response.arrayBuffer();
    })
    .then((buffer) => {
      const workbook = new ExcelJS.Workbook();
      return workbook.xlsx.load(buffer);
    });
}

function filterRowsBySales(workbook) {
  const worksheet = workbook.getWorksheet("Sheet1");
  const filteredRows = worksheet
    .getRows(2, worksheet.rowCount)
    .filter((row) => {
      const value = row.getCell("J").value; // column J is a sales column
      return value > 50000;
    });
  return filteredRows.map((row) => row.values);
}

function createNewExcel(filteredRows) {
  const newExcel = new ExcelJS.Workbook();
  const newSheet = newExcel.addWorksheet("Sheet1");
  filteredRows.forEach((row) => newSheet.addRow(row));
  return newExcel;
}

function writeNewExcelToFile(newExcel) {
  return newExcel.xlsx.writeBuffer().then((data) => {
    fs.writeFileSync("NewData.xlsx", data);
  });
}

fetchExcelData(url)
  .then(filterRowsBySales)
  .then(createNewExcel)
  .then(writeNewExcelToFile)
  .then(() => {
    console.log("NewData.xlsx file created successfully.");
  })
  .catch((err) => {
    console.log("An error occurred:", err);
  });
