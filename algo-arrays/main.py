from incomplete_functions import *
from mystery_functions import *

swap_v1()
swap_v2()

array_number_1 = [1,53,30,10,20,30,100,2]
array_number_2 = [999,53,30,10,20,1,100,999]
array_number_3 = ["a","Bonjour","Salut","a"]
ordered_array = [0,1,2,50,60,61,68,77,78,100,103,112,113,223,258]
array_test = [1,3,1,10,5,50,4,4,20,100,30,10,1,7,124,500,500]

print (min_value(ordered_array))
print (max_value(ordered_array))
print (count(500,array_test))
print (search_v1(1,array_test))
print (search_v2(0,array_test))
print (search_v3(1,array_test))