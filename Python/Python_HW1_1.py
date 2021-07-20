def checkList(i):
    if(type(i) == list):
        return True

    return False

def flattenList(a):
    initList = []
    for element in a:

        if(checkList(element)):
            init = flattenList(element)
            for i in init:
                initList.append(i)
        else:
            initList.append(element)

    return initList


nonFlatList = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]

x = flattenList(nonFlatList)

print(x)
