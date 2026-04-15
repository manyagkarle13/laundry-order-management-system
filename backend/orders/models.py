from django.db import models
import uuid

class Order(models.Model):

    STATUS_CHOICES = [
        ("RECEIVED", "Received"),
        ("PROCESSING", "Processing"),
        ("READY", "Ready"),
        ("DELIVERED", "Delivered"),
    ]

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    customer_name = models.CharField(max_length=100)

    phone = models.CharField(max_length=15)

    garment = models.CharField(max_length=100)

    quantity = models.IntegerField()

    price = models.FloatField()

    total = models.FloatField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="RECEIVED"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer_name