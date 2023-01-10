from django.shortcuts import render


# Create your views here.
def citydata(request):
    return render(request,'weatherapp/base.html')
