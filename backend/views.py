from django.shortcuts import render

class LoginView(CartMixin, View):

    def get(self, request, *args, **kwargs):
        form = LoginView(request.POST or None)
        context = {'form': form}
        return render