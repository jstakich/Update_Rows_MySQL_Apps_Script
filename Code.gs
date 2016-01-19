function UpdateAllRecords() {
   
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet4 = ss.getSheets()[3];
   
   
 var ITEM_DESCRIPTION = ""
 var ITEM_CATEGORY  = ""
 var Building  = ""
  
  var data = sheet4.getDataRange().getValues();
  for (var i = 0; i < data.length; i++)
  {
     
   ITEM_DESCRIPTION = data[i][0];
   ITEM_CATEGORY = data[i][1];
   Building = data[i][2];
      
     
    if (ITEM_DESCRIPTION != "ITEM_DESCRIPTION")
                                       {
     
   var sql = "UPDATE test_table Set "
   sql = sql + "ITEM_CATEGORY = "
   sql = sql + "'"
   sql = sql + ITEM_CATEGORY
   sql = sql + "'"
   sql = sql + ","   
   sql = sql + " "
      sql = sql + "BUILDING = "
   sql = sql + "'"
   sql = sql + Building
   sql = sql + "'"
   sql = sql + " WHERE ITEM_DESCRIPTION = "
   sql = sql + "'"
   sql = sql + ITEM_DESCRIPTION
   sql = sql + "'"
  
    
 // Browser.msgBox(sql);
     
  var conn = Jdbc.getConnection("jdbc:mysql://db4free.net:3306/testdataj", "Username", "Password");
  var stmt = conn.createStatement();
  var count = stmt.executeUpdate(sql,1)
 
   
 var rs = stmt.getGeneratedKeys();
 while(rs.next())
    {
   Logger.log(rs.getString(1));
   stmt.close();
   conn.close();
    }
                                    }
 }
  
           }
