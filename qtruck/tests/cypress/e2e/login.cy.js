const profile = require('../fixtures/profile');
import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login Papito Bootcamp', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Quin',
      instagram: '@quin.nery',
      password: 'pwd123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })
  

  it('nao deve logar com senha invalida', () => {
    const user = {
      instagram: '@quin.nery',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar instagram inexistente', () => {
    const user = {
      instagram: '@quinnery',
      password: '123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', ()=> {
    const user = {
      password: '132abc'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', ()=> {
    const user = {
      instagram: '@quin.nery'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatórios', ()=> {
    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
})
