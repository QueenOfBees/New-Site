# Generated by Django 2.1.3 on 2018-11-19 10:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('row_num', models.IntegerField(default=10)),
                ('col_num', models.IntegerField(default=10)),
                ('string', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='ClassRoom',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('region_tag', models.CharField(max_length=256, verbose_name='区号')),
                ('floor_tag', models.IntegerField(default=1, verbose_name='楼层')),
                ('number', models.IntegerField(default=1, verbose_name='编号')),
                ('slug', models.CharField(max_length=256, unique=True, verbose_name='班级网址')),
                ('max_num', models.IntegerField(default=0, verbose_name='容量')),
                ('usable', models.BooleanField(default=True)),
                ('current_num', models.IntegerField(default=0)),
                ('rate', models.IntegerField(default=0, verbose_name='占座率')),
                ('add_date', models.DateTimeField(auto_now_add=True, verbose_name='添加时间')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='更新时间')),
                ('chart', models.OneToOneField(on_delete=django.db.models.deletion.SET, to='galaxy.Chart', verbose_name='教室座位图')),
            ],
            options={
                'verbose_name': '教室',
                'verbose_name_plural': '教室',
            },
        ),
    ]
