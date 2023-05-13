# https://replit.com/languages/python3
quantidade = int(input())

for indice in range(quantidade):
  casos = input().split(' ')
  numerador = float(casos[0])
  denominador = float(casos[1])

  if denominador == 0:
    print('divisao impossivel')
  else:
    resultado = numerador / denominador
    print("{:.1f}".format(resultado))