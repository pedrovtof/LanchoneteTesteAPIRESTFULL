const clienteModels = require('../models/clientes')

async function ListarClientes(req, res){

    const { id } = req.params

    const obj = id ? {_id: id}: null

    const client = await clienteModels.find(obj)

    res.send(client)
}

async function CriarCliente(req, res){

    const {
        name_cliente,
        mail,
        phone_number,
        adress,
        password,
    } = req.body

    const cliente = new clienteModels ({
        name_cliente,
        mail,
        phone_number,
        adress,
        password,
    })

   const validate_phone = await clienteModels.findOne({phone_number:phone_number}, {phone_number})

   const validate_mail = await clienteModels.findOne({mail:mail}, {mail})

   let validate = ('Email => ' + validate_mail + ' Numero => ' +  validate_phone)

   if (validate_mail||validate_phone){
        res.send({
            message: "Email ou telefone ja cadastrado",
            validate
        })
   }
   else if(!validate_phone || !validate_mail){
       cliente.save();
        res.send({
            message: "Sucesso"
        })
   }
   else{
        res.send({
            message: "Houve erro no processo, gentileza tente mais tarde",
            validate
        })
   }
    
}

async function loginUser(req,res){
   
    const {
        mail,
        password,
    } = req.body

    const validateLogin = await clienteModels.findOne({mail:mail}, {mail})
    const validatePassword =  await clienteModels.findOne({password:password}, {password})

    res.send({
        message:"conectado",
        login: validateLogin,
        password: validatePassword,
    })
}


module.exports={
    ListarClientes,
    CriarCliente,
    loginUser,
}