# Generated by Django 2.2.2 on 2019-07-03 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RandomData',
            fields=[
                ('id', models.AutoField(help_text='primary key', primary_key=True, serialize=False)),
                ('random_data_list', models.CharField(help_text='string converted by random number list', max_length=42)),
                ('random_data_list_id', models.UUIDField(help_text='id of random data list')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'random_data',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='StoredData',
            fields=[
                ('id', models.AutoField(help_text='primary key', primary_key=True, serialize=False)),
                ('random_data_list_id', models.UUIDField(help_text='id of random data list')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'stored_data',
                'ordering': ['-created_at'],
            },
        ),
    ]