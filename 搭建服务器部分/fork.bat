@echo OFF
color 0a
Title С����Ngrok�������� by:����
Mode con cols=109 lines=30
:START
ECHO.
Echo                  ==========================================================================
ECHO.
Echo                                         С����NgrokNgrok�ͻ�����������
ECHO.
Echo                                         ����:���� QQ��752102401
ECHO.
Echo                                         �ٷ�QQȺ��150134730
ECHO.
Echo                                         �ٷ���̳��www.ciqiuwl.cn
ECHO.
Echo                                         ����汾��http://ngrok.ciqiuwl.cn
ECHO.
Echo                  ==========================================================================
Echo.
echo.
echo.
:TUNNEL
Echo               ������Ҫ����������ǰ׺���硰aa�� �����������Ĵ�͸����Ϊ����aa.ngrok.xiaomiqiu.cn��
ECHO.
ECHO.
ECHO.
set /p clientid=   ����������ǰ׺��
echo.
set /p port=   ������˿ڣ�
ngrok -config=ngrok.cfg -subdomain %clientid% %port%
PAUSE
goto TUNNEL

