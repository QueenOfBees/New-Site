from django.shortcuts import render
from django.http import JsonResponse
import json
from galaxy.models import ClassRoom, Chart
from chart.models import SenderInfo
from django.core.mail import send_mail
from django.conf import settings


# Create your views here.


def index(request):
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
    send_mail(subject, message, email_sender, [settings.EMAIL_HOST_USER], fail_silently=False)
    return JsonResponse("发送成功", safe=False)
