from django.contrib import admin
from chart.models import SenderInfo


# Register your models here.


class EmailAdmin(admin.ModelAdmin):
    list_display = ('email_address', 'subject', 'message', 'submit_time')


admin.site.register(SenderInfo, EmailAdmin)
