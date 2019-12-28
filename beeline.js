var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;

var line=[]
var dc=0
var all_arr=[]
var doin_arr=[]
//
var login=***********
var pass=************
//
var dt = new Date();
var currentWeekDay = dt.getDay();
//console.log(currentWeekDay)
//////////
if (currentWeekDay==6) {
	lessDays=1
}else{
	var lessDays = currentWeekDay +2;//прошлая пятница
}

var curent_date=new Date();

var sb = new Date(new Date(dt).setDate(dt.getDate() - lessDays));
//var sb = new Date(new Date(dt).setDate(dt.getDate() - 9));

console.log("Start serch from date="+sb);
fs.write ('d.txt',sb)
var date_from=""+sb.getDate()+"."+(sb.getMonth()+1)+"."+sb.getFullYear()
var date_to=""+curent_date.getDate()+"."+(curent_date.getMonth()+1)+"."+curent_date.getFullYear()
console.log("date_from="+date_from);
console.log("date_to="+date_to);

phantom.outputEncoding = "utf8"
page.outputEncoding = "utf8"


//date parsing test
// all days in week
var frid_1 = sb.getDate();
var frid_1_month = sb.getMonth()+1;

dtw=sb
plus=0

	var satd =  (new Date(new Date(sb).setDate(sb.getDate() +1+plus))).getDate();
	var sund =  (new Date(new Date(sb).setDate(sb.getDate() +2+plus))).getDate();
	var mond =  (new Date(new Date(sb).setDate(sb.getDate() +3+plus))).getDate();
	var tud  =  (new Date(new Date(sb).setDate(sb.getDate() +4+plus))).getDate();
	var wen  =  (new Date(new Date(sb).setDate(sb.getDate() +5+plus))).getDate();
	var thd  =  (new Date(new Date(sb).setDate(sb.getDate() +6+plus))).getDate();
	var frid_2  =  (new Date(new Date(sb).setDate(sb.getDate() +7+plus))).getDate();


	var satd_month =  (new Date(new Date(sb).setDate(sb.getDate() +1+plus))).getMonth()+1;
	var sund_month =  (new Date(new Date(sb).setDate(sb.getDate() +2+plus))).getMonth()+1;
	var mond_month =  (new Date(new Date(sb).setDate(sb.getDate() +3+plus))).getMonth()+1;
	var tud_month  =  (new Date(new Date(sb).setDate(sb.getDate() +4+plus))).getMonth()+1;
	var wen_month  =  (new Date(new Date(sb).setDate(sb.getDate() +5+plus))).getMonth()+1;
	var thd_month  =  (new Date(new Date(sb).setDate(sb.getDate() +6+plus))).getMonth()+1;
	var frid_2_month  =  (new Date(new Date(sb).setDate(sb.getDate() +7+plus))).getMonth()+1;
	plus=plus+7
	dtw=new Date(new Date(dtw).setDate(dtw.getDate() +7));
	console.log (dtw)
	console.log (curent_date)



console.log (frid_1)
console.log (satd)
console.log (sund)
console.log (mond)
console.log (tud)
console.log (wen)
console.log (thd)
console.log (frid_2)

console.log (frid_1_month)
console.log (satd_month)
console.log (sund_month)
console.log (mond_month)
console.log (tud_month)
console.log (wen_month)
console.log (thd_month)
console.log (frid_2_month)





test='27 Окт 2019,16:22:50,test,210,921-263-86-10,Пропущен'
var test_arr = test.split(',')
test_date = test_arr[0].split(' ')
test_time = test_arr[1].split(':')


tdate= test_date[0]

if (tdate==frid_1){
	date_compare = 0
}
if (tdate==satd){
	date_compare = 1
}
if (tdate==sund){
	date_compare = 2
}
if (tdate==mond){
	date_compare = 3
}
if (tdate==tud){
	date_compare = 4
}
if (tdate==wen){
	date_compare = 5
}
if (tdate==thd){
	date_compare = 6
}
if (tdate==frid_2){
	date_compare = 7
}


ty=test_date[2]

th=test_time[0]
tm=test_time[1]
ts=test_time[2]


/* console.log (' ')
console.log (tdate)
console.log (date_compare)
console.log (ty)
console.log (th)
console.log (tm)
console.log (ts) */
// end date parsing test



	
var su=[]
var mo=[]
var tu=[]
var we=[]
var th=[]
var fr=[]
var sa=[]

string='ΓåÉ'
direct=utf("\u2190")
console.log(direct)


evropa = utf("Европа")
gaidara = utf("Гайдара")
ostrov = utf("Остров")
gromovoi = utf("Громовой")
pobeda = utf("Победа")
kalinina = utf("Калинина")
apicentr = utf("Эпицентр")
ofis = utf("test")

var evr=0;
var gai=0;
var ost=0;
var gro=0;
var pob=0;
var kal=0;
var api=0;
var ofi=0;

console.log("test")
console.log(ofis)
if("test"==ofis) console.log("ya")




function utf (string){
	var escapable = /[\\\"\x00-\x1f\x7f-\uffff]/g,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
	//return quote(string)
	return JSON.parse(quote(string))
    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }

}



			
				
OpenPage()

function OpenPage() {
	console.log("Phantomjs.OpenPage");
	
	page.viewportSize = {
		width: 1920,
		height: 1080
	};
	var useragent = [];
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Mozilla/5.0 (X11; U; Linux; fr-FR) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.4');
	useragent.push('Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	page.settings.userAgent = 'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50';
	console.log(page.settings.userAgent);
	page.open("https://cloudpbx.beeline.ru/login/", function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			console.log("Phantomjs.Open");
			setTimeout(login_in_beeline, 10000);
			//setTimeout(testerLoginAfterCookies, 1000);
			
		}
	});
}

function login_in_beeline() {
	console.log("Phantomjs.login");
	console.log("Phantomjs.EnterLoginData.");

	page.evaluate(function(login, pass) {
		
		document.getElementsByClassName("usernameInput")[0].value = login; 
		document.getElementsByClassName("passwordInput")[0].value = pass;
	}, login, pass);

	page.evaluate(function() {
		//нажать на кнопку LOGIN
		var hlbx1x1x1a = document.getElementsByClassName("Button submitButton Primary")[0];
		var hlbx1x1x1e = document.createEvent("MouseEvents");
		hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
	});
	
	setTimeout(statistic, 90000);
}

function statistic() {
	console.log("Phantomjs.statistic");
	
		var sa=page.evaluate(function() {
			//нажать на кнопку stat
			if(!document.getElementsByClassName("statistics")[0]) return false; else return true;
		
		});
	console.log("Phantomjs.sa=",sa);
	var point = page.evaluate(function() {
			
			
			var element = document.getElementsByClassName("statistics")[0];
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + Math.floor(rect.width / 2),
				y: rect.top + Math.floor(rect.height / 2)
			};
		});
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		page.sendEvent('click', point.x, point.y);
	setTimeout(WhateToLoadStat, 60000);
}

function WhateToLoadStat() {
	console.log("Phantomjs.WhateToLoadStat");
	var wt=page.evaluate(function() {
		if(!document.getElementsByClassName("WidgetBase Dialog ProgressDialog")[0]) return false; else return true;
	});
	console.log("Phantomjs.wt=",wt);
	
	if (wt) setTimeout(WhateToLoadStat, 60000); else setTimeout(SetSerchParameters, 30000);
}

function SetSerchParameters() {
	console.log("Phantomjs.SetSerchParameters");
	
	//date
	var point = page.evaluate(function() {
	var element = document.getElementsByClassName("header-row__item header-row__item_filter header-row__item_date")[0];
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + 5,
				y: rect.top + Math.floor(rect.height / 2)
			};
		});
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		page.sendEvent('click', point.x, point.y);
		console.log(point.x,point.y)
		//page.sendEvent('click', 500, 460);
		
		page.evaluate(function(date_from) {
		
			document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByTagName("input")[0].value=date_from;
			
			
			//time = 18:00
			var hlbx1x1x1a = document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByClassName("Select")[0];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			
			//
			var hlbx1x1x1a = document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByClassName("Select")[0].getElementsByTagName("li")[18];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			
			
			var hlbx1x1x1a = document.getElementsByClassName("Button Primary")[0];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		
		},date_from);
		
		
		//setTimeout(full_screen_exit, 50000);
		WhateToLoadStat_cl()
		
		function WhateToLoadStat_cl() {
			console.log("Phantomjs.WhateToLoadStat");
			var wt=page.evaluate(function() {
				if(!document.getElementsByClassName("WidgetBase Dialog ProgressDialog")[0]) return false; else return true;
			});
			console.log("Phantomjs.wt=",wt);
	
			if (wt) setTimeout(WhateToLoadStat_cl, 60000); else setTimeout(SetCallStatus, 5000);
		}
		
		function SetCallStatus(){
			
			page.evaluate(function() {	
				var hlbx1x1x1a = document.getElementsByClassName("sortable")[0];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			});	
			setTimeout(SetCallStatus_pr, 25000);
		}
		
		
		function SetCallStatus_pr(){
			page.evaluate(function() {
				
				
				var hlbx1x1x1a = document.getElementsByClassName("Select DisplayedCallStatusSelect Small")[0];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
				var hlbx1x1x1a = document.getElementsByClassName("Select DisplayedCallStatusSelect Small")[0].getElementsByTagName("li")[2];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
			});	
			setTimeout(SetCallStatus_dir, 25000);
		}
		
		function SetCallStatus_dir(){
			page.evaluate(function() {
				
				
				var hlbx1x1x1a = document.getElementsByClassName("Select DirectionSelect Small")[0];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
				var hlbx1x1x1a = document.getElementsByClassName("Select DirectionSelect Small")[0].getElementsByTagName("li")[1];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
			});	
			setTimeout(Set100, 25000);
		}
		
			function Set100(){
			page.evaluate(function() {
				
				
				var hlbx1x1x1a = document.getElementsByClassName("Select Small")[4];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
				var hlbx1x1x1a = document.getElementsByClassName("Select Small")[4].getElementsByTagName("li")[2];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
			});	
			fs.write("missing.csv",date_from+"\n","w")
			setTimeout(GetMissingCalls, 25000);
		}
		
		
	//setTimeout(full_screen_exit, 5000);
}

