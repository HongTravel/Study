
# Generated by Django 4.1.7 on 2023-03-29 04:21

# Generated by Django 4.1.7 on 2023-03-28 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('address', models.CharField(max_length=128)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('phonenumber', models.CharField(max_length=128)),
            ],
        ),
    ]
