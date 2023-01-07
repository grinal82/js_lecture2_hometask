from datetime import datetime


def prime_checker(n):
    """Функция проверяет является ли число простым
    Args:
        n (type: int)
    Returns:
        _type_: 1 if true
    """
    if n == 1:
        pass
    elif n == 2:
        return 1
    else:
        for i in range(2, round(n/2)+1):
            if n % i == 0:
                break
            elif n % i != 0:
                if i == round(n/2):
                    return 1


def get_prime_list(num):
    n = 1
    counter = 0                         #запускаем счетчик
    yes_prime = 0
    prime_numbers = []

    while counter <= num - 1:           #цикл до момента когда счетчик будет равен кол-ву простых чисел, кот. нужно найти (num)
        yes_prime = prime_checker(n)    #проверяем является ли текущее число 'n' простым
        if yes_prime == 1:
            prime_numbers.append(n)     #проверяем текущее число 'n' 
            counter += 1                #при нахождении простого числа увеличиваем счетчик
        n += 1                          #переходим к следующему числу 'n'
    return prime_numbers


start = datetime.now()
print(get_prime_list(100))
end = datetime.now()

td = (end - start).total_seconds() * 10**3
print(f"The time of execution of above program is : {td:.03f}ms")
