from django.shortcuts import render
from django.http import JsonResponse
import json
from galaxy.models import ClassRoom, Chart
from chart.models import SenderInfo
from django.core.mail import send_mail
from django.conf import settings
import schedule
import threading
import time
import os


# Create your views here.


def index(request):
    def run():
        文档 = r'C:\Users\Firefox\PycharmProjects\C\C_2\matrix.txt'
        第一行 = open(文档, 'r+')
        for 行 in 第一行:
            new_line = str(行).replace('E', 'a').replace('O', 'u').replace('X', '_')
            python对象 = json.loads(new_line)
            print(python对象)
            c = Chart.objects.filter(owner=python对象['classroom']).update(row_num=python对象['row'],
                                                                         col_num=python对象['col'],
                                                                         string=python对象['chart'],
                                                                         )
            r = ClassRoom.objects.get(slug=python对象['classroom'])
            r.current_num = python对象['people']
            r.max_num = python对象['row'] * python对象['col'] - 2
            r.rate = r.current_num * 100 / r.max_num
            r.save()

    def run_多线程():
        threading.Thread(target=run).start()

    def main():
        run_多线程()

    main()
    return render(request, 'index.html')


def gallery(request):
    return render(request, 'gallery.html')


def ajax_dict(request):
    name = request.GET.get('class')
    classroom = ClassRoom.objects.get(slug=name)
    time = classroom.update_time.strftime('%m-%d %H:%M:%S')
    max_num = classroom.max_num
    current_num = classroom.current_num
    chart = classroom.chart.string
    list1 = chart.split()
    name_dict = {'map': list1, 'time': time, 'max_num': max_num, 'current_num': current_num}
    return JsonResponse(name_dict, safe=True)


def send_email(request):
    email_sender = request.GET.get('email')
    subject = request.GET.get('subject')
    message = request.GET.get('message')
    SenderInfo.objects.get_or_create(email_address=email_sender, subject=subject, message=message)
    print(email_sender)
    print(subject)
    # send_mail(subject, message, email_sender, [settings.EMAIL_HOST_USER], fail_silently=False)
    return JsonResponse({'res': True, }, safe=False)
