from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer
from django.db.models import Sum

@api_view(["POST"])
def create_order(request):

    data = request.data

    quantity = int(data["quantity"])
    price = float(data["price"])

    total = quantity * price

    order = Order.objects.create(
        customer_name=data["customer_name"],
        phone=data["phone"],
        garment=data["garment"],
        quantity=quantity,
        price=price,
        total=total
    )

    serializer = OrderSerializer(order)

    return Response(serializer.data)

@api_view(["PUT"])
def update_order_status(request, pk):
    try:
        order = Order.objects.get(id=pk)

        new_status = request.data.get("status")

        if not new_status:
            return Response(
                {"error": "Status required"},
                status=400
            )

        order.status = new_status
        order.save()

        return Response({
            "message": "Status updated",
            "status": order.status
        })

    except Order.DoesNotExist:
        return Response(
            {"error": "Order not found"},
            status=404
        )

@api_view(["GET"])
def list_orders(request):

    orders = Order.objects.all()

    serializer = OrderSerializer(
        orders,
        many=True
    )

    return Response(serializer.data)

@api_view(["GET"])
def dashboard(request):

    total_orders = Order.objects.count()

    total_revenue = Order.objects.aggregate(
        Sum("total")
    )["total__sum"] or 0

    status_counts = {}

    for status in [
        "RECEIVED",
        "PROCESSING",
        "READY",
        "DELIVERED"
    ]:
        status_counts[status] = Order.objects.filter(
            status=status
        ).count()

    return Response({
        "total_orders": total_orders,
        "total_revenue": total_revenue,
        "status_counts": status_counts
    })

@api_view(["DELETE"])
def delete_order(request, id):

    order = Order.objects.get(id=id)

    order.delete()

    return Response({
        "message": "Order deleted"
    })