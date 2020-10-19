// 農場_品種代號
VarietyCode=new Array();
VarietyCode[0]=["請選擇品種"];
VarietyCode[1]=["請選擇品種", "13-6", "D4-13", "屏東白", "NOV7-6", "JUL4-32", "JUNL1-124", "久香", "91-27", "JUL7-8", "N2-7", "28-28", "JUN7-1", "OCT10-8", "SL1-47"];// 屏東
VarietyCode[2]=["請選擇品種", "PW", "OCT10-8", "D4-3", "13-6", "JUL7-8", "NOV7-6", "豐香"];// 六股
VarietyCode[3]=["請選擇品種", "PW", "OCT10-8", "D4-3", "13-6", "JUL7-8", "NOV7-6", "N2-7", "A(N2-7)", "B(5-43)", "C(1-13)", "G(13-6)", "天使白", "珍珠白", "香水", "ST6-5", "MM系列", "JY8-11", "MM1", "MM2", "MM4", "MM6", "豐香", "JUN7-1", "JUN11-124"];// 五峰
VarietyCode[4]=["請選擇品種"];// 大湖

function renew(index){
	for(var i=0;i<VarietyCode[index].length;i++){
		document.Farm_VarietyCode.Variety.options[i]=new Option(VarietyCode[index][i], VarietyCode[index][i]);	// 設定新選項
	}		
	document.Farm_VarietyCode.Variety.length=VarietyCode[index].length;	// 刪除多餘的選項
}
/*==============================================================*/
tArray = new Array();   //先宣告一維
for(var i=0;i<100;i++){//宣告二維
	tArray[i]=new Array();
}

tArray[0][0]="編號";
tArray[0][1]="日期";
tArray[0][2]="時間";
tArray[0][3]="記錄人員";
tArray[0][4]="農場位置";
tArray[0][5]="品種代號";
tArray[0][6]="大小";
tArray[0][7]="數量變化";

