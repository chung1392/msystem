
var httpObj;
var timer_cmd;

var httpRequest_doing = 0;
function httpRequest( target_url, method, data, callback )
{
	if( httpRequest_doing ) return;
	httpRequest_doing = 1;

	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			alert('ERROR!');
			httpRequest_doing = 0;
			return;
		}
	} catch( e ){
		alert('ERROR!');
		httpRequest_doing = 0;
		return;
	}

	timer_cmd = setInterval("timeoutError()",60000);	// timer=60s

	httpObj.onreadystatechange = callback;
	httpObj.open(method, target_url, true);
	httpObj.send(data);

	return;
}

function timeoutError()
{
	httpRequest_doing = 0;
	clearInterval(timer_cmd);
	httpObj.abort();
	alert(xml_cmd_time_out);
}

function httpRequest_nocache( target_url, method, data, callback, timeout )
{
	try{
	    if( window.XMLHttpRequest ){
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			alert('ERROR!');
			return;
		}
	} catch( e ){
		alert('ERROR!');
		return;
	}

	if (timeout)
		timer_cmd = setInterval("timeoutError()",60000);	// timer=60s

	httpObj.onreadystatechange = callback;
	httpObj.open(method, target_url, true);
	httpObj.setRequestHeader('Pragma', 'no-cache');
	httpObj.setRequestHeader('Cache-Control', 'no-cache');
	httpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	httpObj.send(data);

	return;
}

function timeoutError_polling()
{
	httpRequest_polling_doing = 0;
	clearInterval(timer_polling);
	pollingHttpObj.abort();
}

var pollingHttpObj;
var timer_polling;
var httpRequest_polling_doing = 0;
function httpRequest_polling( target_url, method, callback )
{
	if( httpRequest_polling2_doing ) return;

	if( httpRequest_polling_doing ) return;
	httpRequest_polling_doing = 1;

	try{
	    if( window.XMLHttpRequest ){
			pollingHttpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			pollingHttpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			alert('ERROR!');
			httpRequest_polling_doing = 0;
			return;
		}
	} catch( e ){
		alert('ERROR!');
		httpRequest_polling_doing = 0;
		return;
	}

	timer_polling = setInterval("timeoutError_polling()",60000);	// timer=60s

	pollingHttpObj.onreadystatechange = callback;
	pollingHttpObj.open(method, target_url, true);
	pollingHttpObj.setRequestHeader('Pragma', 'no-cache');
	pollingHttpObj.setRequestHeader('Cache-Control', 'no-cache');
	pollingHttpObj.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	pollingHttpObj.send(null);

	return;
}

function timeoutError_polling2()
{
	httpRequest_polling2_doing = 0;
	clearInterval(timer_polling2);
	pollingHttpObj2.abort();
}

var pollingHttpObj2;
var timer_polling2;
var httpRequest_polling2_doing = 0;
function httpRequest_polling2( target_url, method, callback )
{
	if( httpRequest_polling2_doing ) return;
	httpRequest_polling2_doing = 1;

	try{
	    if( window.XMLHttpRequest ){
			pollingHttpObj2 = new XMLHttpRequest();
		} else if(window.ActiveXObject){
			pollingHttpObj2 = new ActiveXObject("Microsoft.XMLHTTP");
		} else{
			alert('ERROR!');
			httpRequest_polling2_doing = 0;
			return;
		}
	} catch( e ){
		alert('ERROR!');
		httpRequest_polling2_doing = 0;
		return;
	}

	timer_polling2 = setInterval("timeoutError_polling2()",60000);	// timer=60s

	pollingHttpObj2.onreadystatechange = callback;
	pollingHttpObj2.open(method, target_url, true);
	pollingHttpObj2.setRequestHeader('Pragma', 'no-cache');
	pollingHttpObj2.setRequestHeader('Cache-Control', 'no-cache');
	pollingHttpObj2.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
	pollingHttpObj2.send(null);

	return;
}

function OutputAOEnd()
{
	if ( httpObj.readyState == 4 ){
		httpRequest_doing = 0;
		clearInterval( timer_cmd );
		if ( httpObj.status == 200 ){
			if (data_ao_success != ""){
				//alert(data_ao_success);
			}
		}
		else if(httpObj.status){
			alert("ERROR[" + httpObj.status + "]");
		}
	}
}

function OutputAO( message, no , value )
{
	var data;

	//if( confirm(message+"?") == true ){
		data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';
		data = data + '<OUTPUT>'+'\r\n';
		data = data + '<AO>'+'\r\n';
		data = data + '<CH' + no + '>' + value + '</CH' + no + '>' +'\r\n';
		data = data + '</AO>'+'\r\n';
		data = data + '</OUTPUT>'+'\r\n';

		// File Send
		httpRequest( "../command.xml", "post", data, OutputAOEnd );
	//}
}

