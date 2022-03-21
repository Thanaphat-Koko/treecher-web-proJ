# Generated by Django 4.0.2 on 2022-03-20 15:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0008_question_alter_classroom_students_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='date_updated',
        ),
        migrations.RemoveField(
            model_name='question',
            name='date_updated',
        ),
        migrations.AlterField(
            model_name='classroom',
            name='join_code',
            field=models.CharField(default='lynqbq', max_length=7),
        ),
        migrations.AlterField(
            model_name='post',
            name='published',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 20, 22, 59, 34, 147995)),
        ),
    ]
