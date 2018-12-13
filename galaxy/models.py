from django.db import models
from django.utils.encoding import python_2_unicode_compatible


# Create your models here.

@python_2_unicode_compatible
class Chart(models.Model):
    owner = models.CharField(default='', max_length=10)
    row_num = models.IntegerField(default=0)
    col_num = models.IntegerField(default=0)
    string = models.TextField(default='')

    def __str__(self):
        return self.owner


@python_2_unicode_compatible
class ClassRoom(models.Model):
    id = models.AutoField(primary_key=True)  # 教室id
    chart = models.OneToOneField(Chart, verbose_name='教室座位图', on_delete=models.DO_NOTHING)
    region_tag = models.CharField('区号', max_length=256)  # 区号
    floor_tag = models.IntegerField('楼层', default=0)  # 楼号
    number = models.IntegerField('编号', default=0)  # 编号
    slug = models.CharField('班级名称', max_length=256, unique=True)  # url
    max_num = models.IntegerField('容量', default=0)  # 最大容量
    usable = models.BooleanField('可用性', default=True)  # 是否可用
    current_num = models.IntegerField('当前人数', default=0)  # 当前人数
    rate = models.IntegerField('占座率', default=0)  # 占座率
    add_date = models.DateTimeField('添加时间', auto_now_add=True, editable=True)
    update_time = models.DateTimeField('更新时间', auto_now=True, null=True)

    def __str__(self):
        return self.slug

    class Meta:
        verbose_name = '教室'
        verbose_name_plural = '教室'
