function updateClock() {
    var now = new Date();
    var nomdia = now.getDay(),
        mont = now.getMonth(),
        numdia = now.getDate(),
        yea = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        ampm1 = "AM";

    if (hour >= 12) {
        ampm1 = "PM";
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
        "Octubre", "Noviembre", "Diciembre"
    ];
    var week = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Vierves", "Sabado"];
    var ids = ["nombredia", "mes", "numerodia", "Año", "hora", "minu", "seco", "veri"];
    var values = [week[nomdia], months[mont], numdia.pad(2), yea, hour.pad(2), min.pad(2), sec.pad(2), ampm1];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}