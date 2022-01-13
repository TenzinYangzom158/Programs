<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>Employee Management System</head>
		
		<!-- CSS -->
	    <style>
	        table {
	            border-collapse: collapse;
	            width: 100%;
	        }
	  
	        th,
	        td {
	            text-align: left;
	            padding: 8px;
	        }
	  
	        tr:nth-child(even) {
	            background-color: #dfb8b8
	        }
	  
	        th {
	            background-color: #5e0202;
	            color: white;
	        }
	  
	    </style>
	    
		<body>
		<h1 style="text-align:center">Employee Management System</h1>
		
		<table border="2" align="center">
			<tr>
				<th>ID</th>
				<th>NAME</th>
				<th>AGE</th>
				<th>SALARY</th>
				<th>EMAIL</th>
				<th>MobNum</th>
				<th>Designation</th>
			</tr>
			
			<xsl:for-each select="Company/Employee">
			
			<tr>
				<td>
				<xsl:value-of select="@Emp_id"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_name"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_age"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_salary"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_emailid"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_Phonenum"></xsl:value-of>
				</td>
				<td>
				<xsl:value-of select="Emp_designation"></xsl:value-of>
				</td>
				
				<xsl:if test= "Emp_age >= 50">
				<td>Associate Project Manager</td>
				</xsl:if>
				<xsl:if test="Emp_age > 41">
				<td>Team Leader</td>
				</xsl:if>
				<xsl:if test="Emp_age < 40">
				<td>Developer</td>
				</xsl:if>
			</tr>
			
			</xsl:for-each>
		</table>
		
		</body>
		</html>
		
	</xsl:template>
</xsl:stylesheet>