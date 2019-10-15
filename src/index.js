module.exports = function check(str, bracketsConfig) {  

  if (str.length % 2 != 0) return false;

  let checker = 1;
	let tempString = "";
	while ((str.length > 0) && checker > 0) {
		checker = bracketsConfig.length;
		for (let i = 0; i < bracketsConfig.length; i++) {
			tempString = bracketsConfig[i].join();
			tempString = tempString.replace(",", "");			
			if (str.includes(tempString)) {
				str = str.replace(tempString, "");
			}
			else {checker = checker - 1};			
		}
	}

	if (str.length == 0) return true;
	else if (str.length > 0) return false;
}
