/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 02-oct-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = 
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


function myFunction() {
    var x = 10;
    var y = 20;
    var a = eval("x * y") + "<br>";
    var b = eval("2 + 2") + "<br>";
    var c = eval("x + 17") + "<br>";
    var res = a + b + c;
    document.getElementById("demo").innerHTML = res;
}