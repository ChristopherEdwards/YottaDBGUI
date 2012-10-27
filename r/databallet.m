	;
	; This file is part of DataBallet.
	; Copyright (C) 2012 Laurent Parenteau <laurent.parenteau@gmail.com>
	;
	; DataBallet is free software: you can redistribute it and/or modify
	; it under the terms of the GNU Affero General Public License as published by
	; the Free Software Foundation, either version 3 of the License, or
	; (at your option) any later version.
	;
	; DataBallet is distributed in the hope that it will be useful,
	; but WITHOUT ANY WARRANTY; without even the implied warranty of
	; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	; GNU Affero General Public License for more details.
	;
	; You should have received a copy of the GNU Affero General Public License
	; along with DataBallet. If not, see <http://www.gnu.org/licenses/>.
	;

conf()
	;
	; Required configuration
	;

	; User configuration.
	do ^userconf

	; HTTP status codes
	; set conf("status",100)="Continue"
	; set conf("status",101)="Switching Protocols"
	set conf("status",200)="OK"
	; set conf("status",201)="Created"
	; set conf("status",202)="Accepted"
	; set conf("status",203)="Non-Authoritative Information"
	; set conf("status",204)="No Content"
	; set conf("status",205)="Reset Content"
	; set conf("status",206)="Partial Content"
	; set conf("status",300)="Multiple Choices"
	set conf("status",301)="Moved Permanently"
	; set conf("status",302)="Found"
	; set conf("status",303)="See Other"
	set conf("status",304)="Not Modified"
	; set conf("status",305)="Use Proxy"
	; set conf("status",307)="Temporary Redirect"
	set conf("status",400)="Bad Request"
	; set conf("status",401)="Unauthorized"
	; set conf("status",402)="Payment Required"
	set conf("status",403)="Forbidden"
	set conf("status",404)="Not Found"
	set conf("status",404,"data")="<html><head><title>404 : Page Not Found</title></head><body><h1>404 : Page Not Found</h1></body></html>"
	set conf("status",404,"ct")="text/html"
	set conf("status",404,"cl")=$zlength(conf("status","404","data"))
	set conf("status",405)="Method Not Allowed"
	; set conf("status",406)="Not Acceptable"
	; set conf("status",407)="Proxy Authentication Required"
	set conf("status",408)="Request Timeout"
	; set conf("status",409)="Conflict"
	; set conf("status",410)="Gone"
	; set conf("status",411)="Length Required"
	; set conf("status",412)="Precondition Failed"
	; set conf("status",413)="Request Entity Too Large"
	; set conf("status",414)="Request-URI Too Long"
	; set conf("status",415)="Unsupported Media Type"
	; set conf("status",416)="Requested Range Not Satisfiable"
	; set conf("status",417)="Expectation Failed"
	; set conf("status",500)="Internal Server Error"
	; set conf("status",501)="Not Implemented"
	; set conf("status",502)="Bad Gateway"
	; set conf("status",503)="Service Unavailable"
	; set conf("status",504)="Gateway Timeout"
	set conf("status",505)="HTTP Version Not Supported"
	set conf("status",505,"data")="<html><head><title>505 : HTTP Version Not Supported</title></head><body><h1>505 : HTTP Version Not Supported</h1></body></html>"
	set conf("status",505,"ct")="text/html"
	set conf("status",505,"cl")=$zlength(conf("status","505","data"))

	; Content-types mapping
	set conf("ct",".htm")="text/html"
	set conf("ct",".html")=conf("ct",".htm")
	set conf("ct",".css")="text/css"
	set conf("ct",".xml")="text/xml"
	set conf("ct",".txt")="text/plain"
	set conf("ct",".js")="application/javascript"
	set conf("ct",".jpg")="image/jpeg"
	set conf("ct",".jpeg")=conf("ct",".jpg")
	set conf("ct",".gif")="image/gif"
	set conf("ct",".png")="image/png"
	set conf("ct",".ico")="image/vnd.microsoft.icon"

	; Define compressible content-type
	set conf("compressible","text/html")=1
	set conf("compressible","text/css")=1
	set conf("compressible","text/xml")=1
	set conf("compressible","text/plain")=1
	set conf("compressible","application/javascript")=1

	; DataBallet version : YYYYMMDD
	set databalletver=20121022

	quit

start()
	;
	; Start the HTTP server.
	;
	set $ZTRAP="do errhandler^databallet"
	new conf
	do conf
	; Cleanup scratch global
	kill @TMP@("DataBallet")
	; Start logging process
	job start^log(conf("log")):(output="/dev/null":error="/dev/null")
	new port
	set port=$order(conf("listenon",""))
	for  quit:port=""  do
	.	job listen^databallet(port):(output="/dev/null":error="/dev/null")
	.	set port=$order(conf("listenon",port))

	; Coffee break...
	for  quit:$data(@TMP@("DataBallet","quit"))  hang 5

	quit

