var agora = new Date()
var dia_semana = agora.getDay()

/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

var dia_nomeado = ''
switch (dia_semana)
    {
        case 0:
            dia_nomeado = 'Domingo'
            break

        case 1:
            dia_nomeado = 'Segunda'
            break

        case 2:
            dia_nomeado = 'Terça'
            break

        case 3:
            dia_nomeado = 'Quarta'
            break

        case 4:
            dia_nomeado = 'Quinta'
            break

        case 5:
            dia_nomeado = 'Sexta'
            break
        
        case 6:
            dia_nomeado = 'Sábado'
            break

        default:
            dia_nomeado = '[ERRO] Dia inválido'
            break
    }

console.log(dia_nomeado)
