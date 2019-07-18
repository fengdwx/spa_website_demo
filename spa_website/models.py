from django.db import models
from django.utils import timezone


class RandomData(models.Model):
    """
    Store each random list in the table
    """
    id = models.AutoField(primary_key=True, help_text='primary key')
    random_data_list = models.CharField(max_length=42, null=False, help_text='string converted by random number list')
    random_data_list_id = models.UUIDField(null=False, help_text='id of random data list')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        db_table = 'random_data'
        ordering = ['-created_at']


class StoredData(models.Model):
    """
    user stored data from website
    """
    id = models.AutoField(primary_key=True, help_text='primary key')
    random_data_list_id = models.UUIDField(null=False, help_text='id of random data list')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    class Meta:
        db_table = 'stored_data'
        ordering = ['-created_at']
