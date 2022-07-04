[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
- [22,16,27,2,18,6]
- [16,22,27,2,18,6]
- [16,22,2,27,18,6]
- [16,2,22,27,18,6]
- [2,16,22,27,18,6]
- [2,16,22,18,27,6]
- [2,16,18,22,27,6]
- [2,16,18,22,6,27]
- [2,16,18,6,22,27]
- [2,16,6,18,22,27]
- [2,6,16,18,22,27]

Big-O gösterimini yazınız.
- Her tur bir sorgu azalacak şekilde:
- 1. n
- 2. n-1
- 3. n-2
- ...
- 6. 1 (n-5)

- yani adımların toplamı (n x (n + 1)) / 2 = O(n^2)

Time Complexity: 
- Average case: Aradığımız sayının ortada olması: between O(n) and O(n^2)
- Worst case: Aradığımız sayının sonda olması: O(n^2)
- Best case: Aradığımız sayının dizinin en başında olması: O(n)

Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
- Average Case


[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
- [3,7,5,8,2,9,4,15,6]
- [3,5,7,8,2,9,4,15,6]
- [3,5,7,2,8,9,4,15,6]
- [3,5,2,7,8,9,4,15,6]
