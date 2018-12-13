from django.db import models
from django.utils.encoding import python_2_unicode_compatible


# Create your models here.


@python_2_unicode_compatible
class SenderInfo(models.Model):
    email_address = models.EmailField('邮箱', max_length=256)
    subject = models.CharField('主题', max_length=256, default='无主题')
    message = models.TextField('内容', default='')
    submit_time = models.DateTimeField('提交时间', auto_now=True, editable=True)

    def __str__(self):
        return self.email_address

    class Meta:
        verbose_name = '邮件'
        verbose_name_plural = '邮件'


@python_2_unicode_compatible
class ChartInfo(models.Model):
    pass
