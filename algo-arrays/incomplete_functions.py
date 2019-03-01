def swap_v1():
    a = 1
    b = 999
    print("a vaut {} et b vaut {}".format(a, b))
    # a vaut 1 et b vaut 999

    a = b
    b = a

    print("a vaut {} et b vaut {}".format(a, b))
    # a vaut 999 et b vaut 1
    # ?


def swap_v2():
    a = 1
    b = 999
    print("a vaut {} et b vaut {}".format(a, b))
    # a vaut 1 et b vaut 999

    c = a
    a = b
    b = c

    print("a vaut {} et b vaut {}".format(a, b))
    # a vaut 999 et b vaut 1
    # ?


def min_value(array):
    minValue = array[0]
    for i in range(len(array)):
        if array[i] < minValue:
            minValue = array[i]
    return minValue


def max_value(array):
    maxValue = array[0]
    for i in range(len(array)):
        if array[i] > maxValue:
            maxValue = array[i]
    return maxValue


def count(value, array):
    compter = 0
    for i in range(len(array)):
        if array[i] == value:
            compter += 1
    return compter


def search_v1(value, array):
    return count(value, array) > 0


def search_v2(value, array):
    for i in range(len(array)):
        if array[i] == value:
            return True
        else:
            return False


def search_v3(value, array):
    i = 0
    while i < len(array):
        if array[i] == value:
            return True
        else:
            return False


def search_v4(value, array):
    pass


def search_in_ordered_v1(value, array):
    pass


def two_biggest(array):
    pass


def search(value, array):
    pass


def search_in_ordered_v2(value, array, index_debut, index_fin):
	if index_debut > index_fin:
		return False

    index_milieu = int((index_debut+index_fin)/2)

	if array[index_milieu] == value:
		return True
	elif array[index_milieu] > value:
	# Chercher à gauche
		return search_in_ordered_v2(value,array,index_debut,index_milieu-1)
	else:
	# Chercher à droite
		return search_in_ordered_v2(value,array,index_debut,index_fin)
