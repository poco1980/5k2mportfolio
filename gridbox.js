dhtmlxEvent(window,"load",function(){
    mygrid = new dhtmlXGridObject("mygrid_container");
    mygrid.setImagePath("./codebase/imgs/");                 
    mygrid.setHeader("Symbols,Quantity,Cost Price,Original Investment,Today's Price,$ Change Dollar,$ Change Percentage,$ Change Value,Existing Value,Gain/Loss $ Change,Gain/Loss % Change");//the headers of columns  
    //mygrid.setInitWidths("100,100,100,100,100,100,100,100,100,100,100");          //the widths of columns  
    mygrid.setColAlign("left,right,right,right,right,right,right,right,right,right,right");       //the alignment of columns
    mygrid.setSkin("dhx_skyblue");
    mygrid.setColTypes("ro,ed,ed,ed");                //the types of columns  
    mygrid.setColSorting("str,int,int,int,int,int,int,int,int,int,int");          //the sorting types   
    mygrid.init();      //finishes i
    mygrid.load("connector.php");

    var dp = new dataProcessor("codebase/connector/update.php");
    dp.init(mygrid);
    dp.setUodateMode("off")
    dp.sendData();

});
