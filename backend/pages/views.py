from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm


def mainView(request):
    print(request.user.is_authenticated)
    if request.user.is_authenticated:
        return render(request, "root.html")
    else: 
        return redirect("/accounts/login")



def registerView(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('main')
        else:
            return render(request, 'registration/register.html', {'form': form})
    
    else: 
        return render(request, "registration/register.html", {"form": UserCreationForm()})