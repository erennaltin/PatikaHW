def checkList(i):
    if(type(i) == list):
        return True

    return False


def reverseList(a):
    finalList = list(reversed(a))
    for index, element in enumerate(finalList):
        if checkList(element):
            finalList[index] = list(reversed(element))
    return finalList


flatList = [[1, 2], [3, 4], [5, 6, 7]]

x = reverseList(flatList)

print(x)