function GetMissingCalls(){
	
	console.log("Phantomjs.Doing screenshot");
	page.render("beeline1.png");

	
	
	var numbers_of_missing_calls=page.evaluate(function(){
				return document.getElementsByClassName('content-row').length;
	});
	
	console.log(numbers_of_missing_calls)
	
	
	for (var i=0; i<numbers_of_missing_calls; i++){//не меньше или равно так как тагс считаются с нуля, а length с единицы 
				
				line[dc]=page.evaluate(function(i){
					var element=document.getElementsByClassName('content-row')[i];
					var date=element.getElementsByClassName("content-row__item content-row__item_date")[0].getElementsByTagName("div")[0].innerText;
					var time=element.getElementsByClassName("content-row__item content-row__item_date")[0].getElementsByTagName("div")[1].innerText;
					
					var abonent=element.getElementsByClassName("content-row__item content-row__item_abonent")[0].getElementsByTagName("div")[0].innerText;
					var abonent_nomber=element.getElementsByClassName("content-row__item content-row__item_abonent")[0].getElementsByTagName("div")[1].innerText;
					
					var phone=element.getElementsByClassName("content-row__item content-row__item_phone")[0].getElementsByTagName("div")[0].innerText;
					
					var pstatus=element.getElementsByClassName("content-row__item content-row__item_status")[0].getElementsByTagName("div")[1].innerText;
					//pstatus="Miss"
						return date+","+time+","+abonent+","+abonent_nomber+","+phone+","+pstatus;
				},i);
				
				test=line[dc]
				var test_arr = test.split(',')
				
				var phone_nomber_test = test_arr[4];
				
				if (phone_nomber_test=="906-230-25-85" ||  
					phone_nomber_test=="909-781-50-77" ||
					phone_nomber_test=="963-738-79-89" ||
					phone_nomber_test=="963-738-79-78" ||
					phone_nomber_test=="962-266-81-06" ||
					phone_nomber_test=="962-260-36-93" ||
					phone_nomber_test=="962-255-70-32" ||
					phone_nomber_test=="962-250-64-01" ||
					phone_nomber_test=="962-250-63-83" ||
					phone_nomber_test=="962-250-63-40" ||
					phone_nomber_test=="909-793-26-05" ||
					phone_nomber_test=="909-788-91-10" ||
					phone_nomber_test=="909-788-30-55" ||
					phone_nomber_test=="909-783-97-11" ||
					phone_nomber_test=="909-782-06-68")	{
						console.log("that phone in the list")
					} else {
						var abon=test_arr[2]
						if (abon==evropa) evr++
						if (abon==gaidara) gai++
						if (abon==ostrov) ost++
						if (abon==gromovoi) gro++
						if (abon==pobeda) pob++
						if (abon==kalinina) kal++
						if (abon==apicentr) api++
						if (abon==ofis) ofi++
			
						test_date = test_arr[0].split(' ')
						test_time = test_arr[1].split(':')

							tdate= test_date[0]

							if (tdate==frid_1){
								date_compare = 0
							}
							if (tdate==satd){
								date_compare = 1
							}
							if (tdate==sund){
								date_compare = 2
							}
							if (tdate==mond){
								date_compare = 3
							}
							if (tdate==tud){
								date_compare = 4
							}
							if (tdate==wen){
								date_compare = 5
							}
							if (tdate==thd){
								date_compare = 6
							}
							if (tdate==frid_2){
								date_compare = 7
							}
							
							line[dc]=line[dc]+','+date_compare
					
							text_split=line[dc].split(',');
							fs.write("missing.csv",line[dc]+"\n","a")
					
						
							//console.log(line[i])	
							dc++;
					}			
	}
	
	console.log (i)
	console.log (dc)
	console.log(line[dc-1])
	
	
	
	var from_to_page=page.evaluate(function(){
				
				
				var number_of_line_in_the_page=document.getElementsByClassName('content-row').length;
				var hms=document.getElementsByClassName('mpbxButtonDefault').length;
				
				
				if (document.getElementsByClassName("btn mpbxButtonDefault disabled")[0]
				&& document.getElementsByClassName("btn mpbxButtonDefault disabled")[1]){
					return 1
				} else{
					return 100500
				}
			});
			
	var direct_page=page.evaluate(function(){
		
		if(document.getElementsByClassName("btn mpbxButtonDefault disabled")[0]){
			return document.getElementsByClassName("btn mpbxButtonDefault disabled")[0].innerText
		} else {
			return 0
		}
			
				
	});
	
	
	console.log("from_to_page="+from_to_page)
	
	if (direct_page) direct_page=utf(direct_page);
	
	console.log("direct_page="+direct_page)
	
	

if (from_to_page==100500 && (direct_page==direct || direct_page==0)){
		
			page.evaluate(function(){
			var hms=document.getElementsByClassName('mpbxButtonDefault').length-1;
			
				var hlbx1x1x1a = document.getElementsByClassName("mpbxButtonDefault")[hms];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		});	
	setTimeout(GetMissingCalls, 25000);
		
	}
	else{
		
		dc=0;
		page.close();
		setTimeout(PageReload2, 5000);
	}

	
	
}

 function PageReload2(){
	 console.log("PageReload2=")
	 page = require("webpage").create();
	 setTimeout(OpenPage2, 5000);
 }
 
 function OpenPage2() {
	console.log("Phantomjs.OpenPage2");
	page.viewportSize = {
		width: 1920,
		height: 1080
	};
	var useragent = [];
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Mozilla/5.0 (X11; U; Linux; fr-FR) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.4');
	useragent.push('Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	page.settings.userAgent = 'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50';
	console.log(page.settings.userAgent);
	page.open("https://cloudpbx.beeline.ru/login/", function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			console.log("Phantomjs.Open");
			setTimeout(statistic2, 90000);
			//setTimeout(login_in_beeline2, 10000);
			//setTimeout(testerLoginAfterCookies, 1000);
		}
	});
}

function login_in_beeline2() {
	console.log("Phantomjs.login");
	console.log("Phantomjs.EnterLoginData.");

	page.evaluate(function(login, pass) {
		
		document.getElementsByClassName("usernameInput")[0].value = login; 
		document.getElementsByClassName("passwordInput")[0].value = pass;
	}, login, pass);

	page.evaluate(function() {
		//нажать на кнопку LOGIN
		var hlbx1x1x1a = document.getElementsByClassName("Button submitButton Primary")[0];
		var hlbx1x1x1e = document.createEvent("MouseEvents");
		hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
	});
	
	setTimeout(statistic2, 90000);
}

function statistic2() {
	console.log("Phantomjs.statistic");
	
		var sa=page.evaluate(function() {
			//нажать на кнопку stat
			if(!document.getElementsByClassName("statistics")[0]) return false; else return true;
		
		});
	console.log("Phantomjs.sa=",sa);
	var point = page.evaluate(function() {
			
			
			var element = document.getElementsByClassName("statistics")[0];
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + Math.floor(rect.width / 2),
				y: rect.top + Math.floor(rect.height / 2)
			};
		});
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		page.sendEvent('click', point.x, point.y);
	setTimeout(WhateToLoadStat2, 60000);
}

function WhateToLoadStat2() {
	console.log("Phantomjs.WhateToLoadStat");
	var wt=page.evaluate(function() {
		if(!document.getElementsByClassName("WidgetBase Dialog ProgressDialog")[0]) return false; else return true;
	});
	console.log("Phantomjs.wt=",wt);
	
	if (wt) setTimeout(WhateToLoadStat2, 60000); else setTimeout(SetSerchParameters2, 30000);
}

function SetSerchParameters2() {
	console.log("Phantomjs.SetSerchParameters");
	
	//date
	var point = page.evaluate(function() {
	var element = document.getElementsByClassName("header-row__item header-row__item_filter header-row__item_date")[0];
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + 5,
				y: rect.top + Math.floor(rect.height / 2)
			};
		});
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		page.sendEvent('click', point.x, point.y);
		console.log(point.x,point.y)
		//page.sendEvent('click', 500, 460);
		
		page.evaluate(function(date_from) {
			//date
			document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByTagName("input")[0].value=date_from;
			
			
			document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByTagName("input")[0].value=date_from;
			
			
			//time = 18:00
			var hlbx1x1x1a = document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByClassName("Select")[0];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			
			//
			var hlbx1x1x1a = document.getElementsByClassName("DatePeriodChooserBase DatePeriodChooser")[0].getElementsByClassName("Select")[0].getElementsByTagName("li")[18];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			
			
			var hlbx1x1x1a = document.getElementsByClassName("Button Primary")[0];
			var hlbx1x1x1e = document.createEvent("MouseEvents");
			hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		
		},date_from);
		
		WhateToLoadStat_cl()
		
		function WhateToLoadStat_cl() {
			console.log("Phantomjs.WhateToLoadStat");
			var wt=page.evaluate(function() {
				if(!document.getElementsByClassName("WidgetBase Dialog ProgressDialog")[0]) return false; else return true;
			});
			console.log("Phantomjs.wt=",wt);
	
			if (wt) setTimeout(WhateToLoadStat_cl, 60000); else setTimeout(SetDate, 5000);
		}
		
		
		
	//setTimeout(full_screen_exit, 5000);
}
 
 
 function SetDate(){
	 
			
			page.evaluate(function() {	
				var hlbx1x1x1a = document.getElementsByClassName("sortable")[0];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
			});	
		
	
		
		setTimeout(DecidedCalls, 50000);
 }
function DecidedCalls(){
			console.log("DecidedCalls")
			// set status in_call
			/* page.evaluate(function() {
				var hlbx1x1x1a = document.getElementsByClassName("Select DisplayedCallStatusSelect Small")[0];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
				var hlbx1x1x1a = document.getElementsByClassName("Select DisplayedCallStatusSelect Small")[0].getElementsByTagName("li")[1];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
			});	 */
			
			//set 100
			page.evaluate(function() {
	
				var hlbx1x1x1a = document.getElementsByClassName("Select Small")[4];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
				var hlbx1x1x1a = document.getElementsByClassName("Select Small")[4].getElementsByTagName("li")[2];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
				
			});	
			fs.write("all.csv",date_from+"\n","w")
			dc=0;
			
			
			setTimeout(GetAllCalls, 10000);
			
}

function GetAllCalls(){
	page.render("beeline2.png");
	console.log("Phantomjs.DGetDecidedCalls");
	console.log("Phantomjs.Doing screenshot");
	
		
	var numbers_of_Decided_calls=page.evaluate(function(){
				return document.getElementsByClassName('content-row').length;
	});
	
	console.log(numbers_of_Decided_calls)
	
	var temp=dc
	for (var i=0; i<numbers_of_Decided_calls; i++){//не меньше или равно так как тагс считаются с нуля, а length с единицы 
		
				all_arr[dc]=page.evaluate(function(i){
					var element=document.getElementsByClassName('content-row')[i];
					var date=element.getElementsByClassName("content-row__item content-row__item_date")[0].getElementsByTagName("div")[0].innerText;
					var time=element.getElementsByClassName("content-row__item content-row__item_date")[0].getElementsByTagName("div")[1].innerText;
					
					var abonent=element.getElementsByClassName("content-row__item content-row__item_abonent")[0].getElementsByTagName("div")[0].innerText;
					var abonent_nomber=element.getElementsByClassName("content-row__item content-row__item_abonent")[0].getElementsByTagName("div")[1].innerText;
					
					var phone=element.getElementsByClassName("content-row__item content-row__item_phone")[0].getElementsByTagName("div")[0].innerText;
					
					
					var class_status=element.getElementsByClassName("content-row__item content-row__item_status")[0].getElementsByTagName("div")[0].className;
					
					if (class_status=='greySmallCircle')pstatus = 'Out'
					if (class_status=='redSmallCircle')pstatus = 'Miss'
					if (class_status=='greenSmallCircle')pstatus = 'In'
						return date+","+time+","+abonent+","+abonent_nomber+","+phone+","+pstatus;
				},i);

				test=all_arr[dc]
				var test_arr = test.split(',')
				test_date = test_arr[0].split(' ')
				test_time = test_arr[1].split(':')

					tdate= test_date[0]

					if (tdate==frid_1){
						date_compare = 0
					}
					if (tdate==satd){
						date_compare = 1
					}
					if (tdate==sund){
						date_compare = 2
					}
					if (tdate==mond){
						date_compare = 3
					}
					if (tdate==tud){
						date_compare = 4
					}
					if (tdate==wen){
						date_compare = 5
					}
					if (tdate==thd){
						date_compare = 6
					}
					if (tdate==frid_2){
						date_compare = 7
					}
					
					all_arr[dc]=all_arr[dc]+','+date_compare
				fs.write("All.csv",all_arr[dc]+"\n","a")
		dc++;
	}
	
	var from_to_page=page.evaluate(function(){
				
				
				var number_of_line_in_the_page=document.getElementsByClassName('content-row').length;
				var hms=document.getElementsByClassName('mpbxButtonDefault').length;
				
				
				if (document.getElementsByClassName("btn mpbxButtonDefault disabled")[0]
				&& document.getElementsByClassName("btn mpbxButtonDefault disabled")[1]){
					return 1
				} else{
					return 100500
				}
			});
			
	var direct_page=page.evaluate(function(){
		
		if(document.getElementsByClassName("btn mpbxButtonDefault disabled")[0]){
			return document.getElementsByClassName("btn mpbxButtonDefault disabled")[0].innerText
		} else {
			return 0
		}
			
				
	});
	
	
	console.log("from_to_page="+from_to_page)
	
	if (direct_page) direct_page=utf(direct_page);
	
	console.log("direct_page="+direct_page)
	
	

if (from_to_page==100500 && (direct_page==direct || direct_page==0)){
		
			page.evaluate(function(){
			var hms=document.getElementsByClassName('mpbxButtonDefault').length-1;
			
				var hlbx1x1x1a = document.getElementsByClassName("mpbxButtonDefault")[hms];
				var hlbx1x1x1e = document.createEvent("MouseEvents");
				hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
		});	
	setTimeout(GetAllCalls, 25000);
		
	}
	else{
		setTimeout(FindePassedCall, 15000);
	}

}