function OutputDOEnd()
{
	if ( httpObj.readyState == 4 ){
		httpRequest_doing = 0;
		clearInterval( timer_cmd );
		if ( httpObj.status == 200 ){
			if (data_do_success != ""){
				//alert(data_do_success);
			}
		}
		else if(httpObj.status){
			alert("ERROR[" + httpObj.status + "]");
		}
	}
}

function OutputDO( message, no , value )
{
	var data;

	//if( confirm(message+"?") == true ){
		data = '<?xml version="1.0" encoding="utf-8"?> '+'\r\n';
		data = data + '<OUTPUT>'+'\r\n';
		data = data + '<DO>'+'\r\n';
		data = data + '<CH' + no + '>' + value + '</CH' + no + '>' +'\r\n';
		data = data + '</DO>'+'\r\n';
		data = data + '</OUTPUT>'+'\r\n';

		// File Send
		httpRequest("../command.xml", "post", data, OutputDOEnd);
	//}
}

function OutputMAEnd() {
    if (httpObj.readyState == 4) {
        httpRequest_doing = 0;
        clearInterval(timer_cmd);
        if (httpObj.status == 200) {
            if (data_ma_success != "") {
                //alert(data_ma_success);
            }
        }
        else if (httpObj.status) {
            alert("ERROR[" + httpObj.status + "]");
        }
    }
}

function OutputMA(message, no, value) {
    var data;

    //if( confirm(message+"?") == true ){
        data = '<?xml version="1.0" encoding="utf-8"?> ' + '\r\n';
        data = data + '<OUTPUT>' + '\r\n';
        data = data + '<MA>' + '\r\n';
        data = data + '<CH' + no + '>' + value + '</CH' + no + '>' + '\r\n';
        data = data + '</MA>' + '\r\n';
        data = data + '</OUTPUT>' + '\r\n';

        // File Send
        httpRequest("../command.xml", "post", data, OutputMAEnd);
    //}
}

function OutputMDEnd() {
    if (httpObj.readyState == 4) {
        httpRequest_doing = 0;
        clearInterval(timer_cmd);
        if (httpObj.status == 200) {
            if (data_md_success != "") {
                //alert(data_md_success);
            }
        }
        else if (httpObj.status) {
            alert("ERROR[" + httpObj.status + "]");
        }
    }
}

function OutputMD(message, no, value) {
    var data;

    //if( confirm(message+"?") == true ){
        data = '<?xml version="1.0" encoding="utf-8"?> ' + '\r\n';
        data = data + '<OUTPUT>' + '\r\n';
        data = data + '<MD>' + '\r\n';
        data = data + '<CH' + no + '>' + value + '</CH' + no + '>' + '\r\n';
        data = data + '</MD>' + '\r\n';
        data = data + '</OUTPUT>' + '\r\n';

        // File Send
        httpRequest("../command.xml", "post", data, OutputMDEnd);
    //}
}

function OutputGDOEnd() {
    if (httpObj.readyState == 4) {
        httpRequest_doing = 0;
        clearInterval(timer_cmd);
        if (httpObj.status == 200) {
            if (data_gdo_success != "") {
                //alert(data_gdo_success);
            }
        }
        else if (httpObj.status) {
            alert("ERROR[" + httpObj.status + "]");
        }
    }
}

function OutputGDO(message, no, value) {
    var data;

    //if( confirm(message+"?") == true ){
    data = '<?xml version="1.0" encoding="utf-8"?> ' + '\r\n';
    data = data + '<OUTPUT>' + '\r\n';
    data = data + '<GDO>' + '\r\n';
    data = data + '<CH' + no + '>' + value + '</CH' + no + '>' + '\r\n';
    data = data + '</GDO>' + '\r\n';
    data = data + '</OUTPUT>' + '\r\n';

    // File Send
    httpRequest("../command.xml", "post", data, OutputGDOEnd);
    //}
}

function OutputData(chType, chNo, chValue) {
    switch (chType) {
        case 'AO':
            OutputAO(data_ao_mes, chNo, chValue);
            break;
        case 'DO':
            OutputDO(data_do_mes, chNo, chValue);
            break;
        case 'MA':
            OutputMA(data_ma_mes, chNo, chValue);
            break;
        case 'MD':
            OutputMD(data_md_mes, chNo, chValue);
            break;
        case 'GDO':
            OutputGDO(data_gdo_mes, chNo, chValue);
            break;
        default:
            break;
    }
}
