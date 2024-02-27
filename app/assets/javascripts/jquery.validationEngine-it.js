(function($){
    $.fn.validationEngineLanguage = function(){};
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Campo richiesto",
                    "alertTextCheckboxMultiple": "* Per favore selezionare un'opzione",
                    "alertTextCheckboxe": "* E' richiesta la selezione della casella",
                    "alertTextDateRange": "* Sono richiesti i due campi data per un periodo"
                },
                "requiredInFunction": {
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Il campo deve rispondere al requisito"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimo ",
                    "alertText2": " caratteri consentiti"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Massimo ",
                    "alertText2": " caratteri consentiti"
                },
                "length": {
                    "regex": "none",
                    "alertText": "* Fra ",
                    "alertText2": " e ",
                    "alertText3": " caratteri permessi"
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Numero di caselle da selezionare in eccesso"
                },
				        "groupRequired": {
                    "regex": "none",
                    "alertText": "* Almeno un campo del gruppo deve essere compilato"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Valore minimo richiesto "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Valore massimo superato "
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Per favore selezionare almeno ",
                    "alertText2": " opzioni"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* I campi non corrispondono"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Non valido numero di carta di credito"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Numero di telefono non corretto"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Indirizzo non corretto"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Numero intero non corretto"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. Credit: bassistance
                    "regex": /^[\-\+]?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)$/,
                    "alertText": "* Numero decimale non corretto"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Valore minimo è  "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Valore massimo è "
                },
                "date": {
                    //	Check if date is valid by leap year
			              "func": function (field) {
					              var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					              var match = pattern.exec(field.val());
					              if (match == null)
				                return false;
					              var year = match[1];
					              var month = match[2]*1;
					              var day = match[3]*1;
					              var date = new Date(year, month - 1, day); // because months starts from 0.
					              return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				              },
                    "alertText": "* Data non  corretta, re-inserire secondo formato AAAA-MM-GG"
                },
                "date_mm-yy": {
                    "regex": /^\d{2}\/\d{2}$/,
                    "alertText": "* Data non corretta, re-inserire secondo formato MM/AA"
                },
                "date_dd-mm-yyyy": {
                  "regex": /^\d{2}\/\d{2}\/\d{4}$/,
                  "alertText": "* Data non corretta, re-inserire secondo formato gg/mm/AAAA"
                },
                "date_dd-mm-yyyy_minus": {
                  "regex": /^\d{2}\-\d{2}\-\d{4}$/,
                  "alertText": "* Data non corretta, re-inserire secondo formato gg-mm-AAAA"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Intervallo di Date"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Intervallo data/ora"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Data precedente a "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Data passata "
                },
                "serial_number": {
                    "regex": /^[a-zA-Z]*[0-9]*$/,
                    "alertText": "* Ammesse le lettere solo all'inizio del campo"
                },
                "serial_numberSp": {
                    "regex": /^[a-zA-Z0-9][0-9]*$/,
                    "alertText": "* Ammessa 1 sola lettera all'inizio del campo"
                },
                "ipv4": {
                  	"regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* IP non corretto"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL non corretta"
                },
                "onlyNumber": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Solo numeri"
                },
				        "onlyLetter": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Solo lettere"
                },
                "onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Solo lettere (è possibile inserire lettere accentate)"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Solo numeri"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Solo lettere"
                },
                "noSpecialCharacters": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Caratteri speciali non permessi"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* Caratteri speciali non permessi"
                },
                "validate2fields": {
                    "nname": "validate2fields",
                    "alertText": "* Occorre inserire nome e cognome"
                },
                "ItalianFiscalCode": {
                    "regex": /^([A-Za-z]{6}[0-9LMNPQRSTUVlmnpqrstuv]{2}[ABCDEHLMPRSTabcdehlmprst]{1}[0-9LMNPQRSTUVlmnpqrstuv]{2}[A-Za-z]{1}[0-9LMNPQRSTUVlmnpqrstuv]{3}[A-Za-z]{1})$/,
                    "alertText": "* Formato non valido per il Codice Fiscale"
                },
                "ItalianVAT": {
                    "regex": /^([0-9]{11})$/,
                    "alertText": "* Formato non valido per la Partita IVA"
                },
                "ajaxUserCall": {
                    "file": "ajaxValidateFieldName",
                    "extraData": "name=eric",
                    "alertTextLoad": "* Caricamento, attendere per favore",
                    "alertText": "* Questo user � gi� stato utilizzato"
                },
                "ajaxNameCall": {
                    "file": "ajaxValidateFieldName",
                    "alertText": "* Questo nome � gi� stato utilizzato",
                    "alertTextOk": "* Questo nome � disponibile",
                    "alertTextLoad": "* Caricamento, attendere per favore"
                },
				        "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
      				 "ajaxNameCallPhp": {
                    // remote json service location
                    "url": "phpajax/ajaxValidateFieldName.php",
                    // error
                    "alertText": "* This name is already taken",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
  	            //tls warning:homegrown not fielded
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded
        				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
  	            }
            };

        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
