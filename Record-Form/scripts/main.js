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

function Submit_data(){ //送出資料
	var trid = new Date().getTime();
	var objtr=document.createElement('tr');
	objtr.id=trid;

	document.getElementById("tbodyid").appendChild(objtr);
	var tbodyobj=document.getElementById('tbodyid');
	var countchildren=tbodyobj.childElementCount;
	var numbering=countchildren-1;

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

	for (var i=0;i<countchildren;i++){
		for(var j=0;j<8;j++){
			tbodyobj.children[i].children[j].innerHTML = tArray[i][j];
		}
	}
}

function Delete_data(obj){	//刪除資料
	var trid=obj.parentNode.parentNode.id;
	var objtr=document.getElementById(trid);
	document.getElementById('tbodyid').removeChild(objtr);
	var deleteRow = objtr.firstChild.innerHTML;
	var tbody=document.getElementById('tbodyid');
	var countchildren=tbody.childElementCount;
	for (var i=deleteRow;i<=countchildren;i++){
		for(var j=1;j<8;j++){
			tArray[i-1][j] = tArray[i][j];
		}
	}
	for (var i=0;i<countchildren;i++){
		tbody.children[i].children[0].innerHTML=i+1;
		for(var j=1;j<8;j++){
			tbody.children[i].children[j].innerHTML=tArray[i][j];
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
