	;
	; httpm, an HTTP server developed using GT.M
	; Copyright (C) 2012 Laurent Parenteau <laurent.parenteau@gmail.com>
	;
	; This program is free software: you can redistribute it and/or modify
	; it under the terms of the GNU Affero General Public License as published by
	; the Free Software Foundation, either version 3 of the License, or
	; (at your option) any later version.
	;
	; This program is distributed in the hope that it will be useful,
	; but WITHOUT ANY WARRANTY; without even the implied warranty of
	; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	; GNU Affero General Public License for more details.
	;
	; You should have received a copy of the GNU Affero General Public License
	; along with this program. If not, see <http://www.gnu.org/licenses/>.
	;

gethttpver(line)
	;
	; Get the HTTP version from the request line.
	;
	quit $$FUNC^%UCASE($ztranslate($zpiece(line," ",3),$char(13)))

getmethod(line)
	;
	; Get the HTTP method from the request line.
	;
	quit $$FUNC^%UCASE($ztranslate($zpiece(line," ",1),$char(13)))

geturi(line)
	;
	; Parse the requested URI and get the requested entity from it.
	;
	quit $ztranslate($zpiece(line," ",2),$char(13))

parsehdrs(line)
	;
	; Read and parse a request header.  Will update 'request' and 'connection'.
	;
	new fieldname
	set fieldname=$$FUNC^%UCASE($zpiece(line," ",1))
	if fieldname="HOST:" set request("host")=$$FUNC^%UCASE($ztranslate($zpiece(line," ",2),$char(13)))
	else  if fieldname="CONNECTION:" set connection("connection")=$$FUNC^%UCASE($ztranslate($zpiece(line," ",2),$char(13)))
	else  set request($ztranslate(fieldname,":"))=$ztranslate($zpiece(line," ",2),$char(13))

	quit