var ttest1;
function Submit_data(){ //送出資料
	var trid = new Date().getTime();
	var objtr=document.createElement('tr');
	objtr.id=trid;

	document.getElementById("tbodyid").appendChild(objtr);
	var tbodyobj=document.getElementById('tbodyid');
	var countchildren=tbodyobj.childElementCount;
	var numbering=countchildren;
	ttest1 = countchildren;

	if(document.getElementById("bday").value==''){
		alert('日期未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("usr_time").value==''){
		alert('時間未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("Person_name").value==''){
		alert('記錄人員未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("Location").value==''){
		alert('農場位置未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("Variety").value=='請選擇品種'){
		alert('品種代號未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("Choose_size").value==''){
		alert('大小未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}
	else if(document.getElementById("QuantityChange").value==''){
		alert('數量變化未填');
		document.getElementById('tbodyid').removeChild(objtr);
		return ;
	}

	objtr.innerHTML="<td></td> " + "<td></td> " + "<td></td> " + "<td></td> " +	  					  				
	  				"<td></td> " + "<td></td> " + "<td></td> " + "<td></td> " +					
					"<td><button onclick='Delete_data(this)'>刪除</button></td>";

	tArray[numbering][0]=countchildren;
	tArray[numbering][1]=document.getElementById("bday").value;
	tArray[numbering][2]=document.getElementById("usr_time").value;
	tArray[numbering][3]=document.getElementById("Person_name").value;
	tArray[numbering][4]=document.getElementById("Location").value;
	tArray[numbering][5]=document.getElementById("Variety").value;
	tArray[numbering][6]=document.getElementById("Choose_size").value;
	tArray[numbering][7]=document.getElementById("QuantityChange").value;

	for (var i=1;i<=countchildren;i++){
		for(var j=0;j<8;j++){
			tbodyobj.children[i-1].children[j].innerHTML = tArray[i][j];
		}
	}
}

function Delete_data(obj){	//刪除資料
	var x=1;
	var trid=obj.parentNode.parentNode.id;
	var objtr=document.getElementById(trid);
	document.getElementById('tbodyid').removeChild(objtr);
	var deleteRow = ++objtr.firstChild.innerHTML;
	var tbody=document.getElementById('tbodyid');
	var countchildren=++tbody.childElementCount;
	for (let i=deleteRow;i<=countchildren;i++){
		for(let j=1;j<8;j++){
			tArray[i-1][j] = tArray[i][j];
		}
	}
	
	tArray.splice(countchildren, 1);

	for (let i=1;i<=(countchildren-1);i++){
		tbody.children[i-1].children[0].innerHTML=i;
		for(let j=1;j<8;j++){
			tbody.children[i-1].children[j].innerHTML=tArray[i][j];
		}
	}
}

(function(document) {
	'use strict';
  
	// 建立 LightTableFilter
	var LightTableFilter = (function(Arr) {
  
	  var _input;
  
	  // 資料輸入事件處理函數
	  function _onInputEvent(e) {
		_input = e.target;
		var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
		Arr.forEach.call(tables, function(table) {
		  Arr.forEach.call(table.tBodies, function(tbody) {
			Arr.forEach.call(tbody.rows, _filter);
		  });
		});
	  }
  
	  // 資料篩選函數，顯示包含關鍵字的列，其餘隱藏
	  function _filter(row) {
		var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
		row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
	  }
  
	  return {
		// 初始化函數
		init: function() {
		  var inputs = document.getElementsByClassName('light-table-filter');
		  Arr.forEach.call(inputs, function(input) {
			input.oninput = _onInputEvent;
		  });
		}
	  };
	})(Array.prototype);
  
	// 網頁載入完成後，啟動 LightTableFilter
	document.addEventListener('readystatechange', function() {
	  if (document.readyState === 'complete') {
		LightTableFilter.init();
	  }
	});
  
  })(document);


// let downloadBtn = document.querySelector(".downloadBtn");
// downloadBtn.addEventListener("click", downloadFile);

// function downloadFile() {
//   //藉型別陣列建構的 blob 來建立 URL
//   let fileName = "fileName.csv";
//   const data = "\uFEFF"+ getRandomData();
//   let blob = new Blob([data], {
//     type: "application/octet-stream"
//   });
//   var href = URL.createObjectURL(blob);
//   // 從 Blob 取出資料
//   var link = document.createElement("a");
//   document.body.appendChild(link);
//   link.href = href;
//   link.download = fileName;
//   link.click();
// }

// //假資料
// function getRandomData() {
//   var data = "";
//   for (let i = 0; i <= ttest1; i++) {
// 	for (var j = 0; j < 8; j++) {
// 		data = data + tArray[i][j] + ",";
// 	}
//     data = data + "\n";
//   }
//   return data;
// }


$(document).ready(function () {
      
	//綁定change事件，讀xlsx檔
	$('#upload_input').on('change', function (e) {

		//取得上傳第一個檔案
		var files = e.target.files;
		var f = files[0]; 

		//使用FileReader讀檔
		var reader = new FileReader();

		//檔案名稱
		var name = f.name;

		//onload觸發事件
		reader.onload = function (e) {

			//對象內資料
			var data = e.target.result;

			//讀取xlsx資料
			var retjson = readxlsx(data, 'json');
			var retcsv = readxlsx(data, 'csv');

			//顯示內容
			$('#upload_showjson').html(JSON.stringify(retjson, null, '\t'));
			$('#upload_showcsv').html(retcsv);

		};

		//以BinaryString讀入
		reader.readAsBinaryString(f);

	});

	//綁定click事件，下載xlsx檔
	$('#download_button').on('click', function () {

		//檔名
		var filename = 'download.xlsx';

		//表名
		var sheetname = 'test';

		//資料
		var data = tArray;
		// var data = [
		// 	['name', 'number', 'date'],
		// 	['abc', 1, new Date().toLocaleString()],
		// 	['def', 123.456, new Date('2015-03-25T13:30:12Z')],
		// ];

		//下載
		downloadxlsx(filename, sheetname, data);
	})

});


function readxlsx(inpdata, fmt) {
	//讀取xlsx檔

	//參數
	//inpdata為由input file讀入之data
	//fmt為讀取格式，可有"json"或"csv"，csv格式之分欄符號為逗號，分行符號為[\n]

	//說明
	//所使用函式可參考js-xlsx的GitHub文件[https://github.com/SheetJS/js-xlsx]

	//to_json
	function to_json(workbook) {
		var result = {};
		workbook.SheetNames.forEach(function (sheetName) {
			var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
			if (roa.length > 0) {
				result[sheetName] = roa;
			}
		});
		return result;
	}

	//to_csv
	function to_csv(workbook) {
		var result = [];
		workbook.SheetNames.forEach(function(sheetName) {
			var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
			if(csv.length > 0){
				result.push('SHEET: ' + sheetName);
				result.push('\n');
				result.push(csv);
			}
		});
		return result;
	}

	//讀檔
	var workbook = XLSX.read(inpdata, { type: 'binary' });

	//轉為json物件回傳
	if (fmt === 'json') {
		return to_json(workbook);
	}
	else {
		return to_csv(workbook);
	}

}


function downloadxlsx(filename, sheetname, data) {
	//儲存xlsx檔

	//參數
	//filename為要下載儲存之xlsx檔名，，sheetname為資料表名，data為要下載之資料，需為二維陣列。以下為使用範例：
	//var filename = 'download.xlsx';
	//var sheetname = 'test';
	//var data = [
	//    ['name', 'number', 'date'],
	//    ['abc', 1, new Date().toLocaleString()],
	//    ['def', 123.456, new Date('2015-03-25T13:30:12Z')],
	//];
	//downloadxlsx(filename, sheetname, data);

	//說明
	//所使用函式可參考js-xlsx的GitHub文件[https://github.com/SheetJS/js-xlsx]

	//datenum
	function datenum(v, date1904) {
		if (date1904) v += 1462;
		var epoch = Date.parse(v);
		return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
	}

	//sheet_from_array_of_arrays
	function sheet_from_array_of_arrays(data, opts) {
		var ws = {};
		var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
		for (var R = 0; R != data.length; ++R) {
			for (var C = 0; C != data[R].length; ++C) {
				if (range.s.r > R) range.s.r = R;
				if (range.s.c > C) range.s.c = C;
				if (range.e.r < R) range.e.r = R;
				if (range.e.c < C) range.e.c = C;
				var cell = { v: data[R][C] };
				if (cell.v == null) continue;
				var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

				if (typeof cell.v === 'number') cell.t = 'n';
				else if (typeof cell.v === 'boolean') cell.t = 'b';
				else if (cell.v instanceof Date) {
					cell.t = 'n'; cell.z = XLSX.SSF._table[14];
					cell.v = datenum(cell.v);
				}
				else cell.t = 's';

				ws[cell_ref] = cell;
			}
		}
		if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
		return ws;
	}

	//s2ab
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}

	//Workbook
	function Workbook() {
		if (!(this instanceof Workbook)) return new Workbook();
		this.SheetNames = [];
		this.Sheets = {};
	}

	//write
	var wb = new Workbook();
	var ws = sheet_from_array_of_arrays(data);
	wb.SheetNames.push(sheetname);
	wb.Sheets[sheetname] = ws;
	var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

	//saveAs
	saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), filename)

}