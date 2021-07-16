import {SiteClient} from 'datocms-client';

export default async function receiverRequest(req,res){
    if(req.method === 'POST'){
        const TOKEN = 'bc88e9c85860946f02221fbf8b7b41';

        const client = new SiteClient(TOKEN);
        //validar os dados antes de sair cadastrando 
        const record = await client.items.create({
            itemType:'971601',
            ...req.body
            /* title:'comunidade Teste',
            image_url:'https://github.com/Gabriel4420.png',
            create_slug:'Gabriel4420' */
        })
        console.log(`Token: ${TOKEN}`)
        res.json({
            data:'alguma coisa',
            createdAtRegister: record
        })

        return;
    }

    res.status(404).json({
        message:'Ainda não deu camarada, mais você postou algo :)'
    })
   
}