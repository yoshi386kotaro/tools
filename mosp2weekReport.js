//JQueryの読込み
!function () {
  var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-2.0.0.min.js");
  document.body.appendChild(script);
}();


// 15分刻みを0.25に
function changeMinuites(time) {
	time = time.replace(".15", ".25");
	time = time.replace(".30", ".50");
	time = time.replace(".45", ".75");

	//ついでに"-"を"0.00"
	time = time.replace("-","0.00");

	return time;
}

//年
var year = $("#pltSelectYear option[selected]").val();
var log="\n";

//一月分ループ
for(var i = 1; i < $(".UnderTable tr").length -2; i++) {
	//月日
	var date  = $(".UnderTable tr:eq("+i+") td:eq(1)").html();
	//曜日
	var day   = $(".UnderTable tr:eq("+i+") td:eq(2) span").html();
	//開始時間
	var start = changeMinuites($(".UnderTable tr:eq("+i+") td:eq(4)").html());
	//終了時間
	var end   = changeMinuites($(".UnderTable tr:eq("+i+") td:eq(5)").html());
	//勤時
	var time  = changeMinuites($(".UnderTable tr:eq("+i+") td:eq(6)").html());
	//自啓
	var jiko  = changeMinuites($(".UnderTable tr:eq("+i+") td:eq(10)").html());

	//自己啓発含む
	var aTime = Number(time) + Number(jiko);
	aTime = aTime.toFixed(2);

	log += year +"/" + date + "("+day+") "+ start + "～" +end +  " " + aTime + "H(自己啓発除く" + time + "H)\n";
}




//$(".UnderTable tr:eq(8) td:eq(16) input").click();
//$(".UnderTable tr:eq(8) [name=txtStartTime]").val("0900");
//$(".UnderTable tr:eq(8) [name=txtEndTime]").val("0900")
//$("#btnDraft").click();
//$("#btnRegist").click();