function FindePassedCall(){
	console.log("FindePassedCall")
	fs.write("passed.csv",'',"w")
	for (var i=0; i < line.length; i++){
		for (var j=0; j < all_arr.length; j++){	
			text_split_i = line[i].split(',');
			text_split_j = all_arr[j].split(',');
			if (text_split_j[5]=='Out' || text_split_j[5]=='In'){
				if(text_split_i[4]==text_split_j[4]){//phone
			
					if(text_split_i[6]<text_split_j[6])good_date = true
					if (text_split_i[6]>text_split_j[6])good_date = false;
					if(text_split_i[6]==text_split_j[6]){// day
						
						hhi=(text_split_i[1].split(':'))[0]
						mmi=(text_split_i[1].split(':'))[1]
						ssi=(text_split_i[1].split(':'))[2]
						
						hhj=(text_split_j[1].split(':'))[0]
						mmj=(text_split_j[1].split(':'))[1]
						ssj=(text_split_j[1].split(':'))[2]
						
						/* fs.write("passed.csv",'hhi='+hhi+','+'mmi='+mmi+','+'ssi='+ssi+'\n',"a")
						fs.write("passed.csv",'hhj='+hhj+','+'mmj='+mmj+','+'ssj='+ssj+'\n',"a") */
						
						if (hhi<hhj)good_date = true;
						if (hhi>hhj)good_date = false;
						
						if (hhi==hhj){
							if (mmi<mmj)good_date = true;
							if (mmi>mmj)good_date = false;
							if (mmi==mmj){
								if (ssi<ssj)good_date = true;
								if (ssi>ssj)good_date = false;
								if (ssi==ssj)good_date = true;
							}
						}
					} 
					if (good_date){//date
						do_or_not=text_split_i[7];
						//fs.write("passed.csv",'text_split_i[6]='+text_split_i[6]+'\n',"a")
						if(!do_or_not){
							//fs.write("passed.csv",line[i]+';i='+text_split_i[0]+'\n',"a")
							//fs.write("passed.csv",all_arr[j]+';j='+text_split_j[0]+'\n',"a")
						
							ref = "1"+i;
							line[i] = line[i]+","+1+","+ref+","+all_arr[j];
							all_arr[j] = all_arr[j]+","+ref;
						}	
					}
				
				}//phone
			}
		}//j
		fs.write("passed.csv",'i='+i+','+line[i]+'\n',"a")
	}//i

	setTimeout(SortByDayWeek, 1000);
}

var all_miss=0;

	sa_miss=0
	sa_pass=0
	su_miss=0
	su_pass=0
	mo_miss=0
	mo_pass=0
	tu_miss=0
	tu_pass=0
	we_miss=0
	we_pass=0
	th_miss=0
	th_pass=0
	fr_miss=0
	fr_pass=0
	all_pass=0

function SortByDayWeek (){
	
		var suv=0
		var mov=0
		var tuv=0
		var wev=0
		var thv=0
		var frv=0
		var sav=0
		
		all_miss=line.length
		console.log (all_miss)
		
	for (var i=0; i < line.length; i++){

		var data_week_day = (line[i].split(','))[6];
		console.log(data_week_day)
		if (data_week_day==0 || data_week_day==1){
			sa[sav]=line[i]
			sav++
		}
		if (data_week_day==7){
			fr[frv]=line[i]
			frv++
		}
		if (data_week_day==6){
			th[thv]=line[i]
			thv++
		}
		if (data_week_day==5){
			we[wev]=line[i]
			wev++
		}
		if (data_week_day==4){
			tu[tuv]=line[i]
			tuv++
		}
		if (data_week_day==3){
			mo[mov]=line[i]
			mov++
		}
		if (data_week_day==2){
			su[suv]=line[i]
			suv++
		}
	
	}
	
	
	
	fs.write("weekdays.csv","Суббот\n",'w')
	
	for (var i=0; i < sa.length; i++){
			fs.write("weekdays.csv",sa[i]+'\n','a')
			sa_miss++;
			pass_temp=sa[i].split(',')
			if (pass_temp[7]){
				sa_pass++
			}
			
	}
	fs.write("weekdays.csv",sa_miss+','+sa_pass+" sa\n",'a')
	
	fs.write("weekdays.csv","Вс\n",'a')
	for (var i=0; i < su.length; i++){
			fs.write("weekdays.csv",su[i]+'\n','a')
			su_miss++;
			pass_temp=su[i].split(',')
			if (pass_temp[7]){
				su_pass++
			}
			
	}
	fs.write("weekdays.csv",su_miss+','+su_pass+" su\n",'a')
	
	
	fs.write("weekdays.csv","Пн\n",'a')
	for (var i=0; i < mo.length; i++){
			fs.write("weekdays.csv",mo[i]+'\n','a')
			mo_miss++;
			pass_temp=mo[i].split(',')
			if (pass_temp[7]){
				mo_pass++
			}
	}
	fs.write("weekdays.csv",mo_miss+','+mo_pass+" mo\n",'a')
	
	fs.write("weekdays.csv","Вт\n",'a')
	for (var i=0; i < tu.length; i++){
			fs.write("weekdays.csv",tu[i]+'\n','a')
			tu_miss++;
			pass_temp=tu[i].split(',')
			if (pass_temp[7]){
				tu_pass++
			}
	}
	fs.write("weekdays.csv",tu_miss+','+tu_pass+" tu\n",'a')
	
	fs.write("weekdays.csv","Ср\n",'a')
	for (var i=0; i < we.length; i++){
			fs.write("weekdays.csv",we[i]+'\n','a')
			we_miss++;
			pass_temp=we[i].split(',')
			if (pass_temp[7]){
				we_pass++
			}
	}
	fs.write("weekdays.csv",we_miss+','+we_pass+" we\n",'a')
	
	fs.write("weekdays.csv","Чт\n",'a')
	for (var i=0; i < th.length; i++){
			fs.write("weekdays.csv",th[i]+'\n','a')
			th_miss++;
			pass_temp=th[i].split(',')
			if (pass_temp[7]){
				th_pass++
			}
	}
	fs.write("weekdays.csv",th_miss+','+th_pass+" th\n",'a')
	
	fs.write("weekdays.csv","Пт\n",'a')
	for (var i=0; i < fr.length; i++){
			fs.write("weekdays.csv",fr[i]+'\n','a')
			fr_miss++;
			pass_temp=fr[i].split(',')
			if (pass_temp[7]){
				fr_pass++
			}
	}
	fs.write("weekdays.csv",fr_miss+','+fr_pass+" fr\n",'a')
	
	all_pass=sa_pass+su_pass+mo_pass+tu_pass+we_pass+th_pass+fr_pass;
			
				
			
	setTimeout(BildHTML, 1000);
}


