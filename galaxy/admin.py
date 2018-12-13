from django.contrib import admin
from galaxy.models import Chart, ClassRoom


# Register your models here.

class ChartAdmin(admin.ModelAdmin):
    list_display = ('owner', 'row_num', 'col_num', 'string')


class ClassRoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'chart', 'region_tag',
                    'floor_tag', 'number', 'slug',
                    'max_num', 'current_num',
                    'rate', 'usable',
                    'add_date', 'update_time',)


admin.site.register(Chart, ChartAdmin)
admin.site.register(ClassRoom, ClassRoomAdmin)