listen(port)
	;
	; Listen on a particular socket for incomming connection
	;
	set $ZTRAP="do errhandler^databallet"
	new conf
	do conf
	new socket,key,handle,p,socketfd
	set socket="databallet"
	open socket:(ZLISTEN=conf("listenon",port)_":TCP":znoff:zdelay:zbfsize=2048:zibfsize=2048:attach="databallet"):30:"SOCKET"
	use socket
	write /listen(5)
	; When a connection will be made and the connected socket created, it will use the next number, so we can use that to
	; redirect stdin and stdout of the spawned mumps process so it is connected to that new socket.  This is needed until GT.M
	; support passing sockets to other processes directly.  Since the pipe device will create another two file descriptors,
	; the socket we want is actually the 3rd one at the end of the list.
	set p="ls"
	open p:(command="ls -1 /proc/"_$job_"/fd/ | tail -n 3 | head -n 1")::"PIPE"
	;open p:(command="ls -1 /proc/"_$job_"/fd/ | tail -n 1")::"PIPE"
	use p
	read socketfd
	close p
	use socket
	set socketfd=socketfd+2
	for  quit:$data(@TMP@("DataBallet","quit"))  do
	.	set key=""
	.	for  do  quit:key'=""  quit:$data(@TMP@("DataBallet","quit"))
	.	.	write /wait(1)
	.	.	set key=$key
	.	quit:$data(@TMP@("DataBallet","quit"))
	.	set handle=$piece(key,"|",2)
	.	; Spawn a new process to handle the connection then close the connected socket as we won't use it from here.
	.	zsystem "PORT="_port_" $gtm_dist/mumps -run serve^databallet <&"_socketfd_" >&"_socketfd_" 2>>"_conf("errorlog")_" &"
	.	close socket:(socket=handle:exception="new dontcare")
	.	use socket
	close socket
	quit

serve()
	;
	; Server web page(s) to a connected client.
	;
	set $ZTRAP="do errhandler^databallet"
	new conf
	do conf
	new line,eol,delim,connection,port
	set eol=$char(13)_$char(10)
	set delim=$char(10)
	set timeout=10
	set connection("PORT")=$ztrnlnm("PORT","","","","","VALUE")
	use $io:(nowrap:delim=delim:znoff:zdelay:zbfsize=2048:zibfsize=2048)
	read line:timeout
	if $test,'$zeof do
	.	set $x=0
	.	set connection("HTTPVER")=$$gethttpver^request(line)
	.	if connection("HTTPVER")="HTTP/1.1" set connection("CONNECTION")="KEEP-ALIVE" do keepalive(line) if 1
	.	else  if connection("HTTPVER")="HTTP/1.0" set connection("CONNECTION")="CLOSE" do keepalive(line) if 1
	.	else  if connection("HTTPVER")="" do serve09(line) if 1
	.	else  do senderr^response("505")
	quit

serve09(line)
	;
	; Serve an HTTP/0.9 request.
	;
	; HTTP/0.9 supports only simple-request and simple-response :
	; Simple-Request  = "GET" SP Request-URI CRLF
	; Simple-Response = [ Entity-Body ]
	;
	new request,response

	; Extract method
	set request("method")=$$getmethod^request(line)

	; HTTP/0.9 only allow the GET method.
	quit:request("method")'="GET"

	; Extract the Request-URI from the 1st line.
	set request("uri")=$$geturi^request(line)

	; Init some response fields
	do init^response()

	; Route the request to the correct handler.  This will populate the response variable.
	do route^routing()

	; Send the content if everything is fine.
	do:response("status")="200" send^response()

	quit

servesinglereq(line)
	;
	; Serve a single HTTP/1.0 or HTTP/1.1 request.
	;
	new request,response,length

	; Extract method
	set request("method")=$$getmethod^request(line)

	; Extract the Request-URI
	set request("uri")=$$geturi^request(line)

	; Init some response fields
	do init^response()

	; Read all request
	for  read line:timeout quit:'$test  quit:line=$char(13)  quit:$zeof  do parsehdrs^request(line)
	if ('$test)!($zeof) do set^response(408)  if 1
	else  do
	.	; If the request advertised a body, read it.
	.	if $data(request("headers","CONTENT-LENGTH")) do
	.	.	set request("content")=""
	.	.	set length=request("headers","CONTENT-LENGTH")
	.	.	use $io:(nodelim)
	.	.	for  read line#length:timeout quit:'$test  quit:$zeof  set request("content")=request("content")_line  set length=length-$zlength(line)  quit:length<1
	.	.	use $io:(delim=delim)
	.	; Route the request to the correct handler.  This will populate the response variable.
	.	do route^routing()

	; Send response headers
	do sendresphdr^response()

	; Send response content
	do send^response()

	quit

keepalive(line)
	;
	; Handle keep-alive connections for HTTP/1.0 and HTTP/1.1.
	;

	for  do servesinglereq(line) quit:$data(@TMP@("DataBallet","quit"))  quit:connection("CONNECTION")'="KEEP-ALIVE"  read line:timeout quit:'$test  quit:$zeof
	quit

errhandler()
	;
	; Error handler in case something bad happens.	Will print some debug information to the log file and halt.
	;

	set $ztrap="halt"
	new file,old
	set old=$io
	set file=conf("errorlog")
	open file:(append:nofixed:wrap:noreadonly:chset="M")
	use file
	write "Error at "_$horolog,!,$zstatus,!
	zshow "SIDV"
	close file
	use old
	halt

