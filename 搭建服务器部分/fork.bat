@echo OFF
color 0a
Title 小米球Ngrok启动工具 by:刺球
Mode con cols=109 lines=30
:START
ECHO.
Echo                  ==========================================================================
ECHO.
Echo                                         小米球NgrokNgrok客户端启动工具
ECHO.
Echo                                         作者:刺球 QQ：752102401
ECHO.
Echo                                         官方QQ群：150134730
ECHO.
Echo                                         官方论坛：www.ciqiuwl.cn
ECHO.
Echo                                         更多版本：http://ngrok.ciqiuwl.cn
ECHO.
Echo                  ==========================================================================
Echo.
echo.
echo.
:TUNNEL
Echo               输入需要启动的域名前缀，如“aa” ，即分配给你的穿透域名为：“aa.ngrok.xiaomiqiu.cn”
ECHO.
ECHO.
ECHO.
set /p clientid=   请输入域名前缀：
echo.
set /p port=   请输入端口：
ngrok -config=ngrok.cfg -subdomain %clientid% %port%
PAUSE
goto TUNNEL

