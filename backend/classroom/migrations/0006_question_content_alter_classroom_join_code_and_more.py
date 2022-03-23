# Generated by Django 4.0.2 on 2022-03-22 17:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0005_quiz_content_alter_classroom_join_code_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='content',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='classroom',
            name='join_code',
            field=models.CharField(default='lkpyyd', max_length=7),
        ),
        migrations.AlterField(
            model_name='post',
            name='published',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 23, 0, 16, 18, 789306)),
        ),
    ]
