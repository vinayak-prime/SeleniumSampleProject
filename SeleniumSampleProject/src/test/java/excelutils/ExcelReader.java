package excelutils;

import java.io.File;
import java.io.FileInputStream;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelReader {

	XSSFWorkbook wb;
	XSSFSheet sheet;

	public ExcelReader(String excelpath) {

		try {
			File file = new File(excelpath);
			FileInputStream fis = new FileInputStream(file);
			wb = new XSSFWorkbook(fis);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String getData(String sheetName, int row, int column) {
		sheet = wb.getSheet(sheetName);
		String data = sheet.getRow(row).getCell(column).getStringCellValue();
		return data;
	}

}
