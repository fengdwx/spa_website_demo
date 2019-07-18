def convert_list_to_str(num_list):
    num_str = ','.join(map(str, num_list))
    return num_str


def convert_str_to_list(num_str):
    num_list = list(map(int, num_str.split(',')))
    return num_list