function BildHTML(){
fs.write("analiz.html", '', 'w');
	
	fs.write("analiz.html",'<html>'+"\n","a");
fs.write("analiz.html",'<head>'+"\n","a");
fs.write("analiz.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("analiz.html",'<style>'+"\n","a");
fs.write("analiz.html",'body {'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.panel2 {'+"\n","a");
fs.write("analiz.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("analiz.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("analiz.html",'font: 14pt verdana;'+"\n","a");
fs.write("analiz.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("analiz.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("analiz.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.panel {'+"\n","a");
fs.write("analiz.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("analiz.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("analiz.html",'font: 14pt courier;'+"\n","a");
fs.write("analiz.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("analiz.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("analiz.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.rk{'+"\n","a");
fs.write("analiz.html",'background: red'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table2 {'+"\n","a");
fs.write("analiz.html",'border: 1px black;'+"\n","a");
fs.write("analiz.html",'border-collapse: collapse;'+"\n","a");
fs.write("analiz.html",'align: center;'+"\n","a");
fs.write("analiz.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table2 th'+"\n","a");
fs.write("analiz.html",'{'+"\n","a");
fs.write("analiz.html",'text-align: center;'+"\n","a");
fs.write("analiz.html",'background: #FFF;'+"\n","a");
fs.write("analiz.html",'padding: 5px;'+"\n","a");
fs.write("analiz.html",'border: 1px solid black;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table2	td{'+"\n","a");
fs.write("analiz.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("analiz.html",'border: 1px solid black;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'.table3 {'+"\n","a");
fs.write("analiz.html",'border: 1px black;'+"\n","a");
fs.write("analiz.html",'border-collapse: collapse;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table3 th'+"\n","a");
fs.write("analiz.html",'{'+"\n","a");
fs.write("analiz.html",'text-align: center;'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'padding: 5px;'+"\n","a");
fs.write("analiz.html",'border: 1px solid black;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table3	td{'+"\n","a");
fs.write("analiz.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("analiz.html",'border: 1px solid black;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table4'+"\n","a");
fs.write("analiz.html",'{'+"\n","a");
fs.write("analiz.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("analiz.html",'align: right;'+"\n","a");
fs.write("analiz.html",'text-align: right;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table4	td{'+"\n","a");
fs.write("analiz.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("analiz.html",'font: 10pt verdana;'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table5 {'+"\n","a");
fs.write("analiz.html",'padding: 3px;'+"\n","a");
fs.write("analiz.html",'border: 2px black;'+"\n","a");
fs.write("analiz.html",'border-collapse: collapse;'+"\n","a");
fs.write("analiz.html",'text-align: center;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.table5	td{'+"\n","a");
fs.write("analiz.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("analiz.html",'vertical-align: top'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'.cr'+"\n","a");
fs.write("analiz.html",'{'+"\n","a");
fs.write("analiz.html",'color: red;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'.cg'+"\n","a");
fs.write("analiz.html",'{'+"\n","a");
fs.write("analiz.html",'color: green;'+"\n","a");
fs.write("analiz.html",'}'+"\n","a");
fs.write("analiz.html",'</style>'+"\n","a");
fs.write("analiz.html",'<div  class="panel2">'+"\n","a");
fs.write("analiz.html",'<table align="center">'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<table>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td><a href="all_calls.html">Реестр всех звонков</a></td>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td><a href="analiz.html">Реестр пропущенных звонков</a></td>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<table class="table3">'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'<br>'+"\n","a");
fs.write("analiz.html",'<br>'+"\n","a");
fs.write("analiz.html",'<br>'+"\n","a");
fs.write("analiz.html",'<br>'+"\n","a");
fs.write("analiz.html",'<br>'+"\n","a");
fs.write("analiz.html",'<th bgcolor="#ffa">'+satd+'</th>'+"\n","a");
fs.write("analiz.html",'<th bgcolor="#ffa">'+sund+'</th>'+"\n","a");
fs.write("analiz.html",'<th>'+mond+'</th>'+"\n","a");
fs.write("analiz.html",'<th>'+tud+'</th>'+"\n","a");
fs.write("analiz.html",'<th>'+wen+'</th>'+"\n","a");
fs.write("analiz.html",'<th>'+thd+'</th>'+"\n","a");
fs.write("analiz.html",'<th>'+frid_2+'</th>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'</table>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'</table>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",''+"\n","a");

fs.write("analiz.html",'<td >'+"\n","a");

var salon_call=evr+gai+ost+gro+pob+kal+api//+ofi
fs.write("analiz.html",'<table class="table4" >'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
	fs.write("analiz.html",'<td>'+"\n","a");
		fs.write("analiz.html",'<b>Всего пропущенных:'+all_miss+' ,из них в салонах:'+'</b>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	
	fs.write("analiz.html",'<td class="cr">'+"\n","a");
		fs.write("analiz.html",'<b>'+salon_call+'</b>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="evropa.html">Европа:</a> '+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+evr+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
	
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Всего отработанных:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+all_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Суббота:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+sa_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="gaidara.html">Гайдара:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+gai+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Суббота:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+sa_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");


fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Воскресенье:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+su_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="ostrov.html">Остров:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+ost+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Воскресенье:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+su_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Понедельник:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+mo_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");


fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="gromovoi.html">Громовой:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+gro+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Понедельник:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+mo_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");


fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Вторник:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+tu_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="pobeda.html">Победа:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+pob+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Вторник:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+tu_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Среда:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+we_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="kalinina.html">Калинина:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+kal+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Среда:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+we_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Четверг:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+th_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="apicentr.html">Эпицент:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+api+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Четверг:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+th_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",'<tr>'+"\n","a");
fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Пятница:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cr">'+"\n","a");
fs.write("analiz.html",'<b>'+fr_miss+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<a href="ofis.html">Офис:</a>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+ofi+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'<td>'+"\n","a");
fs.write("analiz.html",'<b>Пятница:</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'<td class="cg">'+"\n","a");
fs.write("analiz.html",'<b>'+fr_pass+'</b>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");

fs.write("analiz.html",'</tr>'+"\n","a");

fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'</table>'+"\n","a");
fs.write("analiz.html",'</td>'+"\n","a");
fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'</table>'+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",''+"\n","a");
fs.write("analiz.html",'</div>'+"\n","a");

fs.write("analiz.html",'<hr>'+"\n","a");
fs.write("analiz.html",'<div  class="panel">'+"\n","a");
fs.write("analiz.html",'<h2>Analiz missing calls</h2>'+"\n","a");
fs.write("analiz.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("analiz.html",'<table class="table5" align="center">'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}

fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("analiz.html",'<td valing="top">'+"\n","a");
		fs.write("analiz.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("analiz.html",'<tr>'+"\n","a");
				fs.write("analiz.html",'<td>'+"\n","a");
					fs.write("analiz.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("analiz.html",'</td>'+"\n","a");
			fs.write("analiz.html",'</tr>'+"\n","a");
		fs.write("analiz.html",'<tr>'+"\n","a");
			fs.write("analiz.html",'<td>'+"\n","a");
				fs.write("analiz.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("analiz.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("analiz.html",''+"\n","a");
								fs.write("analiz.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("analiz.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("analiz.html",'</tr>'+"\n","a");

								
							
					}
					
				fs.write("analiz.html",'</table>'+"\n","a");
			fs.write("analiz.html",'</td>'+"\n","a");
		fs.write("analiz.html",'</tr>'+"\n","a");
	fs.write("analiz.html",'</table>'+"\n","a");
	fs.write("analiz.html",'</td>'+"\n","a");
	fs.write("analiz.html",''+"\n","a");	
}




fs.write("analiz.html",'</tr>'+"\n","a");
fs.write("analiz.html",'</table>'+"\n","a");
fs.write("analiz.html",'</div>'+"\n","a");
fs.write("analiz.html",'</body>'+"\n","a");
fs.write("analiz.html",'</html>'+"\n","a");

CloseHTML()
	
}


function CloseHTML(){
		fs.write("all_calls.html", '', 'w');
	
	fs.write("all_calls.html",'<html>'+"\n","a");
fs.write("all_calls.html",'<head>'+"\n","a");
fs.write("all_calls.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("all_calls.html",'<style>'+"\n","a");
fs.write("all_calls.html",'body {'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.panel2 {'+"\n","a");
fs.write("all_calls.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("all_calls.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("all_calls.html",'font: 14pt verdana;'+"\n","a");
fs.write("all_calls.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("all_calls.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("all_calls.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.panel {'+"\n","a");
fs.write("all_calls.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("all_calls.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("all_calls.html",'font: 14pt courier;'+"\n","a");
fs.write("all_calls.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("all_calls.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("all_calls.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.rk{'+"\n","a");
fs.write("all_calls.html",'background: red'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table2 {'+"\n","a");
fs.write("all_calls.html",'border: 1px black;'+"\n","a");
fs.write("all_calls.html",'border-collapse: collapse;'+"\n","a");
fs.write("all_calls.html",'align: center;'+"\n","a");
fs.write("all_calls.html",'font: 14pt courier;'+"\n","a");//шрифт в таблице
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table2 th'+"\n","a");
fs.write("all_calls.html",'{'+"\n","a");
fs.write("all_calls.html",'text-align: center;'+"\n","a");
fs.write("all_calls.html",'background: #FFF;'+"\n","a");
fs.write("all_calls.html",'padding: 5px;'+"\n","a");
fs.write("all_calls.html",'border: 1px solid black;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table2	td{'+"\n","a");
fs.write("all_calls.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("all_calls.html",'border: 1px solid black;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'.table3 {'+"\n","a");
fs.write("all_calls.html",'border: 1px black;'+"\n","a");
fs.write("all_calls.html",'border-collapse: collapse;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table3 th'+"\n","a");
fs.write("all_calls.html",'{'+"\n","a");
fs.write("all_calls.html",'text-align: center;'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'padding: 5px;'+"\n","a");
fs.write("all_calls.html",'border: 1px solid black;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table3	td{'+"\n","a");
fs.write("all_calls.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("all_calls.html",'border: 1px solid black;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table4'+"\n","a");
fs.write("all_calls.html",'{'+"\n","a");
fs.write("all_calls.html",'width: 850px; /* Ширина ячейки */'+"\n","a");
fs.write("all_calls.html",'align: right;'+"\n","a");
fs.write("all_calls.html",'text-align: right;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table4	td{'+"\n","a");
fs.write("all_calls.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table5 {'+"\n","a");
fs.write("all_calls.html",'padding: 3px;'+"\n","a");
fs.write("all_calls.html",'border: 2px black;'+"\n","a");
fs.write("all_calls.html",'border-collapse: collapse;'+"\n","a");
fs.write("all_calls.html",'text-align: center;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.table5	td{'+"\n","a");
fs.write("all_calls.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'.cr'+"\n","a");
fs.write("all_calls.html",'{'+"\n","a");
fs.write("all_calls.html",'color: red;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'.cg'+"\n","a");
fs.write("all_calls.html",'{'+"\n","a");
fs.write("all_calls.html",'color: green;'+"\n","a");
fs.write("all_calls.html",'}'+"\n","a");
fs.write("all_calls.html",'</style>'+"\n","a");
fs.write("all_calls.html",'<div  class="panel2">'+"\n","a");
fs.write("all_calls.html",'<table align="center">'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<table>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td><a href="all_calls.html">Реестр всех звонков</a></td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td><a href="analiz.html">Реестр пропущенных звонков</a></td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<table class="table3">'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'<br>'+"\n","a");
fs.write("all_calls.html",'<br>'+"\n","a");
fs.write("all_calls.html",'<br>'+"\n","a");
fs.write("all_calls.html",'<br>'+"\n","a");
fs.write("all_calls.html",'<br>'+"\n","a");
fs.write("all_calls.html",'<th bgcolor="#ffa">'+satd+'</th>'+"\n","a");
fs.write("all_calls.html",'<th bgcolor="#ffa">'+sund+'</th>'+"\n","a");
fs.write("all_calls.html",'<th>'+mond+'</th>'+"\n","a");
fs.write("all_calls.html",'<th>'+tud+'</th>'+"\n","a");
fs.write("all_calls.html",'<th>'+wen+'</th>'+"\n","a");
fs.write("all_calls.html",'<th>'+thd+'</th>'+"\n","a");
fs.write("all_calls.html",'<th>'+frid_2+'</th>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'</table>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'</table>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'<td >'+"\n","a");
fs.write("all_calls.html",'<table class="table4" >'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Всего пропущенных:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+all_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Всего отработанных:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+all_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Суббота:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+sa_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Суббота:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+sa_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Воскресенье:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+su_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Воскресенье:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+su_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Понедельник:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+mo_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Понедельник:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+mo_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Вторник:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+tu_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Вторник:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+tu_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Среда:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+we_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Среда:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+we_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Четверг:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+th_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Четверг:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+th_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'<tr>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Пятница:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cr">'+"\n","a");
fs.write("all_calls.html",'<b>'+fr_miss+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td>'+"\n","a");
fs.write("all_calls.html",'<b>Пятница:</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'<td class="cg">'+"\n","a");
fs.write("all_calls.html",'<b>'+fr_pass+'</b>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'</table>'+"\n","a");
fs.write("all_calls.html",'</td>'+"\n","a");
fs.write("all_calls.html",'</tr>'+"\n","a");
fs.write("all_calls.html",'</table>'+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",''+"\n","a");
fs.write("all_calls.html",'</div>'+"\n","a");
fs.write("all_calls.html",'</head>'+"\n","a");

fs.write("all_calls.html",'<body>'+"\n","a");
fs.write("all_calls.html",'<hr>'+"\n","a");
fs.write("all_calls.html",'<div  class="panel">'+"\n","a");
fs.write("all_calls.html",'<h2>List of all calls</h2>'+"\n","a");
fs.write("all_calls.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");


fs.write("all_calls.html",'<table class="table2" align="left">'+"\n","a");	

for (var i=0; i < all_arr.length; i++){
	pass_temp=all_arr[i].split(',')
	
	div=''
	if (pass_temp[7]){
		div='id="'+pass_temp[7]+'"'
	}
	fs.write("all_calls.html",'<tr '+div+'>'+"\n","a");
		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[0]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");

		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[1]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");
		
		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[2]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");
		
		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[3]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");
		
		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[4]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");
		
		fs.write("all_calls.html",'<td>'+"\n","a");
		fs.write("all_calls.html",pass_temp[5]+"\n","a");
		fs.write("all_calls.html",'</td>'+"\n","a");
		
		
	fs.write("all_calls.html",'</tr>'+"\n","a");
}

fs.write("all_calls.html",'</table>'+"\n","a");
fs.write("all_calls.html",'</div>'+"\n","a");
fs.write("all_calls.html",'</body>'+"\n","a");
fs.write("all_calls.html",'</html>'+"\n","a");	
	
	setTimeout(HtmlByOfficeEvropa, 5000);
}


function HtmlByOfficeEvropa(){
	fs.write("evropa.html", '', 'w');
	
	fs.write("evropa.html",'<html>'+"\n","a");
fs.write("evropa.html",'<head>'+"\n","a");
fs.write("evropa.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("evropa.html",'<style>'+"\n","a");
fs.write("evropa.html",'body {'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.panel2 {'+"\n","a");
fs.write("evropa.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("evropa.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("evropa.html",'font: 14pt verdana;'+"\n","a");
fs.write("evropa.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("evropa.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("evropa.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.panel {'+"\n","a");
fs.write("evropa.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("evropa.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("evropa.html",'font: 14pt courier;'+"\n","a");
fs.write("evropa.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("evropa.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("evropa.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.rk{'+"\n","a");
fs.write("evropa.html",'background: red'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table2 {'+"\n","a");
fs.write("evropa.html",'border: 1px black;'+"\n","a");
fs.write("evropa.html",'border-collapse: collapse;'+"\n","a");
fs.write("evropa.html",'align: center;'+"\n","a");
fs.write("evropa.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table2 th'+"\n","a");
fs.write("evropa.html",'{'+"\n","a");
fs.write("evropa.html",'text-align: center;'+"\n","a");
fs.write("evropa.html",'background: #FFF;'+"\n","a");
fs.write("evropa.html",'padding: 5px;'+"\n","a");
fs.write("evropa.html",'border: 1px solid black;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table2	td{'+"\n","a");
fs.write("evropa.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("evropa.html",'border: 1px solid black;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",''+"\n","a");
fs.write("evropa.html",'.table3 {'+"\n","a");
fs.write("evropa.html",'border: 1px black;'+"\n","a");
fs.write("evropa.html",'border-collapse: collapse;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table3 th'+"\n","a");
fs.write("evropa.html",'{'+"\n","a");
fs.write("evropa.html",'text-align: center;'+"\n","a");
fs.write("evropa.html",''+"\n","a");
fs.write("evropa.html",'padding: 5px;'+"\n","a");
fs.write("evropa.html",'border: 1px solid black;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table3	td{'+"\n","a");
fs.write("evropa.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("evropa.html",'border: 1px solid black;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table4'+"\n","a");
fs.write("evropa.html",'{'+"\n","a");
fs.write("evropa.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("evropa.html",'align: right;'+"\n","a");
fs.write("evropa.html",'text-align: right;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table4	td{'+"\n","a");
fs.write("evropa.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("evropa.html",'font: 10pt verdana;'+"\n","a");
fs.write("evropa.html",''+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table5 {'+"\n","a");
fs.write("evropa.html",'padding: 3px;'+"\n","a");
fs.write("evropa.html",'border: 2px black;'+"\n","a");
fs.write("evropa.html",'border-collapse: collapse;'+"\n","a");
fs.write("evropa.html",'text-align: center;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.table5	td{'+"\n","a");
fs.write("evropa.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("evropa.html",'vertical-align: top'+"\n","a");
fs.write("evropa.html",''+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",''+"\n","a");
fs.write("evropa.html",'.cr'+"\n","a");
fs.write("evropa.html",'{'+"\n","a");
fs.write("evropa.html",'color: red;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'.cg'+"\n","a");
fs.write("evropa.html",'{'+"\n","a");
fs.write("evropa.html",'color: green;'+"\n","a");
fs.write("evropa.html",'}'+"\n","a");
fs.write("evropa.html",'</style>'+"\n","a");

fs.write("evropa.html",'<div  class="panel2">'+"\n","a");
fs.write("evropa.html",'<h1>Европа</h1>'+"\n","a");
fs.write("evropa.html",'<br>'+"\n","a");
fs.write("evropa.html",'<h2>Пропущенных:'+evr+'</h2>'+"\n","a");///---
fs.write("evropa.html",'</div>'+"\n","a");

fs.write("evropa.html",'<hr>'+"\n","a");
fs.write("evropa.html",'<div  class="panel">'+"\n","a");
fs.write("evropa.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("evropa.html",'<table class="table5" align="center">'+"\n","a");
fs.write("evropa.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==evropa){
								if (pass_temp[7]){
								
									color = "palegreen"
									ref = "all_calls.html#"+pass_temp[8];
									title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
									stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
								}
								
								fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
									fs.write("evropa.html",''+"\n","a");
									fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
									fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
									fs.write("evropa.html",''+"\n","a");
									fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
									fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
								fs.write("evropa.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}

fs.write("evropa.html",'</tr>'+"\n","a");
fs.write("evropa.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");
							}

					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							
							if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("evropa.html",'<td valing="top">'+"\n","a");
		fs.write("evropa.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("evropa.html",'<tr>'+"\n","a");
				fs.write("evropa.html",'<td>'+"\n","a");
					fs.write("evropa.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("evropa.html",'</td>'+"\n","a");
			fs.write("evropa.html",'</tr>'+"\n","a");
		fs.write("evropa.html",'<tr>'+"\n","a");
			fs.write("evropa.html",'<td>'+"\n","a");
				fs.write("evropa.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==evropa){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("evropa.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("evropa.html",''+"\n","a");
								fs.write("evropa.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("evropa.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("evropa.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("evropa.html",'</table>'+"\n","a");
			fs.write("evropa.html",'</td>'+"\n","a");
		fs.write("evropa.html",'</tr>'+"\n","a");
	fs.write("evropa.html",'</table>'+"\n","a");
	fs.write("evropa.html",'</td>'+"\n","a");
	fs.write("evropa.html",''+"\n","a");	
}




fs.write("evropa.html",'</tr>'+"\n","a");
fs.write("evropa.html",'</table>'+"\n","a");
fs.write("evropa.html",'</div>'+"\n","a");
fs.write("evropa.html",'</body>'+"\n","a");
fs.write("evropa.html",'</html>'+"\n","a");

setTimeout(HtmlByOfficeGaidara, 5000);
}

function HtmlByOfficeGaidara(){
	fs.write("gaidara.html", '', 'w');
	
	fs.write("gaidara.html",'<html>'+"\n","a");
fs.write("gaidara.html",'<head>'+"\n","a");
fs.write("gaidara.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("gaidara.html",'<style>'+"\n","a");
fs.write("gaidara.html",'body {'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.panel2 {'+"\n","a");
fs.write("gaidara.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("gaidara.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("gaidara.html",'font: 14pt verdana;'+"\n","a");
fs.write("gaidara.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("gaidara.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("gaidara.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.panel {'+"\n","a");
fs.write("gaidara.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("gaidara.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("gaidara.html",'font: 14pt courier;'+"\n","a");
fs.write("gaidara.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("gaidara.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("gaidara.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.rk{'+"\n","a");
fs.write("gaidara.html",'background: red'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table2 {'+"\n","a");
fs.write("gaidara.html",'border: 1px black;'+"\n","a");
fs.write("gaidara.html",'border-collapse: collapse;'+"\n","a");
fs.write("gaidara.html",'align: center;'+"\n","a");
fs.write("gaidara.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table2 th'+"\n","a");
fs.write("gaidara.html",'{'+"\n","a");
fs.write("gaidara.html",'text-align: center;'+"\n","a");
fs.write("gaidara.html",'background: #FFF;'+"\n","a");
fs.write("gaidara.html",'padding: 5px;'+"\n","a");
fs.write("gaidara.html",'border: 1px solid black;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table2	td{'+"\n","a");
fs.write("gaidara.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gaidara.html",'border: 1px solid black;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",''+"\n","a");
fs.write("gaidara.html",'.table3 {'+"\n","a");
fs.write("gaidara.html",'border: 1px black;'+"\n","a");
fs.write("gaidara.html",'border-collapse: collapse;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table3 th'+"\n","a");
fs.write("gaidara.html",'{'+"\n","a");
fs.write("gaidara.html",'text-align: center;'+"\n","a");
fs.write("gaidara.html",''+"\n","a");
fs.write("gaidara.html",'padding: 5px;'+"\n","a");
fs.write("gaidara.html",'border: 1px solid black;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table3	td{'+"\n","a");
fs.write("gaidara.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gaidara.html",'border: 1px solid black;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table4'+"\n","a");
fs.write("gaidara.html",'{'+"\n","a");
fs.write("gaidara.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("gaidara.html",'align: right;'+"\n","a");
fs.write("gaidara.html",'text-align: right;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table4	td{'+"\n","a");
fs.write("gaidara.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gaidara.html",'font: 10pt verdana;'+"\n","a");
fs.write("gaidara.html",''+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table5 {'+"\n","a");
fs.write("gaidara.html",'padding: 3px;'+"\n","a");
fs.write("gaidara.html",'border: 2px black;'+"\n","a");
fs.write("gaidara.html",'border-collapse: collapse;'+"\n","a");
fs.write("gaidara.html",'text-align: center;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.table5	td{'+"\n","a");
fs.write("gaidara.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gaidara.html",'vertical-align: top'+"\n","a");
fs.write("gaidara.html",''+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",''+"\n","a");
fs.write("gaidara.html",'.cr'+"\n","a");
fs.write("gaidara.html",'{'+"\n","a");
fs.write("gaidara.html",'color: red;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'.cg'+"\n","a");
fs.write("gaidara.html",'{'+"\n","a");
fs.write("gaidara.html",'color: green;'+"\n","a");
fs.write("gaidara.html",'}'+"\n","a");
fs.write("gaidara.html",'</style>'+"\n","a");

fs.write("gaidara.html",'<div  class="panel2">'+"\n","a");
fs.write("gaidara.html",'<h1>Гайдара</h1>'+"\n","a");
fs.write("gaidara.html",'<br>'+"\n","a");
fs.write("gaidara.html",'<h2>Пропущенных:'+gai+'</h2>'+"\n","a");///---
fs.write("gaidara.html",'</div>'+"\n","a");

fs.write("gaidara.html",'<hr>'+"\n","a");
fs.write("gaidara.html",'<div  class="panel">'+"\n","a");
fs.write("gaidara.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("gaidara.html",'<table class="table5" align="center">'+"\n","a");
fs.write("gaidara.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}

fs.write("gaidara.html",'</tr>'+"\n","a");
fs.write("gaidara.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("gaidara.html",'<td valing="top">'+"\n","a");
		fs.write("gaidara.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gaidara.html",'<tr>'+"\n","a");
				fs.write("gaidara.html",'<td>'+"\n","a");
					fs.write("gaidara.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("gaidara.html",'</td>'+"\n","a");
			fs.write("gaidara.html",'</tr>'+"\n","a");
		fs.write("gaidara.html",'<tr>'+"\n","a");
			fs.write("gaidara.html",'<td>'+"\n","a");
				fs.write("gaidara.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gaidara){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gaidara.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gaidara.html",''+"\n","a");
								fs.write("gaidara.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gaidara.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gaidara.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gaidara.html",'</table>'+"\n","a");
			fs.write("gaidara.html",'</td>'+"\n","a");
		fs.write("gaidara.html",'</tr>'+"\n","a");
	fs.write("gaidara.html",'</table>'+"\n","a");
	fs.write("gaidara.html",'</td>'+"\n","a");
	fs.write("gaidara.html",''+"\n","a");	
}




fs.write("gaidara.html",'</tr>'+"\n","a");
fs.write("gaidara.html",'</table>'+"\n","a");
fs.write("gaidara.html",'</div>'+"\n","a");
fs.write("gaidara.html",'</body>'+"\n","a");
fs.write("gaidara.html",'</html>'+"\n","a");

setTimeout(HtmlByОstrov, 5000);
}

function HtmlByОstrov(){
	fs.write("ostrov.html", '', 'w');
	
	fs.write("ostrov.html",'<html>'+"\n","a");
fs.write("ostrov.html",'<head>'+"\n","a");
fs.write("ostrov.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("ostrov.html",'<style>'+"\n","a");
fs.write("ostrov.html",'body {'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.panel2 {'+"\n","a");
fs.write("ostrov.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("ostrov.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("ostrov.html",'font: 14pt verdana;'+"\n","a");
fs.write("ostrov.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("ostrov.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("ostrov.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.panel {'+"\n","a");
fs.write("ostrov.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("ostrov.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("ostrov.html",'font: 14pt courier;'+"\n","a");
fs.write("ostrov.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("ostrov.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("ostrov.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.rk{'+"\n","a");
fs.write("ostrov.html",'background: red'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table2 {'+"\n","a");
fs.write("ostrov.html",'border: 1px black;'+"\n","a");
fs.write("ostrov.html",'border-collapse: collapse;'+"\n","a");
fs.write("ostrov.html",'align: center;'+"\n","a");
fs.write("ostrov.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table2 th'+"\n","a");
fs.write("ostrov.html",'{'+"\n","a");
fs.write("ostrov.html",'text-align: center;'+"\n","a");
fs.write("ostrov.html",'background: #FFF;'+"\n","a");
fs.write("ostrov.html",'padding: 5px;'+"\n","a");
fs.write("ostrov.html",'border: 1px solid black;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table2	td{'+"\n","a");
fs.write("ostrov.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ostrov.html",'border: 1px solid black;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",''+"\n","a");
fs.write("ostrov.html",'.table3 {'+"\n","a");
fs.write("ostrov.html",'border: 1px black;'+"\n","a");
fs.write("ostrov.html",'border-collapse: collapse;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table3 th'+"\n","a");
fs.write("ostrov.html",'{'+"\n","a");
fs.write("ostrov.html",'text-align: center;'+"\n","a");
fs.write("ostrov.html",''+"\n","a");
fs.write("ostrov.html",'padding: 5px;'+"\n","a");
fs.write("ostrov.html",'border: 1px solid black;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table3	td{'+"\n","a");
fs.write("ostrov.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ostrov.html",'border: 1px solid black;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table4'+"\n","a");
fs.write("ostrov.html",'{'+"\n","a");
fs.write("ostrov.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("ostrov.html",'align: right;'+"\n","a");
fs.write("ostrov.html",'text-align: right;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table4	td{'+"\n","a");
fs.write("ostrov.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ostrov.html",'font: 10pt verdana;'+"\n","a");
fs.write("ostrov.html",''+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table5 {'+"\n","a");
fs.write("ostrov.html",'padding: 3px;'+"\n","a");
fs.write("ostrov.html",'border: 2px black;'+"\n","a");
fs.write("ostrov.html",'border-collapse: collapse;'+"\n","a");
fs.write("ostrov.html",'text-align: center;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.table5	td{'+"\n","a");
fs.write("ostrov.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ostrov.html",'vertical-align: top'+"\n","a");
fs.write("ostrov.html",''+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",''+"\n","a");
fs.write("ostrov.html",'.cr'+"\n","a");
fs.write("ostrov.html",'{'+"\n","a");
fs.write("ostrov.html",'color: red;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'.cg'+"\n","a");
fs.write("ostrov.html",'{'+"\n","a");
fs.write("ostrov.html",'color: green;'+"\n","a");
fs.write("ostrov.html",'}'+"\n","a");
fs.write("ostrov.html",'</style>'+"\n","a");

fs.write("ostrov.html",'<div  class="panel2">'+"\n","a");
fs.write("ostrov.html",'<h1>Остров</h1>'+"\n","a");
fs.write("ostrov.html",'<br>'+"\n","a");
fs.write("ostrov.html",'<h2>Пропущенных:'+ost+'</h2>'+"\n","a");///---
fs.write("ostrov.html",'</div>'+"\n","a");

fs.write("ostrov.html",'<hr>'+"\n","a");
fs.write("ostrov.html",'<div  class="panel">'+"\n","a");
fs.write("ostrov.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("ostrov.html",'<table class="table5" align="center">'+"\n","a");
fs.write("ostrov.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}

fs.write("ostrov.html",'</tr>'+"\n","a");
fs.write("ostrov.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("ostrov.html",'<td valing="top">'+"\n","a");
		fs.write("ostrov.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ostrov.html",'<tr>'+"\n","a");
				fs.write("ostrov.html",'<td>'+"\n","a");
					fs.write("ostrov.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("ostrov.html",'</td>'+"\n","a");
			fs.write("ostrov.html",'</tr>'+"\n","a");
		fs.write("ostrov.html",'<tr>'+"\n","a");
			fs.write("ostrov.html",'<td>'+"\n","a");
				fs.write("ostrov.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ostrov){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ostrov.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ostrov.html",''+"\n","a");
								fs.write("ostrov.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ostrov.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ostrov.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ostrov.html",'</table>'+"\n","a");
			fs.write("ostrov.html",'</td>'+"\n","a");
		fs.write("ostrov.html",'</tr>'+"\n","a");
	fs.write("ostrov.html",'</table>'+"\n","a");
	fs.write("ostrov.html",'</td>'+"\n","a");
	fs.write("ostrov.html",''+"\n","a");	
}




fs.write("ostrov.html",'</tr>'+"\n","a");
fs.write("ostrov.html",'</table>'+"\n","a");
fs.write("ostrov.html",'</div>'+"\n","a");
fs.write("ostrov.html",'</body>'+"\n","a");
fs.write("ostrov.html",'</html>'+"\n","a");

setTimeout(HtmlByGromovoi, 5000);
}

function HtmlByGromovoi(){
	fs.write("gromovoi.html", '', 'w');
	
	fs.write("gromovoi.html",'<html>'+"\n","a");
fs.write("gromovoi.html",'<head>'+"\n","a");
fs.write("gromovoi.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("gromovoi.html",'<style>'+"\n","a");
fs.write("gromovoi.html",'body {'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.panel2 {'+"\n","a");
fs.write("gromovoi.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("gromovoi.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("gromovoi.html",'font: 14pt verdana;'+"\n","a");
fs.write("gromovoi.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("gromovoi.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("gromovoi.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.panel {'+"\n","a");
fs.write("gromovoi.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("gromovoi.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("gromovoi.html",'font: 14pt courier;'+"\n","a");
fs.write("gromovoi.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("gromovoi.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("gromovoi.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.rk{'+"\n","a");
fs.write("gromovoi.html",'background: red'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table2 {'+"\n","a");
fs.write("gromovoi.html",'border: 1px black;'+"\n","a");
fs.write("gromovoi.html",'border-collapse: collapse;'+"\n","a");
fs.write("gromovoi.html",'align: center;'+"\n","a");
fs.write("gromovoi.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table2 th'+"\n","a");
fs.write("gromovoi.html",'{'+"\n","a");
fs.write("gromovoi.html",'text-align: center;'+"\n","a");
fs.write("gromovoi.html",'background: #FFF;'+"\n","a");
fs.write("gromovoi.html",'padding: 5px;'+"\n","a");
fs.write("gromovoi.html",'border: 1px solid black;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table2	td{'+"\n","a");
fs.write("gromovoi.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gromovoi.html",'border: 1px solid black;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",''+"\n","a");
fs.write("gromovoi.html",'.table3 {'+"\n","a");
fs.write("gromovoi.html",'border: 1px black;'+"\n","a");
fs.write("gromovoi.html",'border-collapse: collapse;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table3 th'+"\n","a");
fs.write("gromovoi.html",'{'+"\n","a");
fs.write("gromovoi.html",'text-align: center;'+"\n","a");
fs.write("gromovoi.html",''+"\n","a");
fs.write("gromovoi.html",'padding: 5px;'+"\n","a");
fs.write("gromovoi.html",'border: 1px solid black;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table3	td{'+"\n","a");
fs.write("gromovoi.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gromovoi.html",'border: 1px solid black;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table4'+"\n","a");
fs.write("gromovoi.html",'{'+"\n","a");
fs.write("gromovoi.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("gromovoi.html",'align: right;'+"\n","a");
fs.write("gromovoi.html",'text-align: right;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table4	td{'+"\n","a");
fs.write("gromovoi.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gromovoi.html",'font: 10pt verdana;'+"\n","a");
fs.write("gromovoi.html",''+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table5 {'+"\n","a");
fs.write("gromovoi.html",'padding: 3px;'+"\n","a");
fs.write("gromovoi.html",'border: 2px black;'+"\n","a");
fs.write("gromovoi.html",'border-collapse: collapse;'+"\n","a");
fs.write("gromovoi.html",'text-align: center;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.table5	td{'+"\n","a");
fs.write("gromovoi.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("gromovoi.html",'vertical-align: top'+"\n","a");
fs.write("gromovoi.html",''+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",''+"\n","a");
fs.write("gromovoi.html",'.cr'+"\n","a");
fs.write("gromovoi.html",'{'+"\n","a");
fs.write("gromovoi.html",'color: red;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'.cg'+"\n","a");
fs.write("gromovoi.html",'{'+"\n","a");
fs.write("gromovoi.html",'color: green;'+"\n","a");
fs.write("gromovoi.html",'}'+"\n","a");
fs.write("gromovoi.html",'</style>'+"\n","a");

fs.write("gromovoi.html",'<div  class="panel2">'+"\n","a");
fs.write("gromovoi.html",'<h1>Громовой</h1>'+"\n","a");
fs.write("gromovoi.html",'<br>'+"\n","a");
fs.write("gromovoi.html",'<h2>Пропущенных:'+gro+'</h2>'+"\n","a");///---
fs.write("gromovoi.html",'</div>'+"\n","a");

fs.write("gromovoi.html",'<hr>'+"\n","a");
fs.write("gromovoi.html",'<div  class="panel">'+"\n","a");
fs.write("gromovoi.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("gromovoi.html",'<table class="table5" align="center">'+"\n","a");
fs.write("gromovoi.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}

fs.write("gromovoi.html",'</tr>'+"\n","a");
fs.write("gromovoi.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("gromovoi.html",'<td valing="top">'+"\n","a");
		fs.write("gromovoi.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("gromovoi.html",'<tr>'+"\n","a");
				fs.write("gromovoi.html",'<td>'+"\n","a");
					fs.write("gromovoi.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("gromovoi.html",'</td>'+"\n","a");
			fs.write("gromovoi.html",'</tr>'+"\n","a");
		fs.write("gromovoi.html",'<tr>'+"\n","a");
			fs.write("gromovoi.html",'<td>'+"\n","a");
				fs.write("gromovoi.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==gromovoi){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("gromovoi.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("gromovoi.html",''+"\n","a");
								fs.write("gromovoi.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("gromovoi.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("gromovoi.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("gromovoi.html",'</table>'+"\n","a");
			fs.write("gromovoi.html",'</td>'+"\n","a");
		fs.write("gromovoi.html",'</tr>'+"\n","a");
	fs.write("gromovoi.html",'</table>'+"\n","a");
	fs.write("gromovoi.html",'</td>'+"\n","a");
	fs.write("gromovoi.html",''+"\n","a");	
}




fs.write("gromovoi.html",'</tr>'+"\n","a");
fs.write("gromovoi.html",'</table>'+"\n","a");
fs.write("gromovoi.html",'</div>'+"\n","a");
fs.write("gromovoi.html",'</body>'+"\n","a");
fs.write("gromovoi.html",'</html>'+"\n","a");

setTimeout(HtmlByPobeda, 5000);
}
function HtmlByPobeda(){
	fs.write("pobeda.html", '', 'w');
	
	fs.write("pobeda.html",'<html>'+"\n","a");
fs.write("pobeda.html",'<head>'+"\n","a");
fs.write("pobeda.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("pobeda.html",'<style>'+"\n","a");
fs.write("pobeda.html",'body {'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.panel2 {'+"\n","a");
fs.write("pobeda.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("pobeda.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("pobeda.html",'font: 14pt verdana;'+"\n","a");
fs.write("pobeda.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("pobeda.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("pobeda.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.panel {'+"\n","a");
fs.write("pobeda.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("pobeda.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("pobeda.html",'font: 14pt courier;'+"\n","a");
fs.write("pobeda.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("pobeda.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("pobeda.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.rk{'+"\n","a");
fs.write("pobeda.html",'background: red'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table2 {'+"\n","a");
fs.write("pobeda.html",'border: 1px black;'+"\n","a");
fs.write("pobeda.html",'border-collapse: collapse;'+"\n","a");
fs.write("pobeda.html",'align: center;'+"\n","a");
fs.write("pobeda.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table2 th'+"\n","a");
fs.write("pobeda.html",'{'+"\n","a");
fs.write("pobeda.html",'text-align: center;'+"\n","a");
fs.write("pobeda.html",'background: #FFF;'+"\n","a");
fs.write("pobeda.html",'padding: 5px;'+"\n","a");
fs.write("pobeda.html",'border: 1px solid black;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table2	td{'+"\n","a");
fs.write("pobeda.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("pobeda.html",'border: 1px solid black;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",''+"\n","a");
fs.write("pobeda.html",'.table3 {'+"\n","a");
fs.write("pobeda.html",'border: 1px black;'+"\n","a");
fs.write("pobeda.html",'border-collapse: collapse;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table3 th'+"\n","a");
fs.write("pobeda.html",'{'+"\n","a");
fs.write("pobeda.html",'text-align: center;'+"\n","a");
fs.write("pobeda.html",''+"\n","a");
fs.write("pobeda.html",'padding: 5px;'+"\n","a");
fs.write("pobeda.html",'border: 1px solid black;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table3	td{'+"\n","a");
fs.write("pobeda.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("pobeda.html",'border: 1px solid black;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table4'+"\n","a");
fs.write("pobeda.html",'{'+"\n","a");
fs.write("pobeda.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("pobeda.html",'align: right;'+"\n","a");
fs.write("pobeda.html",'text-align: right;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table4	td{'+"\n","a");
fs.write("pobeda.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("pobeda.html",'font: 10pt verdana;'+"\n","a");
fs.write("pobeda.html",''+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table5 {'+"\n","a");
fs.write("pobeda.html",'padding: 3px;'+"\n","a");
fs.write("pobeda.html",'border: 2px black;'+"\n","a");
fs.write("pobeda.html",'border-collapse: collapse;'+"\n","a");
fs.write("pobeda.html",'text-align: center;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.table5	td{'+"\n","a");
fs.write("pobeda.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("pobeda.html",'vertical-align: top'+"\n","a");
fs.write("pobeda.html",''+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",''+"\n","a");
fs.write("pobeda.html",'.cr'+"\n","a");
fs.write("pobeda.html",'{'+"\n","a");
fs.write("pobeda.html",'color: red;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'.cg'+"\n","a");
fs.write("pobeda.html",'{'+"\n","a");
fs.write("pobeda.html",'color: green;'+"\n","a");
fs.write("pobeda.html",'}'+"\n","a");
fs.write("pobeda.html",'</style>'+"\n","a");

fs.write("pobeda.html",'<div  class="panel2">'+"\n","a");
fs.write("pobeda.html",'<h1>Победа</h1>'+"\n","a");
fs.write("pobeda.html",'<br>'+"\n","a");
fs.write("pobeda.html",'<h2>Пропущенных:'+pob+'</h2>'+"\n","a");///---
fs.write("pobeda.html",'</div>'+"\n","a");

fs.write("pobeda.html",'<hr>'+"\n","a");
fs.write("pobeda.html",'<div  class="panel">'+"\n","a");
fs.write("pobeda.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("pobeda.html",'<table class="table5" align="center">'+"\n","a");
fs.write("pobeda.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}

fs.write("pobeda.html",'</tr>'+"\n","a");
fs.write("pobeda.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("pobeda.html",'<td valing="top">'+"\n","a");
		fs.write("pobeda.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("pobeda.html",'<tr>'+"\n","a");
				fs.write("pobeda.html",'<td>'+"\n","a");
					fs.write("pobeda.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("pobeda.html",'</td>'+"\n","a");
			fs.write("pobeda.html",'</tr>'+"\n","a");
		fs.write("pobeda.html",'<tr>'+"\n","a");
			fs.write("pobeda.html",'<td>'+"\n","a");
				fs.write("pobeda.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==pobeda){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("pobeda.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("pobeda.html",''+"\n","a");
								fs.write("pobeda.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("pobeda.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("pobeda.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("pobeda.html",'</table>'+"\n","a");
			fs.write("pobeda.html",'</td>'+"\n","a");
		fs.write("pobeda.html",'</tr>'+"\n","a");
	fs.write("pobeda.html",'</table>'+"\n","a");
	fs.write("pobeda.html",'</td>'+"\n","a");
	fs.write("pobeda.html",''+"\n","a");	
}




fs.write("pobeda.html",'</tr>'+"\n","a");
fs.write("pobeda.html",'</table>'+"\n","a");
fs.write("pobeda.html",'</div>'+"\n","a");
fs.write("pobeda.html",'</body>'+"\n","a");
fs.write("pobeda.html",'</html>'+"\n","a");

setTimeout(HtmlByKalinina, 5000);
}

function HtmlByKalinina(){
	fs.write("kalinina.html", '', 'w');
	
	fs.write("kalinina.html",'<html>'+"\n","a");
fs.write("kalinina.html",'<head>'+"\n","a");
fs.write("kalinina.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("kalinina.html",'<style>'+"\n","a");
fs.write("kalinina.html",'body {'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.panel2 {'+"\n","a");
fs.write("kalinina.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("kalinina.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("kalinina.html",'font: 14pt verdana;'+"\n","a");
fs.write("kalinina.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("kalinina.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("kalinina.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.panel {'+"\n","a");
fs.write("kalinina.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("kalinina.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("kalinina.html",'font: 14pt courier;'+"\n","a");
fs.write("kalinina.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("kalinina.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("kalinina.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.rk{'+"\n","a");
fs.write("kalinina.html",'background: red'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table2 {'+"\n","a");
fs.write("kalinina.html",'border: 1px black;'+"\n","a");
fs.write("kalinina.html",'border-collapse: collapse;'+"\n","a");
fs.write("kalinina.html",'align: center;'+"\n","a");
fs.write("kalinina.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table2 th'+"\n","a");
fs.write("kalinina.html",'{'+"\n","a");
fs.write("kalinina.html",'text-align: center;'+"\n","a");
fs.write("kalinina.html",'background: #FFF;'+"\n","a");
fs.write("kalinina.html",'padding: 5px;'+"\n","a");
fs.write("kalinina.html",'border: 1px solid black;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table2	td{'+"\n","a");
fs.write("kalinina.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("kalinina.html",'border: 1px solid black;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",''+"\n","a");
fs.write("kalinina.html",'.table3 {'+"\n","a");
fs.write("kalinina.html",'border: 1px black;'+"\n","a");
fs.write("kalinina.html",'border-collapse: collapse;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table3 th'+"\n","a");
fs.write("kalinina.html",'{'+"\n","a");
fs.write("kalinina.html",'text-align: center;'+"\n","a");
fs.write("kalinina.html",''+"\n","a");
fs.write("kalinina.html",'padding: 5px;'+"\n","a");
fs.write("kalinina.html",'border: 1px solid black;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table3	td{'+"\n","a");
fs.write("kalinina.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("kalinina.html",'border: 1px solid black;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table4'+"\n","a");
fs.write("kalinina.html",'{'+"\n","a");
fs.write("kalinina.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("kalinina.html",'align: right;'+"\n","a");
fs.write("kalinina.html",'text-align: right;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table4	td{'+"\n","a");
fs.write("kalinina.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("kalinina.html",'font: 10pt verdana;'+"\n","a");
fs.write("kalinina.html",''+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table5 {'+"\n","a");
fs.write("kalinina.html",'padding: 3px;'+"\n","a");
fs.write("kalinina.html",'border: 2px black;'+"\n","a");
fs.write("kalinina.html",'border-collapse: collapse;'+"\n","a");
fs.write("kalinina.html",'text-align: center;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.table5	td{'+"\n","a");
fs.write("kalinina.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("kalinina.html",'vertical-align: top'+"\n","a");
fs.write("kalinina.html",''+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",''+"\n","a");
fs.write("kalinina.html",'.cr'+"\n","a");
fs.write("kalinina.html",'{'+"\n","a");
fs.write("kalinina.html",'color: red;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'.cg'+"\n","a");
fs.write("kalinina.html",'{'+"\n","a");
fs.write("kalinina.html",'color: green;'+"\n","a");
fs.write("kalinina.html",'}'+"\n","a");
fs.write("kalinina.html",'</style>'+"\n","a");

fs.write("kalinina.html",'<div  class="panel2">'+"\n","a");
fs.write("kalinina.html",'<h1>Калинина</h1>'+"\n","a");
fs.write("kalinina.html",'<br>'+"\n","a");
fs.write("kalinina.html",'<h2>Пропущенных:'+kal+'</h2>'+"\n","a");///---
fs.write("kalinina.html",'</div>'+"\n","a");

fs.write("kalinina.html",'<hr>'+"\n","a");
fs.write("kalinina.html",'<div  class="panel">'+"\n","a");
fs.write("kalinina.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("kalinina.html",'<table class="table5" align="center">'+"\n","a");
fs.write("kalinina.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}

fs.write("kalinina.html",'</tr>'+"\n","a");
fs.write("kalinina.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("kalinina.html",'<td valing="top">'+"\n","a");
		fs.write("kalinina.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("kalinina.html",'<tr>'+"\n","a");
				fs.write("kalinina.html",'<td>'+"\n","a");
					fs.write("kalinina.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("kalinina.html",'</td>'+"\n","a");
			fs.write("kalinina.html",'</tr>'+"\n","a");
		fs.write("kalinina.html",'<tr>'+"\n","a");
			fs.write("kalinina.html",'<td>'+"\n","a");
				fs.write("kalinina.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==kalinina){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("kalinina.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("kalinina.html",''+"\n","a");
								fs.write("kalinina.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("kalinina.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("kalinina.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("kalinina.html",'</table>'+"\n","a");
			fs.write("kalinina.html",'</td>'+"\n","a");
		fs.write("kalinina.html",'</tr>'+"\n","a");
	fs.write("kalinina.html",'</table>'+"\n","a");
	fs.write("kalinina.html",'</td>'+"\n","a");
	fs.write("kalinina.html",''+"\n","a");	
}




fs.write("kalinina.html",'</tr>'+"\n","a");
fs.write("kalinina.html",'</table>'+"\n","a");
fs.write("kalinina.html",'</div>'+"\n","a");
fs.write("kalinina.html",'</body>'+"\n","a");
fs.write("kalinina.html",'</html>'+"\n","a");

setTimeout(HtmlByApicentr, 5000);
}
function HtmlByApicentr(){
	fs.write("apicentr.html", '', 'w');
	
	fs.write("apicentr.html",'<html>'+"\n","a");
fs.write("apicentr.html",'<head>'+"\n","a");
fs.write("apicentr.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("apicentr.html",'<style>'+"\n","a");
fs.write("apicentr.html",'body {'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.panel2 {'+"\n","a");
fs.write("apicentr.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("apicentr.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("apicentr.html",'font: 14pt verdana;'+"\n","a");
fs.write("apicentr.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("apicentr.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("apicentr.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.panel {'+"\n","a");
fs.write("apicentr.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("apicentr.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("apicentr.html",'font: 14pt courier;'+"\n","a");
fs.write("apicentr.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("apicentr.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("apicentr.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.rk{'+"\n","a");
fs.write("apicentr.html",'background: red'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table2 {'+"\n","a");
fs.write("apicentr.html",'border: 1px black;'+"\n","a");
fs.write("apicentr.html",'border-collapse: collapse;'+"\n","a");
fs.write("apicentr.html",'align: center;'+"\n","a");
fs.write("apicentr.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table2 th'+"\n","a");
fs.write("apicentr.html",'{'+"\n","a");
fs.write("apicentr.html",'text-align: center;'+"\n","a");
fs.write("apicentr.html",'background: #FFF;'+"\n","a");
fs.write("apicentr.html",'padding: 5px;'+"\n","a");
fs.write("apicentr.html",'border: 1px solid black;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table2	td{'+"\n","a");
fs.write("apicentr.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("apicentr.html",'border: 1px solid black;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",''+"\n","a");
fs.write("apicentr.html",'.table3 {'+"\n","a");
fs.write("apicentr.html",'border: 1px black;'+"\n","a");
fs.write("apicentr.html",'border-collapse: collapse;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table3 th'+"\n","a");
fs.write("apicentr.html",'{'+"\n","a");
fs.write("apicentr.html",'text-align: center;'+"\n","a");
fs.write("apicentr.html",''+"\n","a");
fs.write("apicentr.html",'padding: 5px;'+"\n","a");
fs.write("apicentr.html",'border: 1px solid black;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table3	td{'+"\n","a");
fs.write("apicentr.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("apicentr.html",'border: 1px solid black;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table4'+"\n","a");
fs.write("apicentr.html",'{'+"\n","a");
fs.write("apicentr.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("apicentr.html",'align: right;'+"\n","a");
fs.write("apicentr.html",'text-align: right;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table4	td{'+"\n","a");
fs.write("apicentr.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("apicentr.html",'font: 10pt verdana;'+"\n","a");
fs.write("apicentr.html",''+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table5 {'+"\n","a");
fs.write("apicentr.html",'padding: 3px;'+"\n","a");
fs.write("apicentr.html",'border: 2px black;'+"\n","a");
fs.write("apicentr.html",'border-collapse: collapse;'+"\n","a");
fs.write("apicentr.html",'text-align: center;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.table5	td{'+"\n","a");
fs.write("apicentr.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("apicentr.html",'vertical-align: top'+"\n","a");
fs.write("apicentr.html",''+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",''+"\n","a");
fs.write("apicentr.html",'.cr'+"\n","a");
fs.write("apicentr.html",'{'+"\n","a");
fs.write("apicentr.html",'color: red;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'.cg'+"\n","a");
fs.write("apicentr.html",'{'+"\n","a");
fs.write("apicentr.html",'color: green;'+"\n","a");
fs.write("apicentr.html",'}'+"\n","a");
fs.write("apicentr.html",'</style>'+"\n","a");

fs.write("apicentr.html",'<div  class="panel2">'+"\n","a");
fs.write("apicentr.html",'<h1>Эпицентр</h1>'+"\n","a");
fs.write("apicentr.html",'<br>'+"\n","a");
fs.write("apicentr.html",'<h2>Пропущенных:'+api+'</h2>'+"\n","a");///---
fs.write("apicentr.html",'</div>'+"\n","a");

fs.write("apicentr.html",'<hr>'+"\n","a");
fs.write("apicentr.html",'<div  class="panel">'+"\n","a");
fs.write("apicentr.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("apicentr.html",'<table class="table5" align="center">'+"\n","a");
fs.write("apicentr.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}

fs.write("apicentr.html",'</tr>'+"\n","a");
fs.write("apicentr.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("apicentr.html",'<td valing="top">'+"\n","a");
		fs.write("apicentr.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("apicentr.html",'<tr>'+"\n","a");
				fs.write("apicentr.html",'<td>'+"\n","a");
					fs.write("apicentr.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("apicentr.html",'</td>'+"\n","a");
			fs.write("apicentr.html",'</tr>'+"\n","a");
		fs.write("apicentr.html",'<tr>'+"\n","a");
			fs.write("apicentr.html",'<td>'+"\n","a");
				fs.write("apicentr.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==apicentr){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("apicentr.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("apicentr.html",''+"\n","a");
								fs.write("apicentr.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("apicentr.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("apicentr.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("apicentr.html",'</table>'+"\n","a");
			fs.write("apicentr.html",'</td>'+"\n","a");
		fs.write("apicentr.html",'</tr>'+"\n","a");
	fs.write("apicentr.html",'</table>'+"\n","a");
	fs.write("apicentr.html",'</td>'+"\n","a");
	fs.write("apicentr.html",''+"\n","a");	
}




fs.write("apicentr.html",'</tr>'+"\n","a");
fs.write("apicentr.html",'</table>'+"\n","a");
fs.write("apicentr.html",'</div>'+"\n","a");
fs.write("apicentr.html",'</body>'+"\n","a");
fs.write("apicentr.html",'</html>'+"\n","a");

setTimeout(HtmlByOfis, 5000);
}
function HtmlByOfis(){
	fs.write("ofis.html", '', 'w');
	
	fs.write("ofis.html",'<html>'+"\n","a");
fs.write("ofis.html",'<head>'+"\n","a");
fs.write("ofis.html",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+"\n","a");
fs.write("ofis.html",'<style>'+"\n","a");
fs.write("ofis.html",'body {'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.panel2 {'+"\n","a");
fs.write("ofis.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("ofis.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("ofis.html",'font: 14pt verdana;'+"\n","a");
fs.write("ofis.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("ofis.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("ofis.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.panel {'+"\n","a");
fs.write("ofis.html",'margin-right: 3%; /* Отступ справа */'+"\n","a");
fs.write("ofis.html",'margin-left: 3%; /* Отступ слева */'+"\n","a");
fs.write("ofis.html",'font: 14pt courier;'+"\n","a");
fs.write("ofis.html",'color: black; /* Цвет текста */'+"\n","a");
fs.write("ofis.html",'padding: 10px; /* Поля вокруг текста */'+"\n","a");
fs.write("ofis.html",'text-align: center; /* Выравнивание по ширине */'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.rk{'+"\n","a");
fs.write("ofis.html",'background: red'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table2 {'+"\n","a");
fs.write("ofis.html",'border: 1px black;'+"\n","a");
fs.write("ofis.html",'border-collapse: collapse;'+"\n","a");
fs.write("ofis.html",'align: center;'+"\n","a");
fs.write("ofis.html",'font: 10pt courier;'+"\n","a");//шрифт в таблице
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table2 th'+"\n","a");
fs.write("ofis.html",'{'+"\n","a");
fs.write("ofis.html",'text-align: center;'+"\n","a");
fs.write("ofis.html",'background: #FFF;'+"\n","a");
fs.write("ofis.html",'padding: 5px;'+"\n","a");
fs.write("ofis.html",'border: 1px solid black;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table2	td{'+"\n","a");
fs.write("ofis.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ofis.html",'border: 1px solid black;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",''+"\n","a");
fs.write("ofis.html",'.table3 {'+"\n","a");
fs.write("ofis.html",'border: 1px black;'+"\n","a");
fs.write("ofis.html",'border-collapse: collapse;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table3 th'+"\n","a");
fs.write("ofis.html",'{'+"\n","a");
fs.write("ofis.html",'text-align: center;'+"\n","a");
fs.write("ofis.html",''+"\n","a");
fs.write("ofis.html",'padding: 5px;'+"\n","a");
fs.write("ofis.html",'border: 1px solid black;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table3	td{'+"\n","a");
fs.write("ofis.html",'padding: 5px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ofis.html",'border: 1px solid black;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table4'+"\n","a");
fs.write("ofis.html",'{'+"\n","a");
fs.write("ofis.html",'width: 850px; /* Ширина ячейки */'+"\n","a");

fs.write("ofis.html",'align: right;'+"\n","a");
fs.write("ofis.html",'text-align: right;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table4	td{'+"\n","a");
fs.write("ofis.html",'padding: 2px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ofis.html",'font: 10pt verdana;'+"\n","a");
fs.write("ofis.html",''+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table5 {'+"\n","a");
fs.write("ofis.html",'padding: 3px;'+"\n","a");
fs.write("ofis.html",'border: 2px black;'+"\n","a");
fs.write("ofis.html",'border-collapse: collapse;'+"\n","a");
fs.write("ofis.html",'text-align: center;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.table5	td{'+"\n","a");
fs.write("ofis.html",'padding: 3px; /* Поля вокруг содержимого ячеек */'+"\n","a");
fs.write("ofis.html",'vertical-align: top'+"\n","a");
fs.write("ofis.html",''+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",''+"\n","a");
fs.write("ofis.html",'.cr'+"\n","a");
fs.write("ofis.html",'{'+"\n","a");
fs.write("ofis.html",'color: red;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'.cg'+"\n","a");
fs.write("ofis.html",'{'+"\n","a");
fs.write("ofis.html",'color: green;'+"\n","a");
fs.write("ofis.html",'}'+"\n","a");
fs.write("ofis.html",'</style>'+"\n","a");

fs.write("ofis.html",'<div  class="panel2">'+"\n","a");
fs.write("ofis.html",'<h1>Офис</h1>'+"\n","a");
fs.write("ofis.html",'<br>'+"\n","a");
fs.write("ofis.html",'<h2>Пропущенных:'+ofi+'</h2>'+"\n","a");///---
fs.write("ofis.html",'</div>'+"\n","a");

fs.write("ofis.html",'<hr>'+"\n","a");
fs.write("ofis.html",'<div  class="panel">'+"\n","a");
fs.write("ofis.html",'<h2>Период анализа: '+date_from+' - '+date_to+'</h2>'+"\n","a");
fs.write("ofis.html",'<table class="table5" align="center">'+"\n","a");
fs.write("ofis.html",'<tr>'+"\n","a");



if (sa.length>0){
	pass_temp=sa[sa.length-1].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong> Суббота,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < sa.length; i++){
							pass_temp=sa[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
						if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
						}

					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}

if (su.length>0){
	pass_temp=su[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Воскресенье,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < su.length; i++){
							pass_temp=su[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}


if (mo.length>0){
	pass_temp=mo[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Понедельник,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < mo.length; i++){
							pass_temp=mo[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}

if (tu.length>0){
	pass_temp=tu[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Вторник,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < tu.length; i++){
							pass_temp=tu[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}

fs.write("ofis.html",'</tr>'+"\n","a");
fs.write("ofis.html",'<tr>'+"\n","a");

if (we.length>0){
	pass_temp=we[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Среда,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < we.length; i++){
							pass_temp=we[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");

							}
							
								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}

if (th.length>0){
	pass_temp=th[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Четверг,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < th.length; i++){
							pass_temp=th[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
									if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
							}
						

								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}

if (fr.length>0){
	pass_temp=fr[0].split(',')
	date = pass_temp[0]
	fs.write("ofis.html",'<td valing="top">'+"\n","a");
		fs.write("ofis.html",'<table id="tab1" class="table5" style="display:block;" >'+"\n","a");
			fs.write("ofis.html",'<tr>'+"\n","a");
				fs.write("ofis.html",'<td>'+"\n","a");
					fs.write("ofis.html",'<strong>Пятница,'+date+'</strong>'+"\n","a");
				fs.write("ofis.html",'</td>'+"\n","a");
			fs.write("ofis.html",'</tr>'+"\n","a");
		fs.write("ofis.html",'<tr>'+"\n","a");
			fs.write("ofis.html",'<td>'+"\n","a");
				fs.write("ofis.html",'<table class="table2">'+"\n","a");

					for (var i=0; i < fr.length; i++){
							pass_temp=fr[i].split(',')
							
							color = "white"
							stat = "Пропущен"
							date = pass_temp[0]
							time = pass_temp[1]
							podr = pass_temp[2]
							tel = pass_temp[4]
							
							if (podr==ofis){
								if (pass_temp[7]){
								
								color = "palegreen"
								ref = "all_calls.html#"+pass_temp[8];
								title = pass_temp[9]+pass_temp[10]+pass_temp[11]+pass_temp[14]+pass_temp[15]
								stat ='<a href='+'"'+ref+'" '+'title='+'"'+title+'">'+'Отраб'+'</a>' 
							}
								
							fs.write("ofis.html",'<tr bgcolor="'+color+'">'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+time+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+podr+'</td>'+"\n","a");
								fs.write("ofis.html",''+"\n","a");
								fs.write("ofis.html",'<td>'+tel+'</td>'+"\n","a");
								fs.write("ofis.html",'<td>'+stat+'</td>'+"\n","a");
							fs.write("ofis.html",'</tr>'+"\n","a");
							}
							

								
							
					}
					
				fs.write("ofis.html",'</table>'+"\n","a");
			fs.write("ofis.html",'</td>'+"\n","a");
		fs.write("ofis.html",'</tr>'+"\n","a");
	fs.write("ofis.html",'</table>'+"\n","a");
	fs.write("ofis.html",'</td>'+"\n","a");
	fs.write("ofis.html",''+"\n","a");	
}




fs.write("ofis.html",'</tr>'+"\n","a");
fs.write("ofis.html",'</table>'+"\n","a");
fs.write("ofis.html",'</div>'+"\n","a");
fs.write("ofis.html",'</body>'+"\n","a");
fs.write("ofis.html",'</html>'+"\n","a");

setTimeout(full_screen_exit, 5000);
}

function full_screen_exit() {
	console.log("Phantomjs.Doing screenshot");
	
	page.render("beeline.png");
	setTimeout(exit, 5000);
}

function exit() {
	
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}