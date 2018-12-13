# Generated by Django 2.1.3 on 2018-11-19 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('galaxy', '0002_auto_20181119_1848'),
    ]

    operations = [
        migrations.AddField(
            model_name='chart',
            name='owner',
            field=models.CharField(default='256', max_length=10),
        ),
        migrations.AlterField(
            model_name='chart',
            name='col_num',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='chart',
            name='row_num',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='classroom',
            name='floor_tag',
            field=models.IntegerField(default=0, verbose_name='楼层'),
        ),
        migrations.AlterField(
            model_name='classroom',
            name='number',
            field=models.IntegerField(default=0, verbose_name='编号'),
        ),
    ]
