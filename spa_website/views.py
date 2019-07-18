import json
import random
import uuid
from django.shortcuts import render
from .models import RandomData, StoredData
from .utils import convert_list_to_str, convert_str_to_list
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


def random_data_html(request):
    return render(request, 'index.html')


# Create, store and return random data
# @csrf_exempt
def new_random_data(request):
    random_data_list = []
    # create random list
    for i in range(10):
        random_data_list.append(random.randint(0, 1000))
    random_data_str = convert_list_to_str(random_data_list)
    random_data_list_id = uuid.uuid4()

    # save the random data
    random_data_object = RandomData()
    random_data_object.random_data_list = random_data_str
    random_data_object.random_data_list_id = random_data_list_id
    random_data_object.save()
    response_dict ={'random_data_list': random_data_list, 'random_data_list_id': str(random_data_list_id)}
    # return HttpResponse(json.dumps(response_dict), content_type='application/json')
    return JsonResponse(response_dict)


# save random data to the table of StoredData
# @csrf_exempt
def save_random_data(request):
    # import pdb
    # pdb.set_trace()
    list_id = request.POST.get('list_id')
    stored_data_object = StoredData()
    stored_data_object.random_data_list_id = list_id
    stored_data_object.save()
    return HttpResponse(status = 200)


# get stored data from table
def stored_data_list(request):

    stored_object_list = StoredData.objects.order_by('-created_at')[:10]
    response_random_data_list = []
    # from table_2 get the list_id ,then use the list_id get the random data from table_1
    for stored_object in stored_object_list:
        random_data_list_id = stored_object.random_data_list_id
        # get the random data in table random_data by random_data_list_id
        random_data_list = RandomData.objects.get(random_data_list_id=random_data_list_id).random_data_list

        # convert the string of random_data to list
        for random_data in convert_str_to_list(random_data_list):
            response_random_data_list.append(random_data)
    # return HttpResponse(json.dumps(response_random_data_list), content_type = 'application/json')
    return JsonResponse(response_random_data_list, safe = False)

